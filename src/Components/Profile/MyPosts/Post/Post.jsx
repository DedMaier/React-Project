import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://cs8.pikabu.ru/avatars/133/x133002-690929330.png" />
      {props.message}
      <div>
        <span>like</span> { props.likesCount } 
      </div>
    </div>
  );
};

export default Post;
