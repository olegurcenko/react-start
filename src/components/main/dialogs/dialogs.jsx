import React from "react";
import s from './dialogs.module.css';
import { DialogItem } from "./dialog";
import { Message } from "./message";

export const Dialogs = (props) => {

    let dialogsData = [
        {
            id: '0',
            name: 'Ivan',
            key: 0,
        },
        {
            id: '1',
            name: 'Sveta',
            key: 1, 
        },
        {
            id: '2',
            name: 'Vlad',
            key: 2,
        },
        {
            id: '3',
            name: 'Nikita',
            key: 3,
        },
        {
            id: '4',
            name: 'Seva',
            key: 4,
        },
    ];

    let dialogsElems = dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>);

    let messageData = [
        {
            id: 0,
            text: 'Hi',
        },
        {
            id: 1,
            text: 'How are you?',
        },
        {
            id: 2,
            text: 'yo',
        },
    ]

    let messageElems = messageData.map(message => <Message text={message.text}/>)

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