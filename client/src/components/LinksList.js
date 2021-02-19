import React from 'react';
import {Link} from 'react-router-dom'

export const LinksList = ({links, removeLink}) => {
    function handleRemove(link) {
        removeLink(link)
    }

    if (!links.length) {
        return <p>Links not founded</p>
    }

    return (
        <div className="uk-overflow-auto">
        <table className="uk-table uk-table-hover uk-table-divider uk-table-small">
            <thead>
                <tr>
                    <th>№</th>
                    <th>Original link</th>
                    <th>Short link</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { links.map((link, index) => {
                    return (
                        <tr key={link._id} className="uk-text-small">
                            <td>{index + 1}.</td>
                            <td>{link.from}</td>
                            <td>{link.to}</td>
                            <td>
                                <Link to={`/detail/${link._id}`}
                                      className="uk-button uk-button-default uk-button-small"
                                ><span uk-icon="more"></span></Link>
                                <button
                                    className="uk-button uk-button-default uk-button-small"
                                    onClick={() => handleRemove(link)}
                                ><span uk-icon="trash"></span></button>
                            </td>
                        </tr>
                    )
                }) }
            </tbody>
        </table>
        </div>
    )
}