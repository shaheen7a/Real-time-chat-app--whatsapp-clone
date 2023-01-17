import React, { useEffect, useState } from 'react'
import "./Sidebar.css"
import { useNavigate } from 'react-router-dom';
import TollIcon from '@mui/icons-material/Toll';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import UserProfile from '../UserProfile/UserProfile';
import db from '../../firebase';

const Sidebar = ({ currentUser, signOut }) => {

  const [allUsers, setAllUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [friendList, setFriendList] = useState([]);
  const user = "data:image/png;base64,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"
  const navigate = useNavigate();


  useEffect(() => {
    const getAllUsers = async () => {
      const data = await db.collection("users").onSnapshot((snapshot) => {
        setAllUsers(
          snapshot.docs.filter((doc) => doc.data().email !== currentUser?.email)
        );
      });
    };

    const getFriends = async () => {
      const data = await db
        .collection("Friendlist")
        .doc(currentUser.email)
        .collection("list")
        .onSnapshot((snapshot) => {
          setFriendList(snapshot.docs);
        });
    };

    getAllUsers();
    getFriends();
  }, []);

  const searchedUser = allUsers.filter((user) => {
    if (searchInput) {
      if (
        user.data().fullname.toLowerCase().includes(searchInput.toLowerCase())
      ) {
        return user;
      }
    }
  });

  const searchItem = searchedUser.map((user) => {
    return (
      <UserProfile
        name={user.data()?.fullname}
        photoURL={user.data()?.photoURL}
        key={user.id}
        email={user.data().email}
      />
    );
  });

  return (
    <div className='sidebar'>
      <div className='sidebar-header'>
        <div
          onClick={signOut}
          className='sidebar-header-img'>
          <img src={currentUser?.photoURL} alt="user" />
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
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            name='search'
            placeholder='Search...' />
        </div>
      </div>

      <div className='sidebar-chat-list'>
        {searchItem.length > 0
          ? searchItem
          : friendList.map((friend) => (
            <UserProfile
              name={friend.data()?.fullname}
              photoURL={friend.data().photoURL}
              lastMessage={friend.data().lastMessage}
              email={friend.data().email}
              key={friend.data().photoURL}
            />
          ))}
        <UserProfile name="Search for names UP ↑" photoURL={user}  />
      </div>
    </div>
  )
}

export default Sidebar