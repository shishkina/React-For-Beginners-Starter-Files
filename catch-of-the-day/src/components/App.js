import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';
import base from '../base';

export default class App extends React.Component {

  /*if bind using the arrow function, we don't even need the constructor!
  and with refactoring, the state is initialized as object property..
  Leave the commented code here for the future reference
  */
  /*
  constructor() {
    super();
    bind all class nethods to constructor
    another way of binding!!!  look at addFish method!!!
    this.addFish = this.addFish.bind(this);
  }
  */
  //define initial state just as object property
  state = {
    fishes: {},
    order: {}
  };

  componentWillMount() {
  //runs right before the <App> is rendered
    this.ref = base.syncState(`${this.props.params.storeId}/fishes`
    , {
      context: this,
      state: 'fishes'
    });
    // check if there is any order in local storage
    const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);
    if(localStorageRef) {
      //update <App> component's order state
      this.setState({
        order: JSON.parse(localStorageRef)
      });
    }
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order));
  }

  //using arrow finction we are able to bind context of `this` from the parent
  //BUTTTT, make sure to add semicolon after method declaration
  addFish = (fish) => {
    //update state
    //... is spreading will take every item of the object(in this case `state`)
    // and spread into the object being created 
    const fishes = {...this.state.fishes}
    //add in new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    //set state
    this.setState({ fishes });
  };

  updateFish = (key, updatedFish) => {
    const fishes = {...this.state.fishes};
    fishes[key] = updatedFish;
    this.setState({ fishes });
  };

  removeFish = (key) => {
    const fishes = {...this.state.fishes};
    fishes[key] = null;
    this.setState({ fishes });
  };

  loadSamples = () => {
    this.setState({
      fishes: sampleFishes
    });
  }

  addToOrder = (key) => {
    // take a copy of state
    const order = {...this.state.order};
    //update or add a new number of fish ordered
    order[key] = order[key] + 1 || 1;
    //update state
    this.setState({ order });
  };

  removeFromOrder = (key) => {
    const order = {...this.state.order};
    delete order[key];
    this.setState({ order });
  }

  render(){
    return(
    <div className="catch-of-the-day">
      <div className="menu">
        <Header tagline="Fresh Seafood Market"/>
        <ul className="list-of-fishes">
          {
            Object
            .keys(this.state.fishes)
            .map(key => <Fish
                          key={key}
                          index={key}
                          details={this.state.fishes[key]}
                          addToOrder={this.addToOrder}
                          />)
          }
        </ul>
      </div>
      <Order
        fishes={this.state.fishes}
        order={this.state.order}
        params={this.props.params}
        remove={this.removeFromOrder}
        />
      <Inventory
        addFish={this.addFish}
        updateFish={this.updateFish}
        loadSamples={this.loadSamples}
        removeFish={this.removeFish}
        fishes={this.state.fishes}
        storeId={this.props.params.storeId}
         />
    </div>
    )
  }
  static propTypes = {
    params: React.PropTypes.object.isRequired
  };
}
