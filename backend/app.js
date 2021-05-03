const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();

app.use(bodyParser.json())

const cors = require("cors");

app.use(cors());

mongoose.connect('mongodb://localhost:27017/internDB', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = {
    username: String,
    name: String,
    email: String,
    password: String,
    address: String,
    mobile: Number
}

const User = mongoose.model("User", userSchema);

app.post("/login", async function (req, res) {
    try {
        var user = await User.findOne({ email: req.body.email }).exec();
        if (!user) {
            return res.status(400).send({ message: "The username does not exist" });
        }
        if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(400).send({ message: "The password is invalid" });
        }
        res.send({ message: "The username and password combination is correct!" });
    } catch (error) {
        res.status(500).send(error);
    }
})

app.post("/signup", function (req, res) {

    User.exists({ username: req.body.username }, function (err, result) {

        if (!result) {

            bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
                const newUser = new User({
                    username: req.body.username,
                    name: req.body.name,
                    email: req.body.email,
                    password: hash,
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

        } else {
            console.log("Cannot save to DB");
        }
    })


})

app.get("/signup", function (res) {
    console.log("signup get");
})


app.listen(5000, function (err) {
    if (!err) {
        console.log("Server started on port 5000");
    }
});