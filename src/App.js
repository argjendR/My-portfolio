import React from 'react';
import './App.css';
import Author from './components/Author';

function App() {
  return (
    <Author
     name="Argjend Xhelili" 
     email="gentxh@gmail.com"
     phone="070000000"
     webpage="www.gmail.com"
     image="src\logo.svg"
     description="Front-end developer, eager to learn ReactJS"
     opentowork="true"
     />
   );
}

export default App;
