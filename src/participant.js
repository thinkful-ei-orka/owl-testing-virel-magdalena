import React from 'react';


export default function participant(props){
    
    const stage = 'on Stage';
    const session = 'in Session';

    if (props.onStage === true) {
        return (
            <div className="Participant">
            <img className="participantImg" src={props.avatar} alt="avatar" />
            <p>{props.name}</p>
            <p>{stage}</p>
            </div>
        )}
    else if (props.inSession === true) {
    
    return (
        <div className="Participant">
        <img className="participantImg" src={props.avatar} alt="avatar" />
        <p>{props.name}</p>
        <p>{session}</p>
        </div>
    )}

    else {
        return '';
    }
}