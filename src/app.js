// Express
const express = require('express');

// App to use functions present in express
const app = express();

// PORT
const port = process.env.PORT || 80;

// DB
require("./db/conn");

// Model
const User = require("./models/models")

// HBS
const hbs = require('hbs');

// Path Module
const path = require('path');

// Alert
const alert = require('alert');

// Middleware to parse data coming from client side 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Files Path
const static_path = path.join(__dirname, "../public")

// Bootstrap Links
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));   // CSS Bootstrap Link
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));     // JS Bootstrap Link
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")));           // Jquery BootStrap Link

// Static Files Middleware
app.use(express.static(static_path));

// Views Dir Path
const viewsPath = path.join(__dirname, "../temp/views");

// Partials Dir Path 
const partialsPath = path.join(__dirname, "../temp/partials");

// hbs -: HandelBar Templates
app.set("view engine", "hbs");
app.set("views", viewsPath);

// Registering Partials
hbs.registerPartials(partialsPath);

app.get('/', (req, res) => {
    res.render("index")
})

app.post('/contact', async (req, res) => {

    try {
        const data = new User({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            message: req.body.message
        })

        const userData = await data.save();
        alert("Thank You");
        res.redirect("index");
    } catch (err) {
        alert("Invalid Credentials");
        res.redirect("index");
    }
})

app.get('**', (req, res) => {
    res.redirect('/');
})

app.listen(port, () => {
    console.log(`Server has started successfully at port:${port}`);
})