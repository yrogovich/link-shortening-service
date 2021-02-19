import React from 'react';
import {useHistory} from "react-router-dom"

export const LinkCard = ({ link }) => {
    const history = useHistory()

    return (
        <div className="uk-card uk-card-default uk-card-body uk-width-1-1 uk-animation-slide-bottom-medium">
            <h3>Link detail info</h3>

            <p>Your short link: <a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a></p>
            <p>Original link: <a href={link.from} target="_blank" rel="noopener noreferrer">{link.from}</a></p>
            <p>Click count: <strong>{link.clicks}</strong></p>
            <p>Created date: <strong>{ new Date(link.date).toLocaleDateString() }</strong></p>

            <button
                className="uk-button uk-button-primary"
                onClick={history.goBack}
            >
                Go back
            </button>
        </div>
    )
}