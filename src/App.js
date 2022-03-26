import './App.css';
import React, { useState, useEffect } from 'react';
import People from './components/People.js';
// import { Button, Alert } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  let [allPeople, setAllPeople] = useState([]);
  let [indexesNames, setIndexesNames] = useState([]);
  let indexes = {};
  let [pages, setPages] = useState([]);
  let nextPage = 'https://swapi.dev/api/people/?page=1';

  useEffect(() => {

    console.log("fetching data");
    async function fetchAllData(param) {

      let res = await fetch(param);
      let data = await res.json();
      setPages(Math.ceil(data.count / 10));

      nextPage = data.next;

      setAllPeople(prev => [...prev, ...data.results.map(person => ({
        name: person.name,
        gender: person.gender,
        hair_color: person.hair_color,
        height: person.height,
        mass: person.mass
      })),
      ]);

      if (nextPage !== null) {
        fetchAllData(nextPage);
      }
      console.log("fetching data complete");
    }

    fetchAllData(nextPage);
  }, [])

  for (let i = 0; i < allPeople.length; i++) {
    indexes[allPeople[i].name] = {
      "gender": allPeople[i].gender,
      "hair_color": allPeople[i].hair_color,
      "height": allPeople[i].height,
      "mass": allPeople[i].mass
    }
  }

  console.log(indexes);
  // indexes = Array.from(new Set(indexes));
  var sortedNames = Object.keys(indexes).sort();

  // console.log(allPeople);

  // console.log(indexes);
  console.log(sortedNames);
  // console.log(pages);


  for (let i = 0; i < pages; i++) {
    sortedNames.map((person, x) => {

    })
  }



  return (
    <>

      {sortedNames.map((person, i) => { //make for loop that will loop through all people indexes, use page algorithm (index+10*page)
        return (
          // loop through cards
          <div key={i}>
            <h2>{person}</h2>
            <li>
              {indexes[person].gender},
              {indexes[person].hair_color},
              {indexes[person].height},
              {indexes[person].mass}
            </li>
          </div>
          //add each height and mass for total mass and height
        )
      })}


    </>
  );
}

export default App;
