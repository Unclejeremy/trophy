const express = require("express");
const pagesRoutes = require("./routes/pagesRoutes");
const apiRoutes = require("./routes/apiRoutes")
require("dotenv").config();
const mongoose = require("mongoose");

// creating the server app using express
const app = express();

app.use(express.json()) //2 what this does is, it checks any request that comes in. it looks/checks if the request has a body to it (i.e whether a data is been sent to the server), if it does, it parses it and attaches it to the request object, so we can access it in the request handler. using something like req.body in a POST request.
// for grabbing data coming from HTML form
app.use(express.urlencoded({extended: true}))
// Creating routes
app.use("/", pagesRoutes)
// For api routes or endpoints
app.use("/api/blogs", apiRoutes)
// assigning the server a port
const port = process.env.PORT||4003;

//connect to MongoDB with the mongoose.connect() method. 
// This is asynchronous in nature, it returns a promise
mongoose.connect(process.env.MONGODB_URI)
.then(()=> {
    console.log("Now connected to MongoDB!")
})
.catch((error) => {
    console.log(error.reason)
})

app.listen(port, function() {
    console.log(`Server is running on port ${port}`)
    }
)
















//creating the server app using express
// const app = express();

// creating routes
// router.use("/", pagesRoutes)
// for api routes or endpoints
// router/use("/api/blogs", apiRoutes)

// assigning the server a port
// router.get("/", function(request, response) {
//     response.send("Hello Class!");
// }) 

// router.get("/contact", (request, response) => {
//     response.send("Contact me at UncleJeremy")
// });

// router.get("/about", (request, response) => {
//     response.send("i am UncleJeremy, a children evangelist")
// });
// const port = 4003;

// router.listen(port, function(){
//     console.log(`Server is running on port ${port}`)
//     }
// )

// module.exports = router