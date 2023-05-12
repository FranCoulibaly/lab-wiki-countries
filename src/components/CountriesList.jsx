import { Link } from "react-router-dom";
import { Container} from "react-bootstrap";
import { useContext } from "react";
import { DataContext } from "../DataContext";

function CountriesList(){
    const data = useContext(DataContext);
    const countries = data.sort((a, b) => {
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
    
    console.log(countries);

    const renderList = countries.map((country) => {
        let flag = country.alpha2Code.toLowerCase();
        let flagUrl = "https://flagpedia.net/data/flags/icon/72x54/" + flag + ".png";
        country === undefined && console.log('undefined');
        return (
            <div key={country.alpha3Code} className="country">
                <img className="card-img flagImg p-2"  src={flagUrl} alt="country-flag"/>   
                <Link className="p-2"  to={country.alpha3Code}>{country.alpha3Code}</Link>
            </div>
        );
    });
    
    return (
       <div >
            <h1>countries list</h1>
            <div className="countries">
            <Container className="countryContainer">     
                {renderList}    
            </Container>
            </div>
       </div> 
    )
}

export default CountriesList