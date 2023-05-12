import { useState, useEffect, useContext } from "react";
import { useParams, Link  } from "react-router-dom"
import { DataContext } from "../DataContext";

function CountryDetails(){
    const countries = useContext(DataContext);
    const {id} = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        setDetails(countries.find(country => country.alpha3Code === id))
   }, [id])
   
    if (details.length === 0 || id === undefined ){
        return (<div>loading...</div>)
    }

    let flag = details.alpha2Code.toLowerCase();
    let flagUrl = "https://flagpedia.net/data/flags/icon/72x54/" + flag + ".png";
    
    const borders = details.borders.map(alphaCode => {
        let countryName = countries.find(country => country.alpha3Code === alphaCode);

        return (
            <div key={countryName.alpha3Code}>
                <Link to={"/" + countryName.alpha3Code}> {countryName.name.official} </Link>
            </div>
        )  
    });

    return (
        <div className="countryDetails">
            <img alt="country-flag" src={flagUrl}/>
            <h1> {details.name.official}</h1>
            <div>Capital: {details.capital}</div>
            <div>Area: {details.area}km<sup>2</sup></div>
            <div>Borders: { details.borders < 1 ? "none" : borders } </div>
        </div>
    )
}

export default CountryDetails