import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  return (
    <div>
      My post
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remome</button>
      </div>
      <div className={s.posts}>
        <Post message='Добрый день!' likesCount='0' />
        <Post message='Здравствуйте!' likesCount='10' />
        <Post message="Привет, как ты?" likesCount='8' />
        <Post message="It's my first post" likesCount='12' />
        <Post message="Всем привет!" likesCount='4' />
      </div>
    </div>
  );
};

export default MyPosts;
