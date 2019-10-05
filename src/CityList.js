import React from 'react'
import cities from './cities.json'
import { propTypes } from 'pigeon-maps'

class CityList extends React.Component{
    state = {city: null}
    handleChange = (event) => {
        this.setState({city: event.target.value});
      }
    
    render(){
        return(
            <div>
            <input type="text" placeholder="Zoek" onChange={this.handleChange}></input>
            <ul>{cities.map((city, index) => {
                if(this.state.city === null || city.Name.toLowerCase().includes(this.state.city.toLowerCase()))
                return (<li className={this.props.selectedCity === city.Name ? 'selected' : null} key={index} onClick={() => this.props.onChange(city.Lat, city.Lon, city.Name)}>{city.Name}</li>)
            })}</ul>
            </div>
        )
    }
}

export default CityList