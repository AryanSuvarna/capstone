import React from 'react'
import { Link } from 'react-router-dom'
import headerImg from '../images/restaurantFood.jpg'

const Header = () => {
    return (
        <header className='header'>
            <section>
                {/* header texts */}
                <div className='banner'>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/reservation">
                        <button aria-label="On Click">Reserve a table!</button>
                    </Link>
                </div>

                {/* header image */}
                <div className='banner-img'>
                    <img src={headerImg} alt='restaurantImg'/>
                </div>
            </section>
        </header>
    )
}

export default Header