import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + " " + s.active}>
          <NavLink to="/dialogs/1">Дмитрий</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2">Олег</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3">Светлана</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/4">Инна</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/5">Андрей</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/6">Владимир</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Привет!</div>
        <div className={s.message}>Добрый вечер.</div>
        <div className={s.message}>Здравствуйте.</div>
        <div className={s.message}>Приветствую всех!</div>
      </div>
    </div>
  );
};

export default Dialogs;
