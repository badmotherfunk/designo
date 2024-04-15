import Navbar from "@/components/Navbar/Navbar"
import "./contact.css"
import Image from "next/image"
import Cities from "@/components/Cities/Cities"
import Footer from "@/components/Footer/Footer"

export default function contact() {
    return (
        <div className="contact">
            <Navbar />
            

            <div className="contactContainer">
                <div className="contactContent">
                    <h1 className="contactTitle">Contact Us</h1>
                    <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
                </div>

                <form className="contactForm">
                    <input type="text" placeholder="Name" required/>
                    <input type="email" placeholder="Email Address" required/>
                    <input type="tel" placeholder="Phone" required/>
                    <textarea placeholder="Your Message" required/>

                    <div className="contactButtonContainer">

                        <button type="submit" className="contactButton">SUBMIT</button>
                    </div>
                </form>
            </div>

            <Image 
             src="/assets/shared/desktop/bg-pattern-leaf.svg"
             width={1000}
             height={590}
             alt="Backrgound image"
             className="backgroundImageRight"
            />

            <div className="citiesContainer">
                <Cities />
            </div>

            <Footer />
        </div>
    )
}