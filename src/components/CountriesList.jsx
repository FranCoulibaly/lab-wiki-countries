import { Link } from "react-router-dom";
import { Container} from "react-bootstrap";

function CountriesList({countries}){

    const renderList = countries.map((country) => {
        let flag = country.alpha2Code.toLowerCase();
        let flagUrl = "https://flagpedia.net/data/flags/icon/72x54/" + flag + ".png";
        country === undefined && console.log('undefined');
        return (
            <div key={country.alpha3Code}>
                <img className="card-img flagImg p-2"  src={flagUrl} alt="country-flag"/>   
                <Link className="p-2"  to={country.alpha3Code}>{country.alpha3Code}</Link>
            </div>
        );
    });
    
    return (
       <div className="countries">
            <h1>countries list</h1>
            <Container className="countryContainer">     
                {renderList}    
            </Container>
       </div> 
    )
}

export default CountriesList