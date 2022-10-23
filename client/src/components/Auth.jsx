import React, {useState} from 'react'
import Cookies from 'universal-cookie'
import axios from 'axios'
import signinImage from '../assets/signup.jpg'
import { phoneNumber,avatarURL,password, fullName, userName, confrimPassWord } from './authComponents'

const initialState = {
  fullName : '',
  username : '',
  password : '',
  confirmPassword : '',
  phoneNumber : '',
  avatarURL : '',
}

const cookies = new Cookies();

const Auth = () => {

  const [form,setForm] = useState(initialState);
  const [isSingup, setIsSingup] = useState(true)
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  };
  const switchMode = () => {
    setIsSingup((prevIsSignUp)=> !prevIsSignUp)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const {username,password,fullName,phoneNumber,avatarURL} = form

    const URL = 'http://localhost:5000/auth';


    const {data: {token,userId,hashedPassword}} = await axios.post(`${URL}/${isSingup? 'signup':'login'}`,{
      username: username,password: password,fullName: fullName,phoneNumber: phoneNumber,avatarURL: avatarURL
    })
    cookies.set('token',token);
    cookies.set('username',username);
    cookies.set('fullName',fullName);
    cookies.set('userId',userId);

    if(isSingup) {
      cookies.set('phoneNumber',phoneNumber);
      cookies.set('avatarURL',avatarURL);
      cookies.set('hashedPassword',hashedPassword);
    }

    window.location.reload();

  }
  return (
    <div className="auth__form-container">
    <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
                <p>{isSingup ? 'Sign Up' : 'Sign In'}</p>
                <form onSubmit={handleSubmit}>
                  {isSingup &&
                  (
                    fullName(handleChange)
                )}
                 {userName(handleChange)}

                {isSingup &&
                  (
                    phoneNumber(handleChange)
                )}
                  {isSingup &&
                  (
                    avatarURL(handleChange)
                )}
                {password(handleChange)}
                { isSingup && (
                  confrimPassWord(handleChange)
                )}
                <div className="auth__form-container_fields-content_button">
                  <button>{isSingup ? "Sign Up":"Sign in"}</button>
                </div>
                </form>
                <div className="auth__form-container_fields-account">
                <p>{isSingup ? 'Already have an account? ':"Don't have an account? "}</p>
                <span onClick={switchMode}>
                  click here
                </span>
                </div>
            </div>
        </div>
        <div className="auth__form-container_image">
                <img src={signinImage} alt="sign in" />
            </div>
    </div>
  )
}

export default Auth