import React from 'react'
import {data, data1} from '../App';
import { useContext } from 'react'



const Child3 = () => {
    const n= useContext(data);
    const a= useContext(data1);
  return (
  <h1> My name is {n} and my age is {a}</h1>
  )
}

export default Child3

