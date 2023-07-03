import React, {useState} from 'react'
import menu from './menu'


export function Meals(props) {
    const [items, setItems] = useState(menu)
    console.log(items)
    
    return (
        <>
        <div className='meal-container'>
            {   
            items.map((elem) => {
                const {id, name, image, description, price } = elem;
                    return (
                        <>
                        <img src={image} alt='meal name' />
                        <div>{name}</div>
                        <div>{description}</div>
                        <div>Price: {price}</div>
                        <button className='btn primary-btn'>Order Now</button>
                        <p>Prices may varry on selected date</p>
                        </>
                        
                    )

            })
                
            }
        </div>
        </>
    )
}