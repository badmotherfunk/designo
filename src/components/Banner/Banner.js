"use client"

import "./banner.css"

export default function Banner({props}) {
    
    const {title, description} = props[0]

    return(
        <div className="heroContainer">
            <h1 className="heroTitle">{title}</h1>
            <p className="heroText">{description}</p>
        </div>     
    )
}