
import React, { useState, useEfect } from 'react';
import CharacterSheet from './components/CharacterSheet';

function App() {

  const [showForm, setShowForm] = useState(false);
  const [race, setRace] = useState([]);
  const [clas, setClas] = useState([]);

  useEfect(() => {
    fetch("http://localhost:3000/")
  })

  return (
    <div className="App">
      <CharacterSheet />
    </div>
  );
}

export default App;
