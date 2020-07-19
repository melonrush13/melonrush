
import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about/">My Story</Link>
      <Link to="/projects/">Projects</Link>
      <Link to="/adventures/">Adventures</Link>
      <Link to="/social/">Social</Link>
      <Link to="/contact">Contact</Link>
      <Header headerText="Hello World!" />
      <p>What a wonderful world, indeed.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}