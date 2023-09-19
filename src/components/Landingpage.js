import React from 'react';
import './landingpage.css';
import LoremIpsum from 'react-lorem-ipsum';
import { IoIosCamera } from 'react-icons/io';
function Landingpage() {

  const profileData = JSON.parse(localStorage.getItem('newAccountData'));
  const username = profileData.name;
  const profileimage = username.length > 0 ? username[0] : '.';

  return (
    <div className='cointainer-profile'>
      <header>Account Settings</header>
      <div className='container-1'>
        <div className='image-detail'>
          <h1 className='images'>{profileimage}</h1>
          <IoIosCamera  className='camera-icon'/>
          <div className='name-mail'>
            <p>{profileData.name}</p>
            <p>{profileData.mail}</p>
          </div>
        </div>
        <LoremIpsum avgWordsPerSentence={5} />
      </div>
      <p className='dotted-line'></p>
    </div>
  )
}

export default Landingpage