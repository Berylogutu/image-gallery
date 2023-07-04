import React, {useState} from 'react'
import { Tabs } from './Tabs'
import menu from './menu'


export function Meals(props) {
    const [items, setItems] = useState(menu)

    const handleClick = (categItem) => {
       const updatedItems = items.filter((currentElem) => {
            return currentElem.category === categItem
        })

        setItems(updatedItems)
    }

    
    return (
        <>
        <div>
        <h1>Order Your Favourite Dish</h1>
      <hr></hr>
      <div className='tabs-container'>
            <button onClick={() => handleClick('breakfast')} className='btn primary-btn'>Breakfast</button>
            <button onClick={() => handleClick('lunch')} className='btn primary-btn'>Lunch</button>
            <button onClick={() => handleClick('dinner')} className='btn primary-btn'>Dinner</button>
            <button onClick={() => handleClick('supper')} className='btn primary-btn'>Supper</button>
            <button onClick={() => setItems(menu)} className='btn primary-btn'>All</button>
        </div>
        </div>
        <Tabs handleClick={handleClick}/>
        <div >
            
            {   
            items.map((elem) => {
                const {id, name, image, description, price } = elem;
                    return (
                        <div className='meal-container'>
                        <img src={image} alt={name} />
                        <div>{name}</div>
                        <div>{description}</div>
                        <div>Price: {price}</div>
                        <button className='btn primary-btn'>Order Now</button>
                        <p>Prices may varry on selected date</p>
                        </div>
                        
                    )

            })
                
            }
            
        </div>
        </>
    )
}