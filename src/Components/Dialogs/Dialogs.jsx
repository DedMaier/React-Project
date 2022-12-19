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
  let dialogData = [
    {id: 1, name: 'Дмитрий'},
    {id: 2, name: 'Олег'},
    {id: 3, name: 'Светлана'},
    {id: 4, name: 'Инна'},
    {id: 5, name: 'Андрей'},
    {id: 6, name: 'Владимир'},
  ]

  let messagesData = [
    {id: 1, message: 'Привет!'},
    {id: 2, message: 'Добрый вечер.'},
    {id: 3, message: 'Здравствуйте.'},
    {id: 4, message: 'Приветствую всех!'},
  ]

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogData[0].name} id={dialogData[0].id} />
        <DialogItem name={dialogData[1].name} id={dialogData[1].id} />
        <DialogItem name={dialogData[2].name} id={dialogData[2].id} />  
        <DialogItem name={dialogData[3].name} id={dialogData[3].id} />
        <DialogItem name={dialogData[4].name} id={dialogData[4].id} />
        <DialogItem name={dialogData[5].name} id={dialogData[5].id} />
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message}  />
        <Message message={messagesData[1].message}  />
        <Message message={messagesData[2].message}  />
        <Message message={messagesData[3].message}  />
      </div>
    </div>
  );
};

export default Dialogs;
