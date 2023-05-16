const express = require("express");
const app = express();
const db = require("./db");
const PORT = process.env.PORT || 2000;
const cors = require("cors");
app.use(cors());

const AuthController = require("./controller/authController");
app.use("/api/auth", AuthController);
app.get("/" ,(req,res)=>
{
res.send("Hi there!!!! 😊😂❤️");
})
app.listen(PORT, () => {
  console.log(`Server Listening on port ${PORT}`);
  console.log("hi");

});