import './App.css';
import { useState } from 'react';
import Headers from './components/Header';
import Recipes from './components/Recipe1';


function App() {
  return (
    <div className='container' >
     <Headers />
     <Recipes />
    </div>
  );
}

export default App;