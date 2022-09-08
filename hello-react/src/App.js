import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Todolist from './Todolist';
import { useState } from 'react';
import { useCounter } from './hooks';
import EventHandling from './EventHand';
import HCounter from './HCounter';


function App() {
  var [firstname,lastname]=React.useState('haritha')
  return (
    
    <div className="betterview">
      <h1>Welcome to the react tutorial</h1>
      <h1>{firstname}</h1>
      <EventHandling/>
      <Todolist/>
      <Counter/>
      <HCounter/>
      
    </div>
    
  );
}

export default App;
