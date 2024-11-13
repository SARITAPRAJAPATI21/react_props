import React from 'react';
import UserCard from './components/UserCard'
import './App.css';

function App() {
   const des="React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props"

  return (
    <> <UserCard title="React props data" text={des}/>
    <UserCard title="props with default values" />
   </>
 
  );
}

export default App;
