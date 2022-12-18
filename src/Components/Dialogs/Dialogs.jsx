import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message =(props) => {
  return (
  <div className={s.message}>{props.message}</div>
  );
};


const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Дмитрий" id="1" />
        <DialogItem name="Олег" id="2" />
        <DialogItem name="Cветлана" id="3" />
        <DialogItem name="Инна" id="4" />
        <DialogItem name="Андрей" id="5" />
        <DialogItem name="Владимир" id="6" />
      </div>
      <div className={s.messages}>
        <Message message="Привет!" />
        <Message message="Добрый вечер." />
        <Message message="Здравствуйте" />
        <Message message="Приветствую всех!" />
      </div>
    </div>
  );
};

export default Dialogs;
