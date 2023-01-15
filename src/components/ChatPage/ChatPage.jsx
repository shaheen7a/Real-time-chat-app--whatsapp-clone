import React from 'react'
import ChatContainer from '../ChatContainer/ChatContainer'
import Sidebar from '../Sidebar/Sidebar'
import "./ChatPage.css"

const ChatPage = () => {
  return (
    <div className='chatpage'>
      <div className='chatpage-container'>
        <Sidebar />
        <ChatContainer />
      </div>
    </div>
  )
}

export default ChatPage