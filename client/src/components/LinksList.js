import React from 'react';
import {Link} from 'react-router-dom'

export const LinksList = ({links}) => {
    if (!links.length) {
        return <p>Links not founded</p>
    }

    return (
        <table className=" highlight responsive-table">
            <thead>
            <tr>
                <th>No</th>
                <th>Original link</th>
                <th>Short link</th>
                <th>Actions</th>
            </tr>
            </thead>

            <tbody>
            { links.map((link, index) => {
                return (
                    <tr key={link._id}>
                        <td>{index + 1}</td>
                        <td>{link.from}</td>
                        <td>{link.to}</td>
                        <td>
                            <Link to={`/detail/${link._id}`}>Open</Link>
                        </td>
                    </tr>
                )
            }) }

            </tbody>
        </table>
    )
}