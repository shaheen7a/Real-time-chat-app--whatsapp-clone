import React from 'react'
import ChatContainer from '../ChatContainer/ChatContainer'
import Sidebar from '../Sidebar/Sidebar'
import "./ChatPage.css"

const ChatPage = ({ currentUser, signOut }) => {
  return (
    <div className='chatpage'>
      <div className='chatpage-container'>
        <Sidebar currentUser={currentUser} signOut={signOut} />
        <ChatContainer currentUser={currentUser} />
      </div>
    </div>
  )
}

export default ChatPage