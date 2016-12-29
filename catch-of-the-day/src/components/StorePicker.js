import React from 'react';

export default class StorePicker extends React.Component {
  render(){

    return (
      <div>
        {/*  The way to write comments in jsx */}
        <form className="store-selector">
          <h2> Please, enter A Store name </h2>
          <input type="text" required placeholder="Store Name"/>
          <button type="submit"> Visit Store -> </button>
        </form>
      </div>
    )
  }
}
