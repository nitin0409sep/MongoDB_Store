const mongoose = require('mongoose');

mongoose.set('strictQuery', false)

const DB = "mongodb+srv://admin:admin@cluster0.syhlsm9.mongodb.net/dynamicWeb?retryWrites=true&w=majority";

mongoose.connect(DB).then(() => {
    console.log("Connection Successfull");
}).catch((err) => {
    console.log(err);
})

/*
// Connection With MongoDb Compass
mongoose.connect("mongodb://127.0.0.1:27017/dynamicWeb").then(() => {
    console.log("Connection Successfull");
}).catch((err) => {
    console.log(err);
})
*/