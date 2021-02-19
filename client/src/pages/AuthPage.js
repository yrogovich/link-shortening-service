import React from 'react'
import {useState, useEffect, useContext} from 'react'
import {useHttp} from "../hooks/http.hook"
import {useMessage} from "../hooks/message.hook"
import {AuthContext} from "../context/AuthContext"

export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, error, request, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {
        message(error, {pos: 'bottom-right', status: 'warning'})
        clearError()
    }, [error, message, clearError])

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    
    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            message(data.message)
        } catch (e) { }
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
            message("<span uk-icon='unlock'></span> Successfully logged in! ")
        } catch (e) {}
    }

    return (
        <div className="uk-container uk-text-center uk-flex uk-flex-column uk-flex-center">

            <div className="uk-card uk-card-default uk-card-body uk-width-1-3@m uk-margin-auto uk-animation-slide-bottom-medium uk-box-shadow-large">
                <h3 className="uk-card-title"><span uk-icon="icon: user"></span> Authorization</h3>
                <div className="uk-margin uk-text-left">
                    <label className="uk-form-label" htmlFor="email">Email</label>
                    <input
                        id="email"
                        className="uk-input"
                        type="text"
                        name="email"
                        value={form.email}
                        onChange={changeHandler}
                    />
                </div>
                <div className="uk-margin uk-text-left">
                    <label className="uk-form-label" htmlFor="password">Password</label>
                    <input
                        id="password"
                        className="uk-input"
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={changeHandler}
                    />
                </div>

                <div className="uk-margin-medium-top">
                    <button
                        className="uk-button uk-button-default"
                        style={{marginRight: 10}}
                        onClick={registerHandler}
                        disabled={loading}
                    >
                        Sign up
                    </button>
                    <button
                        className="uk-button uk-button-primary"
                        onClick={loginHandler}
                        disabled={loading}
                    >
                         Sign in <span uk-icon="icon: sign-in"></span>
                    </button>
                </div>
            </div>
        </div>
    )
}