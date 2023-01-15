import React from 'react'
import "./Home.css"
import Sidebar from "../Sidebar/Sidebar"
import background from "../../assets/WhatsAppbg.png"

const Home = ({ currentUser, signOut }) => {
  return (
    <div className="home">
      <div className="home-container">
        <Sidebar currentUser={currentUser} signOut={signOut} />

        <div className="home-bg">
          <img src={background} alt="background" />
        </div>


      </div>
    </div>
  )
}

export default Home