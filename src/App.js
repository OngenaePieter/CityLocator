import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import Overlay from 'pigeon-overlay';
import CityList from './CityList'

class App extends React.Component {
  state = {lat: 50.879, long: 4.6997}

  changeCity = (lat, long) => {
    this.setState({lat: lat, long: long})
  }
  render(){
    return (
    <div className="App">
      <header className="App-header">
        <div className="flex">
        <CityList onChange={this.changeCity}/>
        <Map center={[this.state.lat, this.state.long]} zoom={12} width={600} height={400}>
          <Marker anchor={[this.state.lat, this.state.long]} payload={1} onClick={({ event, anchor, payload }) => { }} />

          <Overlay anchor={[this.state.lat, this.state.long]} offset={[120, 79]}>
            <img src='pigeon.jpg' width={240} height={158} alt='' />
          </Overlay>
        </Map>
        </div>
      </header>
    </div>
  );}
}

export default App;
