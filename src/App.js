
import './App.css';
import Nav from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';
import { Container } from 'react-bootstrap';
import DataProvider from './DataContext';

function App() {

  return (
    <DataProvider>
    <Container>
        <Nav/>
        <div className='countriesLayout'>
          <CountriesList />
          <Routes>
            <Route path="/:id" element={<CountryDetails/>}/>
          </Routes>
        </div>
      </Container>
    </DataProvider>
  );
}

export default App;
