import React from 'react'
import "./Login.css"
import logo from "../../assets/whatsapp-logo.png"
import google from "../../assets/google-logo.png"
import db, { auth, googleProvider } from "../../firebase";
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {

  const navigate = useNavigate();

  const signInWithGoogle = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((result) => {
        const newUser = {
          fullname: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
        };
        navigate("/");
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
        db.collection("users").doc(result.user.email).set(newUser);
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className='login'>
      <div className='login-container'>
        <img
          className='login-logo'
          src={logo}
          alt="logo" />
        <p className='login-name'>
          Whats App Web
        </p>
        <button 
        onClick={signInWithGoogle}
        className='login-btn'>
          <img src={google} alt="google" />
          Login with Google
        </button>
      </div>
    </div>
  )
}

export default Login