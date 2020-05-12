import React from 'react';


export default function participant(props){
    
    const stage = 'on Stage';
    const session = 'in Session';

    if (props.onStage === true) {
        return (
            <div className="Participant">
            <img src={props.avatar} alt="avatar" />
            <h1>{props.name}</h1>
            <p>{stage}</p>
            </div>
        )}
    else if (props.inSession === true) {
    
    return (
        <div className="Participant">
        <img src={props.avatar} alt="avatar" />
        <h1>{props.name}</h1>
        <p>{session}</p>
        </div>
    )}

    else {
        return '';
    }
}