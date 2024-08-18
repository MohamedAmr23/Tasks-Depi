import React, { Fragment, useState } from 'react'
import './App.css'
const App = () => {
  const[number,setNumber]=useState(1)
  const [isVisibility,setIsVisibility]=useState(true)
  function prev(){
    setNumber(number-1)
    if(number<=1){
      setNumber(1)
    }
  }
  function next(){
    setNumber(number+1)
    if(number>=3){
      setNumber(3)
    }
  }
  const switchVisibility=()=>{
    setIsVisibility(!isVisibility)
  }
  return (
    <Fragment>
      <button className='toggle-button' onClick={switchVisibility}>{isVisibility?"close":"open"}</button>
      {isVisibility&&<div className='container'>
        <div className='box'>
            <div className='top'>
              <span style={{backgroundColor:number===1?"#8E44AD":"#ddd"}}>1</span>
              <span style={{backgroundColor:number===2?"#8E44AD":"#ddd"}}>2</span>
              <span style={{backgroundColor:number===3?"#8E44AD":"#ddd"}}>3</span>
            </div>
            <div className='middle'>
              <p>this is my message </p>
              <p>{number}</p>
            </div>
            <div className='button'>
              <button onClick={prev}>prev</button>
              <button onClick={next}>next</button>
            </div>
        </div>
      </div>}
   
    </Fragment>
  )
}

export default App