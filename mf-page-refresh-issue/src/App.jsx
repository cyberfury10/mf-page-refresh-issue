import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import About from "./About"
import Home from "./Home"

import "./index.css"

const App = () => (
  <Router>
    <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home/foo/about" element={<About />} />

        </Routes>
    </div>
  </Router>
)
ReactDOM.render(<App />, document.getElementById("app"))
