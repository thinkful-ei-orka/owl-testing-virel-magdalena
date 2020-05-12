import React from 'react';
import store from './store';


export default function chat(props){
    const chat_log = props.chatEvents.map(message=>
        <Messages participantId={message.participantId} type={message.type} message={message.message} time={message.time} timestamp={message.timestamp} />
    )
    return(
        <section>
        {chat_log}
        </section>
    )
}