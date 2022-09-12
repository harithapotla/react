import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Todolist from './Todolist';
import { useState } from 'react';
import { useCounter } from './hooks';
import EventHandling from './EventHand';
import HCounter from './HCounter';
import Task from './Task';
import TodosStatus from './TodolistwithStatus';
import ConditionalStyle from './ConditionalStyle';
import FStatus from './Status';
import CountClass from './CountClass';
import TodolistClass from './TodolistClass';
import Countries from './Countries';



function App() {
  var [firstname,lastname]=React.useState('haritha')
  return (
    
    <div className="betterview">
    <Countries/>
    {/*<TodolistClass/>
    <CountClass/>  
    <FStatus/>
      <ConditionalStyle/>
      <h1>Welcome to the react tutorial</h1>
      <h1>{firstname}</h1>
      <EventHandling/>
      <Todolist/>
      <Counter/>
      <HCounter/>
      <Task/>
  <TodosStatus/>*/}
      
    </div>
    
  );
}

export default App;
