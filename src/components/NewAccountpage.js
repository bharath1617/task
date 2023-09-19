import React from 'react'
import Input from './Input/Input'
import { useState } from 'react'
import './components.css'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function checkEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function NewAccountpage() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [companyname, setCompanyname] = useState('');
  const [yesOrNo, setyesOrNo] = useState('');
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const submit = () => {
    if (name === "" || number === "" ||
      password === "" || companyname === "" ||
      mail === "" || yesOrNo === "") {
      setError("Please fill all the details!");
      toast.error("All details must be entered!")
    }
    else {
      if(number.length < 10 ) {
        toast.error("phone number must contain 10 digits")
      }
      else if(!checkEmail(mail)) {
        toast.error('Please enter a valid email address');
      }
      else if(password.length <= 6) {
        toast.error("password must be contain more than six letters")
        
      }
      
      else {
        const newAccountData = {
          "name": name,
          "number": number,
          "mail": mail,
          "password": password,
          "companyname": companyname,
          "Are you in agency": yesOrNo,
        };
        console.log(newAccountData);
        localStorage.setItem("newAccountData", JSON.stringify(newAccountData));
        setName("");
        setCompanyname("")
        setMail("")
        setNumber("")
        setPassword("")
        setyesOrNo("")
        setError("")
        toast.success("Account created successfully");
        navigate('/landingpage');
      }
    }
  }


  return (
    <div className='container'>
      <div className='details'>
        <h1>Create your PopX account</h1>
        <Input type="text" state={name}
          setState={setName}
          placeholder="Marry Doe"
          label="Full Name" />
        <Input type="number"
          state={number} setState={setNumber}
          placeholder="Marry Doe"
          label="Phone number" />
        <Input type="email"
          state={mail} setState={setMail}
          placeholder="Marry Doe"
          label="Email addess" />
        <Input type="password"
          state={password} setState={setPassword}
          placeholder="Marry Doe"
          label="Password" />
        <Input type="text"
          state={companyname} setState={setCompanyname}
          placeholder="Marry Doe"
          label="Company name" />
        <p>Are you in Agency?</p>
        <div>
          <input type='radio' className='yesOrno'
            required name='checking' value="Yes"
            id='forYes' onChange={(e) => setyesOrNo("Yes")} />
          <label htmlFor="forYes">Yes</label>
          <input type='radio' className='yesOrno'
            required name='checking' value="No"
            id='forNo' onChange={(e) => setyesOrNo("No")} />
          <label htmlFor="forNo">No</label>
        </div>

        <button className='submit-button' onClick={submit}>Create Account</button>
        <p style={{ color: "red" }}>{error}</p>
      </div>
    </div>
  )
}

export default NewAccountpage