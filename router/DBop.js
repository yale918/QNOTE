const express = require('express')
const mysql = require('mysql2')
const router = express.Router()


const conn = mysql.createConnection({
  host: 'localhost',
  user: 'yale918',
  password: 'yeah31212',
  database: 'qnote'
})

let sqlResCode 

const db_connect = () => {
  conn.connect()
  conn.query('SELECT 12 + 34 AS result', function (err, rows, fields) {
    if (err) throw err;
    console.log('result:', rows[0].result, "(db connected)")
  })
}
const db_disconnect = () => {
  console.log("db disconnect")
  conn.end(function (err) {
    if (err) {
      return console.log(err.message)
    }
  })
}
const db_query = (sql)=>{
  conn.query(sql,(err,result)=>{
    if(err) {
      throw err
      sqlResCode = "insert failed"
    }
    else {
      console.log('result:',result)
      sqlResCode = "insert succeded"
    }
    
  })
}

router.post('/insert', (req, res) => {
  db_connect()
  setTimeout(() => {
    console.log('req message log:',req.body.sql)

    const sql = req.body.sql
    db_query(sql)
    setTimeout(()=>{
      console.log(sqlResCode)
      res.json(sqlResCode)
    },2000)
 

    //db_disconnect()
  },2000)


})




module.exports = router






/*
router.get('/allpost',requireLogin,(req,res)=>{
  Post.find()
  .populate("postedBy","_id name")
  .populate("comments.postedBy","_id name")
  .populate("postedBy","_id name")
  .then(posts=>{
      res.json({posts})
  })
  .catch(err=>{
      console.log(err)
  })
})



const mysql = require('mysql2');
const uuid = require('uuid')

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'yale918',
  password: 'yeah31212',
  database: 'qnote'
})
conn.connect()
conn.query('SELECT 12 + 34 AS result', function(err,rows,fields){
  if(err) throw err;
  console.log('result:', rows[0].result, "(db connected)")
})

//const uid = uuid.v4()

const sql = "INSERT INTO message (name,title,time) VALUES ('yale918','titleFromNodejs',NOW())"
conn.query(sql,function(err,result){
  if(err) throw err;
  console.log("1 record inserted")
})

*/