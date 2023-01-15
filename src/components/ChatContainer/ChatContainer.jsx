import React, { useState } from 'react'
import "./ChatContainer.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoodIcon from '@mui/icons-material/Mood';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import user from "../../assets/user.png"
import ChatMessage from '../ChatMessage/ChatMessage';
import EmojiPicker from 'emoji-picker-react';


const ChatContainer = () => {
  const [message, setMessage] = useState('');
  const [openEmojiBox, setOpenEmojiBox] = useState(false);

  return (
    <div className='chat-container'>
      <div className="chat-container-header">
        <div className="chat-user-info">

          <div className="chat-user-img">
            <img src={user} alt="" />
          </div>
          <p>Aous Shaheen</p>
        </div>

        <div className='chat-container-header-btn'>
          <MoreVertIcon />
        </div>
      </div>

      <div className='chat-display-container'>
        <ChatMessage message="Hi Hru?" date="14-01-2023" />
        <ChatMessage message="Hi Hru?" date="14-01-2023" />
      </div>


      {openEmojiBox &&
          (
            <EmojiPicker
              onEmojiClick={(emojiData, event) =>
                setMessage(message + emojiData.emoji)} />
          )
        }


      <div className='chat-input'>    
        <div className='chat-input-btn'>
          <MoodIcon onClick={() => setOpenEmojiBox(!openEmojiBox)} />
          <AttachFileIcon />
        </div>

        <form action="">
          <input
            type="text"
            placeholder='Type a message..'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </form>

        <div className='chat-input-send-btn'>
          <SendIcon />
        </div>
      </div>
    </div>
  )
}

export default ChatContainer