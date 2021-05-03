const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));


mongoose.connect('mongodb://localhost:27017/internDB', { useNewUrlParser: true });

const userSchema = {
    username: String,
    name: String,
    email: String,
    password: String,
    address: String,
    mobile: Number
}

const User = mongoose.model("User", userSchema);

app.post("/signup", function (req, res) {
    const newUser = new User({
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        mobile: req.body.mobile
    })
    newUser.save(function (err) {
        if (!err) {
            res.send("successfull");
        } else {
            res.send("error");
        }
    })
})


app.listen(5000, function (err) {
    if (!err) {
        console.log("Server started on port 5000");
    }

});