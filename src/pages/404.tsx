import React from "react"
import Header from "../components/header";


const NotFoundPage = () => {
  return(
    <div>
      <Header headerText="Not Found Page" />
      <Header headerText="It's pretty cool" />

      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  )
}

export default NotFoundPage;
