import React from 'react';
// import store from './store';
import Participant from './participant';

export default function participants(props){
    // let newStore = store.participants.filter(person=> person.inSession===true);
    console.log(props);
let people = props.participants.map(person =>
<section><img src={person.avatar} alt='avatar'/><h1>{person.name}</h1><p>{person.inSession}</p></section>);
    return(
        <section>
            <Participant avatar={participants[0]} />
        </section>
    )
}