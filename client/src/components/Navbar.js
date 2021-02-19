import React, {useContext} from 'react'
import {useHistory} from "react-router-dom"
import {AuthContext} from "../context/AuthContext"
import {useMessage} from "../hooks/message.hook"

export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)
    const message = useMessage()

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        message("<span uk-icon='lock'></span>  You are logged out!")
        history.push('/')
    }

    const menu = <div className="uk-navbar-right">
        <ul className="uk-navbar-nav">
            <li><a href="/" onClick={logoutHandler}>Logout</a></li>
        </ul>
    </div>

    return (
        <header className="navbar uk-navbar-container uk-navbar-transparent">
            <div className="uk-container">
                <nav className="uk-navbar">
                    <div className="uk-navbar-left">
                        <a href="/" className="uk-navbar-item uk-logo">
                            <span uk-icon="icon: link; ratio: 2"></span> Shorten it
                        </a>
                    </div>

                    { auth.isAuthenticated && menu }
                </nav>
            </div>
        </header>
    )
}