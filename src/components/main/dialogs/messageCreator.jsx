import React from "react";
import { Message } from "./message";

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
    {
        id: 3,
        text: 'bue',
    },
]

export let messageElems = messageData.map(message => <Message text={message.text}/>)