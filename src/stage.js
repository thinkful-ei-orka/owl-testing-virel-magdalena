import React from 'react';


export default function Stage() {

    let peopleOnStage = store.participants.filter(person=> person.onStage===true);
    
    return (
        <div>
        {peopleOnStage}
        </div>
    )
}