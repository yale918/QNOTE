//import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return(
        <div>
            welcome to QNOTE<br></br>
            <br></br>
            <Link to='/try'>Make a try click me (= </Link>
            <br></br><br></br>
            <Link to='/signin'>Signin click me (=</Link>
            <br></br>
            <Link to='/signup'>Signup click me (=</Link>
            
        </div>

    )
}

export default Home