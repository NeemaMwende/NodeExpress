// const http = require("http");

// http.createServer((req, res) => {
//     res.write("Server is up and running");
//     res.end();
// })
// .listen(3000);

const express = require("express");
const app = express();

app.get("/", (req,res)=>{
    res.send("Server is up and running");
});
app.listen(3000, ()=> {
    console.log("Server is okay");
});


// const http = require("http");

// http.createServer((req, res) => {
//     console.log(`${req.method} request for ${req.url}`); // Log request details
//     res.write("Server is up and running");
//     res.end();
// }).listen(3000, () => {
//     console.log("Server running at http://localhost:3000");
// });


// const express = require("express");
// const morgan = require("morgan"); // Import morgan for logging
// const app = express();
// const port = 3000;

// app.use(morgan("dev")); // Use morgan middleware for logging

// app.get("/", (req, res) => {
//     res.send("Server is up and running");
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });

