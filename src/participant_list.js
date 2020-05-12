import React from 'react';
// import store from './store';
import Participant from './participant';

export default function participants(props) {
    // let newStore = store.participants.filter(person=> person.inSession===true);
    console.log(props);
    let people = props.participants.map(person =>
        <Participant key={person.id} avatar={person.avatar} name={person.name} inSession={person.inSession} onStage={person.onStage} />)

    return (
        <section>
            {people}
        </section>
    )
}