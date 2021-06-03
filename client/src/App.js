import './App.css';
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar'
import Note from './components/views/Note'
import Book from './components/views/Book'
import Signin from './components/views/Signin'
//import Home from './components/views/Home'
import Try from './components/views/Try'
import Signup from './components/views/Signup'
import Notetest from './components/views/Notetest'


const Routing = () => {
  return (
    <section className="panel">
      <React.Fragment>
        <Route exact path='/'>
          <Notetest />
        </Route>
        <Route path='/note'>
          <Note />
        </Route>
        <Route path='/book'>
          <Book />
        </Route>
        <Route path='/signin'>
          <Signin />
        </Route>
        <Route path='/try'>
          <Try />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
      </React.Fragment>
    </section>
  )
}



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routing />
    </BrowserRouter>
  );
}

export default App;
