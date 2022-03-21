import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [people, setPeople] = useState([])

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch('https://swapi.dev/api/people')
      let data = await res.json();
      setPeople(data.results);
    }

    fetchPeople();
  }, [])
  console.log('people', people);
  console.log("data", people);

  return (
    <div className="main">

    </div>
  );
}

export default App;
