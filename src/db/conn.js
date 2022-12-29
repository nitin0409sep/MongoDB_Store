const mongoose = require('mongoose');

mongoose.set('strictQuery', false)

// Connection
mongoose.connect("mongodb://127.0.0.1:27017/growBussinessDB").then(() => {
    console.log("Connection Successfull");
}).catch((err) => {
    console.log(err);
})