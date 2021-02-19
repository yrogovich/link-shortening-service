import React from 'react'

export default function Loader(props) {
    let ratio = props.ratio || 3;

    return <div className="uk-position-absolute uk-position-center" uk-spinner={`ratio: ${ratio}`}></div>
}
