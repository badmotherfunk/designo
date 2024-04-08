import styles from "./navbar.css"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
    return(
        <nav className="navbar">
            <Link href="/">
                <Image 
                src="/assets/shared/desktop/logo-dark.png" 
                alt="Designo logo" 
                width={190}
                height={25}
                />
            </Link>

            <div>
                <ul  className="navbar-items">
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
            
        </nav>
    )
}