
import './App.css';
import Nav from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';
import { Container } from 'react-bootstrap';

function App() {
  const [countries, setCountries] = useState([]);
  
  const handleData = async () => {
    const response = await fetch("https://ih-countries-api.herokuapp.com/countries/")
    const data = await response.json();
    data.sort((a, b) => {
      const nameA = a.alpha3Code 
      const nameB = b.alpha3Code 
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    console.log(data)
    setCountries(data)   
}
  useEffect(() => {
    handleData(); 
  }, [])

  return (
    <>
    <Container>
        <Nav/>
        <CountriesList countries={countries}/>
        <Routes>
          <Route path="/:id" element={<CountryDetails countries={countries}/>}/>
        </Routes>
      </Container>
    </>
  );
}

export default App;
