import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://cdn.allwallpaper.in/wallpapers/960x600/16243/clouds-landscapes-trees-rock-islands-sea-960x600-wallpaper.jpg" />
      </div>
      <div>avatar + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
