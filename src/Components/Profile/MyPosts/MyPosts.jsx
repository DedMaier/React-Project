import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postData = [
    {id: 1, message: 'Добрый день!', likesCount: 0},
    {id: 2, message: 'Здравствуйте!', likesCount: 10},
    {id: 3, message: 'Привет, как ты?', likesCount: 8},
    {id: 4, message: "It's my first post", likesCount: 12},
  ]

  return (
    <div className={s.postBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
        <Post message={postData[1].message} likesCount={postData[1].likesCount} />
        <Post message={postData[2].message} likesCount={postData[2].likesCount} />
        <Post message={postData[3].message} likesCount={postData[3].likesCount} />
      </div>
    </div>
  );
};

export default MyPosts;
