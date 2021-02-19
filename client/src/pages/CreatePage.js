import React, {useState, useContext, useCallback, useEffect} from 'react'
import {useHttp} from "../hooks/http.hook"
import {AuthContext} from "../context/AuthContext"
import {LinksList} from "../components/LinksList"
import Loader from "../components/Loader"


export const CreatePage = () => {
    const auth = useContext(AuthContext)
    const [link, setLink] = useState('')
    const [links, setLinks] = useState([])
    const {loading, request} = useHttp()
    const {token} = useContext(AuthContext)

    const fetchLinks = useCallback(async () => {
        try {
            const fetched = await request(`/api/link`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setLinks(fetched)
        } catch(e) {}
    }, [token, request])

    useEffect(() => {
        fetchLinks()
    }, [fetchLinks])

    if (loading) {
        return <Loader/>
    }

    const pressHandler = event => {
        if (event.key === 'Enter') {
            createLink()
        }
    }
    const createLink = async () => {
        try {
            await request('/api/link/generate', 'POST', {from: link}, {
                Authorization: `Bearer ${auth.token}`
            })

            await fetchLinks()
        } catch (e) { console.log ('Link not sended') }
    }

    async function removeLink(link) {
        try {
            await request('/api/link/remove/', 'POST', {to: link.to}, {
                Authorization: `Bearer ${auth.token}`
            })

            fetchLinks()
        } catch { console.log ('Link not deleted') }
    }

    return (
        <div className="uk-container" uk-scrollspy="target: > div; cls: uk-animation-slide-bottom-medium; delay: 200">
            <div className="uk-card uk-margin uk-card-default uk-card-body uk-width-1-1 ">
                <h3 className="uk-card-title">Create short link</h3>
                <input
                    className="uk-input"
                    id="link"
                    type="text"
                    name="link"
                    value={link}
                    onChange={e => setLink(e.target.value)}
                    onKeyPress={pressHandler}
                    placeholder="Paste your link"
                />
                <button
                    className="uk-margin uk-button uk-button-primary"
                    onClick={createLink}
                >Create</button>
            </div>

            <div className="uk-card uk-margin uk-card-default uk-card-body uk-width-1-1">
                <h3 className="uk-card-title">Your links</h3>

                {!loading && <LinksList links={links} removeLink={removeLink}/>}
            </div>
        </div>
    )
}