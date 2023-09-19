import React from 'react'
import Input from './Input/Input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './components.css';

function Loginpage() {
  const [logMail, setLogMail] = useState("");
  const [logPassword, setLogPassword] = useState("");
  const navigate = useNavigate();
  const toProfilepage = () => {
    if (logMail === "" || logPassword === "") {
      toast.error("Password and mail must be filled.")
    }
    else {
      const storedData = localStorage.getItem('newAccountData');
      if (storedData === null) {
        toast.error("You have not created an account yet!");
        navigate('/newaccount');
        return;
      }
      else {
        const profileData = JSON.parse(storedData);
        if (profileData.mail === logMail && profileData.password === logPassword) {
          toast.success("user Logged In successfully")
          navigate('/landingpage')
        }
        else {
          toast.error("Password or email did not match!")
        }
      }
    }
  }
  return (
    <div className='container'>
      <div className='details'>
        <h1>Signin to Your PopX account</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <Input
          type={"email"}
          label={"Email Address"}
          placeholder={"Enter email address"}
          setState={setLogMail}
        />

        <Input
          type={"password"}
          label={"Password"}
          placeholder={"Enter password"}
          setState={setLogPassword}
        />
        <button className='login-button' onClick={toProfilepage} >Login</button>
      </div>
    </div>
  )
}

export default Loginpage;