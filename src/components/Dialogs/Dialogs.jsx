import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogsItem from './Dialogitem/Dialogsitem';
import s from './Dialogs.module.css'
import Message from './Message/Message';


const Dialogs = (props) => {
    
        let dialogsElements = props.dialogs.map(dialog => <DialogsItem name={dialog.name} id={dialog.id} />)
        let messagesElements = props.messages.map(message => <Message message={message.telegr}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                    {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}


export default Dialogs;