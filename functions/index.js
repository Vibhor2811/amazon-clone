const functions = require('firebase-functions');
const express = require('express');
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HlyFrLnO0SVIUlJubX6TqqIrYhqGVEjf3XEH47XCqBoosMgVMrKU77IYkxFRUwyJM2RXqeuD1GGLSK7RjRKsZX200qma2BxH7')

//App


// - App config
const app = express();

//Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get('/',(request, response) => response.status(201).send('hello world'));

app.post('/payment/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment request received for this amount ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,       // subunits of the currency
        currency: "usd",
    })

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
// Listen command
exports.api = functions.https.onRequest(app)
