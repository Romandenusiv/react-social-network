import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css'


const Message = (props) => {

let messagePut = React.createRef(); 
let clickButton = () => {
    let message = messagePut.current.value;  
    alert(message);
}

    return (
    <div className={s.message}>{props.message}
    <textarea ref={messagePut} className={s.areatext}></textarea>
    <button onClick={clickButton} className={s.send}></button>
    </div>
    );
}




export default Message;