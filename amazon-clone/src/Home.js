import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_1x._CB414278668_.jpg" alt="" />
            </div>

            <div className="home__row">
                <Product
                    id = "123"
                    title="PlayStation 4 Pro 1TB Console"
                    price={490}
                    image="https://images-na.ssl-images-amazon.com/images/I/41GGPRqTZtL._AC_.jpg"
                    rating= {5}
                />
                <Product
                    id = "1234"
                    title="Lenovo - IdeaPad L340 15 Gaming Laptop - Intel Core i5 - 8GB Memory - NVIDIA GeForce GTX 1650 - 256GB Solid State Drive - Black"
                    price={648}
                    image="https://images-na.ssl-images-amazon.com/images/I/614L9gKcksL._AC_SX679_.jpg"
                    rating= {5}
                />
            </div>

            <div className="home__row">
                <Product
                    id = "12345"
                    title="PlayStation 4 Pro 1TB Console"
                    price={490}
                    image="https://images-na.ssl-images-amazon.com/images/I/41GGPRqTZtL._AC_.jpg"
                    rating= {5}
                />
                <Product
                    id = "12367"
                    title="Lenovo - IdeaPad L340 15 Gaming Laptop - Intel Core i5 - 8GB Memory - NVIDIA GeForce GTX 1650 - 256GB Solid State Drive - Black"
                    price={648}
                    image="https://images-na.ssl-images-amazon.com/images/I/614L9gKcksL._AC_SX679_.jpg"
                    rating= {5}
                />
                <Product
                    id = "12389"
                    title="Lenovo - IdeaPad L340 15 Gaming Laptop - Intel Core i5 - 8GB Memory - NVIDIA GeForce GTX 1650 - 256GB Solid State Drive - Black"
                    price={648}
                    image="https://images-na.ssl-images-amazon.com/images/I/614L9gKcksL._AC_SX679_.jpg"
                    rating= {5}
                />
            </div>

            <div className="home__row">
                <Product
                    id="123456"
                    title="Lenovo - IdeaPad L340 15 Gaming Laptop - Intel Core i5 - 8GB Memory - NVIDIA GeForce GTX 1650 - 256GB Solid State Drive - Black"
                    price={648}
                    image="https://images-na.ssl-images-amazon.com/images/I/614L9gKcksL._AC_SX679_.jpg"
                    rating= {5}
                />
            </div>
        </div>
    )
}

export default Home
