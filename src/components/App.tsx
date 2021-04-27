import React from "react";
import ContactList from 'components/ContactList';
import ContactDetails from 'components/ContactDetails';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="ui fixed inverted menu">
        <div className="ui container">
          <div className="item centerAlignHorizontal large-text">Address Book</div>
        </div>
      </div>
      <div className='content-body'>
        <Route exact path='/' component={ContactList} />
        <Route path='/details' component={ContactDetails} />
      </div>
    </>
  );
}

export default App;
