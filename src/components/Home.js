import React from 'react'
import { useNavigate } from 'react-router-dom'
import './components.css'

function Home() {
    const navigate = useNavigate();

    const createNewAccount = () => {
        navigate('/newaccount');
    }
    const alreadyRegistered=() =>{
          navigate("/loginpage")
    }
    return (
        <div className='container'>
            <div className='homePage'>
                <h1>Welcome to POPX</h1>
                <p>Lorem ipsem dolor sit amet,consectetur adipiscing elit,</p>
                <button className='newaccount' onClick={createNewAccount}>Create Account</button>
                <button className='registered' onClick={alreadyRegistered}>Already Registered? Login</button>
            </div>
        </div>
    )
}

export default Home;