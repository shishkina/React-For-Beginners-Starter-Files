import React from 'react';
import { getFunName } from '../helpers';

export default class StorePicker extends React.Component {
  /*either bind in the constructor,
  or use arrow function,
  or bind  directly `onSubmit = goToStore.bind(this)`
  */
goToStore = (event) => {
  event.preventDefault();
  //first grab the text from the box
  const storeId = this.storeInput.value;
  //second: transition from '/' to /store/id
  this.context.router.transitionTo(`/store/${storeId}`);
}

  render(){
    return (
        <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
         {/*  The way to write comments in jsx */}
          <h2> Please, enter A Store name </h2>
          <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input)=> {this.storeInput = input}}/>
          <button type="submit"> Visit Store -> </button>
        </form>
    )
  }
}
  StorePicker.contextTypes = {
    router: React.PropTypes.object
  };
