//home component

import {React,  useEffect,  useState } from 'react'
import Restcard from './Restcard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Restaurant() {
// state to hold data from api
    var [restaurantList,setRestaurant]=useState([])

// function to call api -- for api cal we are using async and await and fetch for fetching data
//since we used aync and await method we can directly store the output data in 'const result' a variable without use of then

const fetchData=async()=>{
   const result= await fetch('./restaurants.json')
   result.json().then(  //we can only save the result once in const result, if you want it again you need to access using .then
    data=>{
    setRestaurant(data.restaurants)
   }
   )
} 
// the output data will be in json format to convert that we use json()
/*  since using async and await we can only access and store once in a variable we use then to  access the data once more from result to get the 
json to js converted data and store in data to store that in restaurantList using setRestaurant to update/store data in restaurantList
here we only need restaurants in data so data.restaurants  */

 
console.log(restaurantList);


//first working hook is useEffect.import it and call the function inside it expects callback function.after arrow fn provide whichever function that wants to work
//also give an empty array or works like a loop.works continuesly.if you dont want useeffect to work infinitly give an empty array so it will stop at a max of 4 or 5
useEffect(()=>{
fetchData()
},[])

  return (
    <Row>
  {
    restaurantList.map(item=>(
    <Col className='p-5' lg={4} md={6}>  
    <Restcard restdata={item}></Restcard>
    </Col>
    ))
  }
  
    </Row>
  )
}

export default Restaurant