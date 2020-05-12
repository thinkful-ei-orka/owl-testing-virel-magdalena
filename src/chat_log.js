import React from 'react';
import store from './store';


export default function chat(props){
    const chat_log = props.chatEvents.map(message=>
        <div>
            <p>{message.name}</p>
            <p>{message.type}</p>
        </div>);
    
    return(
        {chat_log}
    )
}