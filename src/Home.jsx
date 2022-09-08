import React from "react"
import { Link } from "react-router-dom"

function Home(props) {
  return (
    <div>
        <Link to={"/home/foo/about"}> Click here to go to lengthy url</Link>
    </div>
  )
}

export default Home
