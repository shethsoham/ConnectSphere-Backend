const express = require('express');

const app =express();

//request handler
app.use("/",(req,res)=>{
    res.send("Hello from slash");
});
app.use("/test",(req,res)=>{
    res.send("Hello from test");
});
app.use("/hello",(req,res)=>{
    res.send("Hello from ");
});
app.listen(3000,()=>{
    console.log("Server is successfully running on port 3000...")
});
