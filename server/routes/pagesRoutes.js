const express = require("express")
const router = express.Router()
const Blog = require("../models/blogModel")

// creating the server app using express
const app = express();
// Creating routes
router.get("/", function(req, res) {
    res.send("Hello Class!");
})
router.get("/contact", (req, res) => {
    res.send("Contact me at @TheLastgoodman")
});
router.get("/about", (req, res) => {
    res.send("I am Emma Dan aka NetDans")
});
// responding with html pages/files

router.get("/calculator", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})

router.post("/calculator", (req, res) =>{
    console.log(req.body);
    let value1 = Number(req.body.num1);
    let value2 = Number(req.body.num2);

    let result = value1 + value2;
    res.send("The result is " + result);
})

router.get("/services", function(req, res) {
    res.sendFile(__dirname + "/services.html");
})

router.get("/bmi", function(req, res) {
    res.sendFile(__dirname + "/bmi.html");
})

router.post("/bmi", (req, res) =>{
    console.log(req.body);
    let value1 = Number(req.body.num1);
    let value2 = Number(req.body.num2);
    let value3 = value2*value2;

    let result = value1/value3;
    res.send("BMI is " + result);
})



module.exports = router