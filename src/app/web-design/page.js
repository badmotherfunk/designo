"use client"
import data from "../data.json"
import "./web-design.css"
import Navbar from "@/components/Navbar/Navbar"
import Card from "@/components/Card/Card"

export default function webDesign() {
    // console.log(data)


    return(
        <div className="pagesBase">
            <Navbar/>
            <div className="heroContainer">
                <h1 className="heroTitle">WEB DESIGN</h1>
                <p className="heroText">We build websites that serve as powerful marketing tools and bring memorable brand experiences.</p>
            </div>

            <div className="cardContainer">
            {data.web.projects.map((project, index) => (
                <Card key={index} props={project}/>
            ))}
            </div>

        </div>

    )
}