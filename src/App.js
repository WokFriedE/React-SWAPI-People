import './App.css';
import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import People from './components/People';
import Paging from './components/Paging';
import Averages from './components/Averages';
import Search from './components/Search';
import LoadingSplash from './components/LoadingSplash';

function App() {

  //==========================================================
  // Function initialization
  //==========================================================

  //change page function
  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= 9) {
      setCurrentPage(pageNumber)
    }
  }

  //search function
  const filterPeople = (people, query) => {
    if (!query) {
      return people;
    }

    return people.filter((person) => {
      const personName = person.name.toLowerCase();
      return personName.includes(query.toLowerCase());
    });
  };

  //==========================================================
  // Variable Assignment / Initialization 
  //==========================================================

  // Information on every person
  const [allPeople, setAllPeople] = useState([]);

  //Information gathering varibales
  let nextPageSWAPI = 'https://swapi.dev/api/people/?page=1&format=json';
  const [pagesLoaded, setPagesLoaded] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [peoplePerPage, setPeoplePerPage] = useState(10);

  let [loading, setLoading] = useState(false);


  //==========================================================
  // Use effect
  //==========================================================
  useEffect(() => {
    console.log("fetching data");

    //repalce with a loop
    async function fetchAllData(param) {
      if (pagesLoaded > totalPages) return;

      try {
        setLoading(true);
        let res = await fetch(param);
        let data = await res.json();

        console.log(param);

        nextPageSWAPI = data.next;

        setAllPeople(prev => [...prev, ...data.results.map(person => ({
          name: person.name,
          gender: person.gender,
          hair_color: person.hair_color,
          height: person.height,
          mass: person.mass
        })),
        ]);

        setPagesLoaded(prev => prev + 1);
        setTotalPages(Math.ceil(data.count / peoplePerPage));

        if (nextPageSWAPI !== null) {
          fetchAllData(nextPageSWAPI);
        } else {
          setLoading(false);
          console.log("Promises fulfilled");
        }

      } catch (error) {
        return (<h1>Error, something went wrong</h1>)
      }
    }

    fetchAllData(nextPageSWAPI);
  }, [])


  //===============================================================
  // Generating the list of people / required data for each person
  //===============================================================

  const sortedPeopleList = allPeople.sort((first, sec) => (first.name > sec.name) ? 1 : ((sec.name > first.name) ? -1 : 0));

  //Search bar
  const [searchQuery, setSearchQuery] = useState('');
  const filteredPeople = filterPeople(sortedPeopleList, searchQuery);


  // getting the range for pagination
  const indexOfLast = currentPage * peoplePerPage;
  const indexOfFirst = indexOfLast - peoplePerPage;
  const currentPeople = filteredPeople.slice(indexOfFirst, indexOfLast);

  //Finding the average of the people's heights and weights
  let weights = []; let averageWeight = 0;
  let heights = []; let averageHeight = 0;

  currentPeople.map((person, i) => {
    if (person.mass !== "unknown") {
      let weight = person.mass.replace(",", "");
      weights.push(parseFloat(weight, 10));
    }
    if (person.height !== "unknown") {
      let height = person.height.replace(",", "");
      heights.push(parseFloat(height, 10));
    }
  })

  averageWeight = weights.reduce((a, b) => a + b, 0) / weights.length;
  averageHeight = heights.reduce((a, b) => a + b, 0) / heights.length;


  //==========================================================
  // HTML Return
  //==========================================================

  return (
    <>
      <div className="center-text">
        <h1>Star Wars People</h1>
      </div>
      <LoadingSplash loading={loading} pagesLoaded={pagesLoaded} totalPages={totalPages} />
      <Paging peoplePerPage={peoplePerPage} totalPeople={filteredPeople.length} paginate={paginate} loading={loading} currentPage={currentPage} />
      <Search loading={loading} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <People people={currentPeople} loading={loading} />
      <Averages averageWeight={averageWeight} averageHeight={averageHeight} loading={loading} />

    </>
  );

}
export default App;
