import React from 'react'
import { Link, Route, BrowserRouter } from 'react-router-dom'
import Note from './views/Note'
import Book from './views/Book'
import Chat from './views/Chat'
import Post from './views/Post'
import Signin from './views/Signin'
//import Home from './components/views/Home'
//import Try from './components/views/Try'
import Signup from './views/Signup'
import Notetest from './views/Notetest'
import Test from '../testcode/Test'



const Router = () => {
  return (

    <section className="panel">
      <React.Fragment>
        <Route path='/test'>
          <Test />
        </Route>
        <Route path='/note'>
          <Note />
        </Route>
        <Route exact path='/'>
          <Book />
        </Route>
        <Route path='/book'>
          <Book />
        </Route>
        <Route path='/chat'>
          <Chat />
        </Route>
        <Route path='/post'>
          <Post />
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



const Container = () => {

  const logic = () => {
    
  }


  return (
    <div className="root-sub">
      <div className="container">

        <section className="contain-left">
          <h5 className="function-link">Note</h5>
          <Notetest />
        </section>

        <section className="contain-right">
          <BrowserRouter>
            <div className="navbar">
              <h5><Link to="/book">Book |</Link></h5>
              <h5><Link to="/chat">Chat  |</Link></h5>
              <h5><Link to="/post">Post </Link></h5>
            </div>

            <div className="navbar-content">
              <Router />
            </div>
          </BrowserRouter>
        </section>

      </div>
    </div>
  )
}

export default Container