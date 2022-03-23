import './App.css';
import React, { useState, useEffect } from 'react';
// import { Button, Alert } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [people, setPeople] = useState([])

  useEffect(() => {
    async function fetchPeople(param) {
      let res = await fetch('https://swapi.dev/api/people')
      let data = await res.json();
      setPeople(data.results);
      console.log("confirm")
    }

    fetchPeople("1")

  }, [])

  const sortedPeople = Object.keys(people).sort();
  console.log('people', people);
  console.log("data", people);
  console.log("sort data", sortedPeople);

  {
    return (
      <div>
        <p>
          {people.name}
        </p>
      </div>
    );
  }
}

export default App;
