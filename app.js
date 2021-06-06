const express = require("express");
const port =3333
const app = express()



app.use(express.json())
app.use(require("./router/DBop"))


app.get('/',(req,res)=>{
  console.log('hello world')
    //res.send("hello world");
})


app.get('/test',(req,res)=>{
  console.log("request: /test")
  res.json({data:'message from server'})
})



/*
app.get('/test',(req,res)=>{
  console.log("hello /test")
  res.writeHead(200, {'ContentType': 'text/json'});
  res.end("hello world from server 111")
})
*/

/*
app.use(require('./router/test'))
*/

app.listen(port,()=>{
    console.log("app is starting on: ", port)
})