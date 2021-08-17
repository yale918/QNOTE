import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Container from './components/Container'


/*
const Routing = () => {
  return (
    <section className="panel">
      <React.Fragment>
        <Route exact path='/'>
          <Notetest />
        </Route>
        <Route path='/test'>
          <Test />
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
        <Route path='/signup'>
          <Signup />
        </Route>
      </React.Fragment>
    </section>
  )
}
*/


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container />
    </BrowserRouter>
  );
}

export default App;
