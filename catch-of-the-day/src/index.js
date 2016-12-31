import React from 'react';
import { render } from 'react-dom'; //import only one method
import { BrowserRouter, Match, Miss } from 'react-router';

import './css/style.css';
import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

//dissect the github url and extract the repo name (instead of passing it as a sting to the router)
const repo = `/${window.location.pathname.split('/')[1]}`;

const Root = () => {
  //basename={repo}
  //remove basename in order to continue workin on localhost
  return (
    <BrowserRouter basename={repo}>
      <div>
        <Match exactly pattern="/" component={StorePicker} />
        <Match pattern="/store/:storeId" component={App} />
        <Miss component={NotFound}/>
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#main'));
