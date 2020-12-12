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
                    title="All-new Echo Dot (4th Gen) | Smart speaker with clock and Alexa | Glacier White"
                    price={39.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/61lHou2GzvL._AC_SX679_.jpg"
                    rating= {5}
                />
            </div>

            <div className="home__row">
                <Product
                    id = "12345"
                    title="Blink Mini – Compact indoor plug-in smart security camera, 1080 HD video, motion detection, night vision, Works with Alexa – 2 cameras"
                    price={49.98}
                    image="https://images-na.ssl-images-amazon.com/images/I/41GGPRqTZtL._AC_.jpg"
                    rating= {5}
                />
                <Product
                    id = "12367"
                    title="Expo Low Odor Dry Erase Marker Set with White Board Eraser and Cleaner, Fine Tip Dry Erase Markers, Assorted Colors, 7 Piece Set with Whiteboard Cleaner"
                    price={5.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/911BFcjCuiL._AC_SL1500_.jpg"
                    rating= {5}
                />
                <Product
                    id = "12389"
                    title="JBL FLIP 5, Waterproof Portable Bluetooth Speaker, Black (New Model)"
                    price={89.95}
                    image="https://images-na.ssl-images-amazon.com/images/I/711-KB1VppL._AC_SL1500_.jpg"
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
