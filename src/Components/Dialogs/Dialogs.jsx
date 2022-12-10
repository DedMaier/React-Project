import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
      <div className={s.dialog + ' ' + s.active}>Дмитрий</div>
      <div className={s.dialog}>Олег</div>
      <div className={s.dialog}>Светлана</div>
      <div className={s.dialog}>Инна</div>
      <div className={s.dialog}>Андрей</div>
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
