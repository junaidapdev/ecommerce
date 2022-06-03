import React from 'react'
import '../styles.css' 
import { API } from '../backend';
const Home = () => {

    console.log("API IS", API);

  return (
    <div className='text-white'>Home</div>
  )
}

export default Home