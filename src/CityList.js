import React from 'react'
import cities from './cities.json'
import { propTypes } from 'pigeon-maps'

function CityList(props){
    return(
        <ul>{cities.map((city, index) => (
            <li className={props.selectedCity == city.Name ? 'selected' : null} key={index} onClick={() => props.onChange(city.Lat, city.Lon, city.Name)}>{city.Name}</li>
        ))}</ul>
    )
}

export default CityList