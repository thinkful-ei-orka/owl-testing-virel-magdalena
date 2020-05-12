import React from 'react';

import './App.css';
import store from './store';


import ParticipantList from './participant_list';
import Stage from './stage';
import Chat from './chat_log';


function App() {

  let newParticipants = store.participants.filter(person=> person.inSession===true);
  
  return (
    <div>
      <div className="container">
      <ParticipantList participants={newParticipants}/>
      <Stage />
    </div>
      <Chat />
    </div>
  );
}

export default App

