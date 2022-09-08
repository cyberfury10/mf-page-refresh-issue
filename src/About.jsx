import React from "react"
import { Link } from "react-router-dom"

function About(props) {
  return (
    <>
      <p>
        on page refresh remoteEntry.js is fetched from "http://localhost:3000/home/foo/remoteEntry.js" it should be
        "http://localhost:3000/remoteEntry.js"{" "}
      </p>
      <div>
        <Link to={"/"}> Click here to go to root</Link>
      </div>
    </>
  )
}

export default About
