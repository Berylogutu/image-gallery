export function Tabs(props) {
    function handleClick() {
        console.log('clicked')

    }


    return (
        <>
        <div className='tabs-container'>
            <button onClick={handleClick} className='btn primary-btn'>Breakfast</button>
            <button onClick={handleClick} className='btn primary-btn'>Lunch</button>
            <button onClick={handleClick} className='btn primary-btn'>Dinner</button>
            <button onClick={handleClick} className='btn primary-btn'>Supper</button>
            <button onClick={handleClick} className='btn primary-btn'>All</button>
        </div>
        </>
    )
}