import React from 'react'
import { Link } from 'react-router-dom';
import '../Style/homepage.css'

const Homepage = () => {
  return (
    <>
   <div className="content-container">
    <img src="/home.jpg" alt="" />
    <div className="home-content">
        <h1>GAME OF THRONES</h1>
        <p>When people ask you what happened here, tell them the North remembers</p>
         <Link to="/characters">
          <button>Characters</button>
        </Link>
    </div>
    </div>

    </>
  )
}

export default Homepage