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

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: "Дмитрий" },
    { id: 2, name: "Олег" },
    { id: 3, name: "Светлана" },
    { id: 4, name: "Инна" },
    { id: 5, name: "Андрей" },
    { id: 6, name: "Владимир" },
  ];

  let dialogsElements = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messages = [
    { id: 1, message: "Привет!" },
    { id: 2, message: "Добрый вечер." },
    { id: 3, message: "Здравствуйте." },
    { id: 4, message: "Приветствую всех!" },
  ];

  let messagesElements = messages.map((m) => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
