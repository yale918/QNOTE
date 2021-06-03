const express = require("express");
const port =3333
const app = express()

app.get('/',(req,res)=>{
    res.send("hello world");
})

app.listen(port,()=>{
    console.log("app is starting on: ", port)
})