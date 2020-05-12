import React from 'react';

import './App.css';
import store from './store';


import ParticipantList from './participant_list';



function App() {

  let newParticipants = store.participants.filter(person=> person.inSession===true);
  
  return (
    <ParticipantList participants={newParticipants}/>
  );
}

export default App

