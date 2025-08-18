const paypal = require("paypal-rest-sdk");
// const dotenv = require("dotenv");

// dotenv.config();
console.log(process.env.CLIENT_ID);
paypal.configure({
  mode: "sandbox",
  // client_id:"247267481632534",
  client_id: process.env.CLIENT_ID,
  // client_secret: "fukJ95pp3OQk3R8Tz2Qr-o6hUgI",
  client_secret: process.env.CLIENT_SECRET,
});

module.exports = paypal;


// .env