import {React, useState} from 'react'
import {Tabs} from './Tabs'
import {Meals} from './Meals'
import style from './style.css'



export default function App() {

  return (
    <>
    <div className='container'>
      <h1>Order Your Favourite Dish</h1>
      <hr></hr>
    <Tabs />
    <Meals />

    </div>
    </>
  )
}
