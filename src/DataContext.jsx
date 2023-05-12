import { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

function DataProvider({ children }){
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://ih-countries-api.herokuapp.com/countries/")
        .then(response => response.json())
        .then(data => setData(data))
        .catch(err => console.log(err))

        
    }, [])

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
}

export default DataProvider;