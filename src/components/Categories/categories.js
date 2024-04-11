"use client"
import Image from "next/image"

export default function Categories({props}) {
    console.log(props)
    return(
        <div className="categoriesContainer">
                <Image 
                 src={props.images}
                 width={100}
                 height={100}
                 sizes="100vw"
                 className="categoriesImage"
                 alt={props.name}
                />

            <h2>{props.name}</h2>

            <div className="categoriesContent">
                <p>VIEW PROJECTS</p>
                <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#E7816B" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
            </div>
        </div>
    )
}