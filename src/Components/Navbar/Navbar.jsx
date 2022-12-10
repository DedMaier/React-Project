import React from "react";
import s from "./Navbar.module.css";

console.log(s);

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a href="/profile">Profile</a>
      </div>
      <div className= {`${s.item} ${s.active}`}>
        <a href="/dialogs">Messages</a>
      </div>
      <div className={s.item}>
        <a href="/new">New</a>
      </div>
      <div className={s.item}>
        <a href="/music">Music</a>
      </div>
      <div className={s.item}>
        <a href="/setting">Setting</a>
      </div>
    </nav>
  );
};

export default Navbar;