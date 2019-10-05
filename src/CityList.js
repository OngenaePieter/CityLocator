import React from 'react'
import cities from './cities.json'
import { propTypes } from 'pigeon-maps'

function CityList(props){
    return(
        <ul>{cities.map((city, index) => (
            <li key={index} onClick={() => props.onChange(city.Lat, city.Lon)}>{city.Name}</li>
        ))}</ul>
    )
}

export default CityList