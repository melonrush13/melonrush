import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

const About = () => {
    return (
        <div>
            <Header headerText="About Page"/>
            <h1>Mel Rush</h1>
            <p>Hey that's me!</p>
            <Link to="/">Go back to the homepage</Link>

        </div>
    )
}

export default About
