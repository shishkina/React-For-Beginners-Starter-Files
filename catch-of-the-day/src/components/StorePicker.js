import React from 'react';
import { getFunName } from '../helpers';

export default class StorePicker extends React.Component {
  render(){
    return (
        <form className="store-selector">
         {/*  The way to write comments in jsx */}
          <h2> Please, enter A Store name </h2>
          <input type="text" required placeholder="Store Name" defaultValue={getFunName()}/>
          <button type="submit"> Visit Store -> </button>
        </form>
    )
  }
}
