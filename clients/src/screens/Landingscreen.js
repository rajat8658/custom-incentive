import React from 'react'
import {Link} from 'react-router-dom'

function Landingscreen() {
  return (
    <div className='row landing'>
      <div className="col-md-12 text-center">
        <h2 style={{color:'white',fontSize:'120px'}}>Custom Incentive</h2>
        <h1 style={{color:'white',fontSize:'50px'}}>Get your own reward...</h1>
        <Link to='/form'>
            <button className='btn btn-primary landing-btn'>Get Started</button>
        </Link>
      </div>
    </div>
  )
}

export default Landingscreen
