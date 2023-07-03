import React from "react";
import { DialogItem } from "./dialog";
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

export let dialogsElems = dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>);