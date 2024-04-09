"use client"
import Image from "next/image"
import Link from "next/link"
import "./navbar.css"
import React, { useState } from "react"

export default function Navbar() {

    const [active, setActive] = useState(false)

    const handleToggle = () => {
        setActive(!active)
    }
    console.log(active)

    return(
        <nav className="navbar">
            <Link href="/" className="logo-link">
                <Image 
                src="/assets/shared/desktop/logo-dark.png" 
                alt="Designo logo" 
                width={190}
                height={25}
                />
            </Link>

            <div>
                <ul className={active ? "navbar-items active" : "navbar-items"}>
                    <Link href="/company">
                        <li>OUR COMPANY</li>
                    </Link>
                    <Link href="/locations">
                        <li>LOCATIONS</li>
                    </Link>
                    <Link href="/contact">
                        <li>CONTACT</li>
                    </Link>
                </ul>
            </div>
            <div className={active ? "opacity-overlay-active" : "opacity-overlay"}></div>

            <div className="menu-hamburger" onClick={handleToggle}>
                {!active ?
                   <svg width="24" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="#1D1C1E" fillRule="evenodd"><path d="M0 0h24v4H0zM0 8h24v4H0zM0 16h24v4H0z"/></g></svg>
                :
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M17.071.1L19.9 2.93l-7.071 7.07 7.071 7.072-2.828 2.828L10 12.828l-7.071 7.071L.1 17.071 7.17 10 .102 2.929 2.929.1l7.07 7.07 7.072-7.07z" fill="#1D1C1E" fillRule="evenodd"/></svg>
                }
            </div>
            
        </nav>
    )
}