import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CreateInvoice from './pages/CreateInvoice';
import AllInvoice from './pages/AllInvoice';

class App extends Component {
  render() {
    return (
      <div className="App d-flex flex-column align-items-center justify-content-center w-100">
        <Routes>
          <Route exact path='/' element={< AllInvoice />}></Route>
          <Route exact path='/create-invoice' element={< CreateInvoice />}></Route>
          <Route exact path='/edit-invoice/:id' element={< CreateInvoice />}></Route>
          <Route exact path='/create-new-from-existing/:id' element={< CreateInvoice />}></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
