import React from 'react'
import './Home.css';
import Product from './Product';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
    return (
        <div className = "home">
            <div className = "home__container">
                <div className = "home__image">
                    <Carousel autoPlay infiniteLoop> 
                        <div>
                            <img 
                                className = "home__image"
                                alt = "" 
                                src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB438684220_.jpg"
                            />
                        </div>
                        <div>
                            <img 
                                className = "home__image"
                                alt = "" 
                                src = "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Jupiter2020/Phase4/OnePlus_8T/D18536943_Jupiter2020_Phase4_OnePlus_8T_1500x300.jpg"
                            />
                        </div>
                        <div>
                            <img 
                                className = "home__image"
                                alt = "" 
                                src = "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Camera/Jupiter2020/Phase3/ElectroincsSlider/1500x300_Additional_off.jpg"
                            />
                        </div>
                    </Carousel>
                </div>
                <div className = "home__row">
                    <Product
                        id = "123221341" 
                        title = "Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Space Grey" 
                        price = {2424.46} 
                        image = "https://m.media-amazon.com/images/I/71L2iBSyyOL._AC_UY218_.jpg"
                        rating  = {5}
                    />
                    <Product 
                        id = "3452153233"
                        title = "Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens, 16GB Card and Carry Case" 
                        price = {1239.12} 
                        image = "https://m.media-amazon.com/images/I/914hFeTU2-L._AC_UY218_.jpg"
                        rating  = {4}    
                    />
                </div>

                <div className = "home__row">
                    <Product 
                        id = "6234234211"
                        title = "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" 
                        price = {199.99} 
                        image = "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                        rating  = {3}
                    />
                    <Product 
                        id = "52362145244"
                        title = "Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcol Fabric" 
                        price = {98.99} 
                        image = "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS9EEwV3PL3RXpBcVCjlefJCYPrHVkVEiBn1TAei91qZLwhGSVQ6QgjuNkPt1mRfg&usqp=CAc"
                        rating  = {5}
                    />
                    <Product
                        id = "252365325325" 
                        title = "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)" 
                        price = {598.99} 
                        image = "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                        rating  = {4}
                    />
                </div>

                <div className = "home__row">
                    <Product
                        id = "90829332" 
                        title = "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor- Super Ultra Wide Dual WQHD 5120 x 1440" 
                        price = {1094.99} 
                        image = "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                        rating  = {4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
