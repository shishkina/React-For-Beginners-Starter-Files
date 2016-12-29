import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
  constructor() {
    super();
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    //getInitialState
    this.state = {
      fishes: {},
      order: {}
    };
  }

  addFish(fish) {
    //update state
    //... is spreading will take every item of the object(in this case state)
    // and spread into the newly creating object
    const fishes = {...this.state.fishes}
    //add in new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    //set state
    this.setState({ fishes });
  }

  loadSamples() {
    this.setState({
      fishes: sampleFishes
    });
  }
  render(){
    return(
    <div className="catch-of-the-day">
      <div className="menu">
        <Header tagline="Fresh Seafood Market"/>
      </div>
      <Order/>
      <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
    </div>
    )
  }
}
export default App;
