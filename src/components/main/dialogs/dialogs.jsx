import React from "react";
import s from './dialogs.module.css';
import { dialogsElems } from "./dialogCreator";
import { messageElems } from "./messageCreator";

export const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {/* <DialogItem id={dialogsData[0].id} name={dialogsData[0].name}/>
                <DialogItem id={dialogsData[1].id} name={dialogsData[1].name}/>
                <DialogItem id={dialogsData[2].id} name={dialogsData[2].name}/>
                <DialogItem id={dialogsData[3].id} name={dialogsData[3].name}/>
                <DialogItem id={dialogsData[4].id} name={dialogsData[4].name}/> */}
                {dialogsElems}
            </div>
            <div className={s.messages}>
                {/* <Message text={messageData[0].text}/>
                <Message text={messageData[1].text}/>
                <Message text={messageData[2].text}/> */}
                {messageElems}
            </div>
        </div>
    )
}