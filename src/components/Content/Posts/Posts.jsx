import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css'


const Posts = () => {


  let newPostElement = React.createRef()

  
 let onButtonClick = () => {
   let text = newPostElement.current.value;
   alert(text);
 }

    return (
    <div className={s.content}>   
          <h3>My posts</h3>
          <div>
            <div>
              <textarea ref={newPostElement}></textarea>
            </div>
            <div>
              <button onClick={onButtonClick}>Add post</button>
            </div>
          </div>
        <div className={s.mainPost}>
          <h1>My Posts</h1>
          <Post message=' Hi wrld!'/>
          <Post message=' New aplication?'/>
        </div>
    </div>

    );
}


export default Posts;