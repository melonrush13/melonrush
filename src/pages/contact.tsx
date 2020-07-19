import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

const Contact = () => {
    return (
        <div style={{ color: `teal` }}>
            <Link to="/">Home</Link>
            <Header headerText="Contact" />
            <p>Send us a message!</p>
      </div>
    )
}

export default Contact
