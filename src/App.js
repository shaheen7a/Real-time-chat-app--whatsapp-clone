import "./App.css";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import ChatPage from "./components/ChatPage/ChatPage";
import { useState } from "react";
import Login from "./components/Login/Login";
import { auth } from "./firebase";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        setUser(null);
        localStorage.removeItem("user");
      })
      .catch((err) => alert(err.message));
  };
  return (
    <Router>
      <div className="App">
        {user ? (
          <Routes>
            <Route path="/" element={<Home currentUser={user} signOut={signOut} />} />
            <Route path="/:emailID" element={<ChatPage currentUser={user} signOut={signOut} />} />
          </Routes>
        ) : (
          <Login setUser={setUser} />
        )}
      </div>
    </Router>
  );
}

export default App;
