import React from 'react';
import { useStateValue } from '../StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

const Checkout = () => {

    const [{basket, user}, dispatch] = useStateValue();
    
    return (
        <div className = "checkout">
            <div className = "checkout__left">
                <img 
                    className = "checkout__ad"
                    alt = ""
                    src = "https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"    
                />
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className = "checkout__title">
                    Your Shopping Basket</h2>
                    
                    {basket.map(item => (
                        <CheckoutProduct 
                            key = {item.id}
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                        />    
                    ))}
                        
                </div>
                
            </div>
            <div className = "checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
