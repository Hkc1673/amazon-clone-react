import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/MGY0YzMzNTMt/MGY0YzMzNTMt-NTM1Y2E3OTYt-w1500._CB411425260_.jpg" alt="homeLogo" />
                <div className="home__row">
                    <Product
                        id="12321341"
                        title="10 Minutes 38 Seconds in This Strange World"
                        image="https://m.media-amazon.com/images/I/81fI1O-RX8L._AC_UL320_.jpg"
                        price="13,74"
                        rating={5}
                    />
                    <Product
                        id="49538094"
                        title="Kindle - Now with a Built-in Front Light - Black - Ad-Supported"
                        image="https://m.media-amazon.com/images/I/61Ww4abGclL._AC_UY218_.jpg"
                        price="89,99"
                        rating={4}
                    />

                </div>
                <div className="home__row">
                    <Product
                        id="78912345"
                        title="New Apple iPad Pro (11-inch, Wi-Fi, 256GB) - Silver(2nd Generation)"
                        image="https://m.media-amazon.com/images/I/81lqq8UF5ML._AC_UY218_.jpg"
                        price="849,00"
                        rating={5}
                    />
                    <Product
                        id="45625896"
                        title="The Queen's Gambit"
                        image="https://m.media-amazon.com/images/I/51EocHLTvAL.jpg"
                        price="10,99"
                        rating={4}
                    />
                    <Product
                        id="74125896"
                        title="Columbia mens Delta Ridge Down Jacket"
                        image="https://m.media-amazon.com/images/I/61GPsbTvu5L._AC_UL320_.jpg"
                        price="275,63"
                        rating={5}
                    />
                </div>
                <div className="home__-row">
                    <Product
                        id="36925147"
                        title="New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 512GB SSD Storage) - Silver (Latest Model)"
                        image="https://m.media-amazon.com/images/I/71gD8WdSlaL._AC_UY218_.jpg"
                        price="1399,00"
                        rating={5}
                    />
                </div>
            </div>

        </div>
    )
}

export default Home;
