import React, { useState, useEffect } from 'react';
import Areas from './Areas'
import Details from './Details';

const Main = () => {
    const [areas, setAreas] = useState([])
    const [details, setDetails] = useState([])

    fetch('https://localhost:3001/api/areas')
        .then(res => res.json())
        .then(data=>setAreas(data))

    useEffect(()=> {
        fetch(`https://localhost:3001/api/details/${areas.id}`)
        .then(res=>res.json())
        .then(data=>setDetails(data))
    }
    ,[areas])

    return ( 
    <div>
        <Areas areasData = {areas}/>
        <Details detailsData = {details}/>
    </div> 
    );
}
 

export default Main;