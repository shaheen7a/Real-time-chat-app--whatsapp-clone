import React from 'react'
import "./Sidebar.css"
import user from "../../assets/user.png"
import TollIcon from '@mui/icons-material/Toll';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import UserProfile from '../UserProfile/UserProfile';

const Sidebar = () => {

  return (
    <div className='sidebar'>
      <div className='sidebar-header'>
        <div className='sidebar-header-img'>
          <img src={user} alt="user" />
        </div>

        <div className='sidebar-header-btn'>
          <TollIcon />
          <InsertCommentIcon />
          <MoreVertIcon />
        </div>
      </div>

      <div className='sidebar-search'>
        <div className='sidebar-search-input'>
          <SearchIcon />
          <input type="text" name='search' placeholder='Search...' />
        </div>
      </div>

      <div className='sidebar-chat-list'>
        <UserProfile name="Aous Shaheen" photoURL={user} />
        <UserProfile name="John" photoURL={user} />
        <UserProfile name="Adam" photoURL={user} />
        <UserProfile name="Mike" photoURL={user} />
      </div>
    </div>
  )
}

export default Sidebar