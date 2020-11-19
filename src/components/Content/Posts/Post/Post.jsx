import React from 'react';
import s from './Post.module.css'


const Post = (props) => {
    return (
        <div className={s.post}>
            <img src='https://png.pngtree.com/png-vector/20190704/ourmid/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg' className={s.ava}></img>
            {props.message}
            <div>
                <span>Like</span>
            </div>
        </div>
    );
}


export default Post;