import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/MGY0YzMzNTMt/MGY0YzMzNTMt-NTM1Y2E3OTYt-w1500._CB411425260_.jpg" alt="homeLogo" />
                <div className="home__row">
                    <Product />
                    <Product />

                </div>
                <div className="home__row">
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className="home__-row">
                    <Product />
                </div>
            </div>

        </div>
    )
}

export default Home;
