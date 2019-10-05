import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import CityList from './CityList'

class App extends React.Component {
  state = {lat: 50.879, long: 4.6997, selectedCity: "Leuven"}

  changeCity = (lat, long, selectedCity) => {
    this.setState({lat: lat, long: long, selectedCity: selectedCity})
  }
  render(){
    return (
    <div className="App">
      <header className="App-header">
        <div className="flex">
        <CityList selectedCity={this.state.selectedCity} onChange={this.changeCity}/>
        <Map center={[this.state.lat, this.state.long]} zoom={12} width={600} height={400}>
          <Marker anchor={[this.state.lat, this.state.long]} payload={1} onClick={({ event, anchor, payload }) => { }} />
        </Map>
        </div>
      </header>
    </div>
  );}
}

export default App;
