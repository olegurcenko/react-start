import React from "react";
import s from './dialogs.module.css';
import { DialogItem } from "./dialog";
import { Message } from "./message";

export const Dialogs = (props) => {
    let dialogsElems = props.state.dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>);
    let messageElems = props.state.messageData.map(message => <Message text={message.text}/>)

    const messageInput = React.createRef();

    const onclickFunc = () => {
        alert(messageInput.current.value)
    }

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
                <div className={s.messagesBlock}>
                    {messageElems}
                </div>
                <div className={s.messageInputBlock}>
                    <textarea className={s.messageInput} placeholder="New message" ref={messageInput}></textarea>
                    <button className={s.messageSendBtn} onClick={onclickFunc}>Send</button>
                </div>
            </div>
        </div>
    )
}