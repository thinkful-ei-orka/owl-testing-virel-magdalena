import React from 'react';
import store from './store';

export default function Stage() {

    let newlist = store.participants.filter(person=> person.onStage===true);
    let peopleOnStage = newlist.map(person=> <div key={person.id}><p>{person.name}</p><img src={person.avatar} alt="person"/></div>);
    return (
        <div className="right">
        {peopleOnStage}
        </div>
    )
}