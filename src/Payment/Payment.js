import React, { useState, useEffect } from 'react'
import CheckoutProduct from '../Checkout/CheckoutProduct';
import { useStateValue } from '../StateProvider';
import { Link, useHistory } from 'react-router-dom'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducer';
import axios from 'axios';
import './Payment.css'

const Payment = () => {

    const [{basket, user},dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // generate special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //stripe expects the total in a currencies subunits
                url: `/payment/create?total=${getBasketTotal(basket) * 100}`
            })
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    },[basket])

    console.log('the client secret is >>> ', clientSecret);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent = payment confirmation

            setSucceeded(true)
            setError(null)
            setProcessing(false)
            
            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders')
        }) 
    }

    const handleChange = event => {
        // Listen the changes in the cardElement
        // and disable any error as the customer types their card details 
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return (
        <div className = "payment">
            <div className = "payment__container">
                <h1>
                    Checkout ({<Link to = '/checkout'>{basket?.length} items)</Link>}
                </h1>
                <div className = "payment__section">
                    <div className = "payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className = "payment__address">
                        <p>{user?.email}</p>
                        <p>123, React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                <div className = "payment__section">
                    <div className = "payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className = "payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id = {item.id}
                                title = {item.title}
                                image = {item.image}
                                price = {item.price}
                                rating = {item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className = "payment__section">
                    <div className = "payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className = "payment__details">
                        {/* Stripe payment */}
                        <form onSubmit = {handleSubmit}>
                            <CardElement onChange = {handleChange}/>
                            <div className = "payment__priceContainer">
                                <CurrencyFormat
                                    renderText = {(value) => (
                                            <h3>
                                                Order Total: {value}
                                            </h3>                                                        
                                    )}
                                    decimalScale = {2}
                                    value = {getBasketTotal(basket)}  
                                    displayType = {"text"}
                                    thousandSeparator = {true}
                                    prefix = {"$"}
                                />
                                <button disabled = {processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}
                                    </span>
                                </button>
                            </div>

                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Payment
