import './App.css';
import React, { useState, useEffect } from 'react';
import { Button, Card, Pagination, PageItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import PageBar from './components/PaginationComp.js';
import People from './components/People.js';
import PaginationComp from './components/PaginationComp.js';

function App() {
  // Information on every person
  let [allPeople, setAllPeople] = useState([]);
  let peopleInfo = {};

  let [pages, setPages] = useState([]);
  let seperatePages = {};
  let nextPage = 'https://swapi.dev/api/people/?page=1';

  //Pagination
  let active = 1;
  let items = [];


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

  //generates a dictionary of names and their attributes needed
  for (let i = 0; i < allPeople.length; i++) {
    peopleInfo[allPeople[i].name] = {
      "gender": allPeople[i].gender,
      "hair_color": allPeople[i].hair_color,
      "height": allPeople[i].height,
      "mass": allPeople[i].mass
    }
  }

  //creates the alphabeticalized list of names
  var sortedNames = Object.keys(peopleInfo).sort();

  //creates the list of people for each page
  for (let i = 1; i <= pages; i++) {
    sortedNames.map((person, x) => {
      if (x < 10 * i && x >= 10 * (i - 1)) {
        seperatePages[i] = {
          ...seperatePages[i],
          [person]: peopleInfo[person]
        }
      }
    })
  }

  //sets the pages aviable for pagination
  for (let i = 1; i <= pages; i++) {
    items.push(
      <Pagination.Item key={i} active={i === active}>
        {i}
      </Pagination.Item>
    );
  }

  console.log(seperatePages);

  return (
    <>
      {/* <PaginationComp pages={pages} /> */}
      <Pagination>{items}</Pagination>
      {/* <People pageCompleted={seperatePages} page={active} /> */}

      {/* {sortedNames.map((person, i) => { //make for loop that will loop through all people indexes, use page algorithm (index+10*page)
        return (
          loop through cards
          <div key={i}>
            <h2>{person}</h2>
            <li>
              {peopleInfo[person].gender},
              {peopleInfo[person].hair_color},
              {peopleInfo[person].height},
              {peopleInfo[person].mass}
            </li>
          </div>
          add each height and mass for total mass and height
        )
      })} */}


    </>
  );

}
export default App;
