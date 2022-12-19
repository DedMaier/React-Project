import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let posts = [
    { id: 1, message: "Добрый день!", likesCount: 0 },
    { id: 2, message: "Здравствуйте!", likesCount: 10 },
    { id: 3, message: "Привет, как ты?", likesCount: 8 },
    { id: 4, message: "It's my first post", likesCount: 12 },
  ];

  let postsElements = posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

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
      <div className={s.posts}></div>
      {postsElements}
    </div>
  );
};

export default MyPosts;
