import React from 'react';
import Profile from './Avatarprofile/Profile';
import s from './Content.module.css'
import Posts from './Posts/Posts';
const Content = () => {
    return (
        <div>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Hubble_Extreme_Deep_Field_%28full_resolution%29.png/1174px-Hubble_Extreme_Deep_Field_%28full_resolution%29.png' className={s.wallpaper}></img>
        <Profile/>
        <Posts/>
        </div>
    );
}


export default Content;