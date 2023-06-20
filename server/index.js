const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000 //port at which backend is running

app.use(cors());
app.use(express.json());


// Connecting to the db
const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log("Mongoose Connection established");
});

const userRouter = require("./routes/user");
const requestRouter = require("./routes/request");
const loginRouter = require("./routes/login");
const adminRouter = require("./routes/adminroute");

app.use("/register",userRouter);
app.use("/all",userRouter);
app.use("/search",requestRouter,userRouter);
app.use("/login",loginRouter);
app.use('/adminroute',adminRouter);


app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
});