import React from 'react';


export default function participant(props){
    return(
        <img src={props.avatar} alt="avatar" />
        <h1>{props.name}</h1>
        <p>{props.inSession}</p>
    )
}