import { useState, useEffect } from "react";
import { useParams, Link  } from "react-router-dom"

function CountryDetails({countries}){
    const {id} = useParams();
    const [details, setDetails] = useState([]);

    const handleData = async () => {
        const response = await fetch(`https://ih-countries-api.herokuapp.com/countries/${id}`)
        const data = await response.json();
        console.log(data)
        setDetails(data) 
        console.log(details);    
    }

    useEffect(() => {
        handleData();
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
        <>
        <h1>{id}</h1>
            <img alt="country-flag" src={flagUrl}/>
            <h1> {details.name.official}</h1>
            <div>Capital: {details.capital}</div>
            <div>Area: {details.area}km<sup>2</sup></div>
            <div>Borders: { details.borders < 1 ? "none" : borders } </div>
        </>
    )
}

export default CountryDetails