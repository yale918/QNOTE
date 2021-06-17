const express = require("express");
const PORT = process.env.PORT || 3333
const app = express()



app.use(express.json())
app.use(require('./router/DBop'))


app.get('/',(req,res)=>{
  console.log('hello world')
    //res.send("hello world");
})

app.get('/test',(req,res)=>{
  console.log("request: /test")
  res.json({data:'message from server'})
})

if(process.env.NODE_ENV == "production"){
  app.use(express.static('client/build'))
  const path = require('path')
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}


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

app.listen(PORT,()=>{
    console.log("app is starting on: ", PORT)
})