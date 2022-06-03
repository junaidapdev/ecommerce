import React from 'react'
import '../styles.css' 
import { API } from '../backend';
import Base
 from './Base';
const Home = () => {

    console.log("API IS", API);

  return (
    <Base className='text-white'>Home</Base>
  )
}

export default Home