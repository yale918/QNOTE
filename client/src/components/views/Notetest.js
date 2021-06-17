import React, { useState, useEffect } from 'react'
import DBop from './functions/DBop'



const Note = () => {

  const [Mtext, setText] = useState("first data")
  const [num, setNum] = useState(0)

  // ** for initialMessage **
  const [flag, setFlag] = useState(0)
  let iniData = ["apple", "banana", "cat", "dog", "elephant", "fire", "good", "horse", "ice"]
  useEffect(() => {
    if (flag === 0) {
      HandleBox()
      document.querySelector('.text').value = ""
    }
  })
  // ************************

  const HandleBox = () => {


    //************  CREATE  FUNCTION **********
    //************  DELETE  FUNCTION **********
    //************  MESSAGEtoSTORAGE  FUNCTION **********
    const createBox = () => {
      //Create Box <------------------------------------------------------
      const li = document.createElement('li')
      document.querySelector('.board').appendChild(li)
      const a = document.createElement('a'); a.innerText = Mtext

      li.appendChild(a)
      a.onclick = (e) => {
        e.target.contentEditable = "true"
      }
      const board = document.querySelector('.board')  //用x 反抓出board
      const list = Array.from(board.children)// HtmlElement to ArrayList
      console.log("current: ",list)
      //*******************************************************************
      /*
          const span1 = document.createElement('span');span1.innerText = num
          console.log(num)
          setNum(num+1)
          span1.className = "box-number"
          li.appendChild(span1)
      */

      //edit message <--------------------------------------------------------
      const span2 = document.createElement('span'); span2.innerText = "e"
      span2.className = "box-edit"
      li.appendChild(span2)

      span2.onclick = (e) => {
        console.log("edit message")
        const board = e.target.parentNode.parentNode  //用x 反抓出board

        let list = Array.from(board.children)// HtmlElement to ArrayList

        const deleteTarget = board.childNodes[list.indexOf(e.target.parentNode)] // list.indexOf 先標出deleteTarget
        const parseText = deleteTarget.children[0].innerText // log用: parseText

        console.log("edit: ", parseText)
      }
      // ****************************************************************************

      //delete message <------------------------------------------------------------
      const span3 = document.createElement('span'); span3.innerText = "\u00D7"
      span3.className = "box-close"
      li.appendChild(span3)
      //  DELETE FUNCTION 
      span3.onclick = (e) => {
        const board = e.target.parentNode.parentNode            //用x 反抓出board

        let list = Array.from(board.children)                   // HtmlElement to ArrayList

        const deleteTarget = board.childNodes[list.indexOf(e.target.parentNode)] // list.indexOf 先標出deleteTarget
        const parseText = deleteTarget.children[0].innerText    // log用: parseText

        board.removeChild(deleteTarget)                         // removeChild

        list = Array.from(board.children)                       // log用:刪掉後再parse一次array
        console.log("delete: ", parseText)
        console.log("Ater: ", list)
        //**********************************************************************     
      }


    }
    createBox()

    //************  DragDrop FUNCTION **********
    const setDragDrop = () => {

      const sortList = (name) => {

        const listCollection = document.querySelector(name).children
        const list = Array.from(listCollection)

        list.forEach((element) => {
          enableDragItem(element)
        })
      }
      const enableDragItem = (element) => {
        element.setAttribute('draggable', true)
        element.ondrag = handleDrag
        element.ondragend = handleDrop
      }
      const handleDrag = (e) => {
        const item = e.target

        item.classList.add('drag-sort-active');

        const list = item.parentNode
        const x = e.clientX
        const y = e.clientY

        var swapItem = document.elementFromPoint(x, y)

        if (swapItem.parentNode === list) {
          swapItem = swapItem !== item.nextSibling ? swapItem : swapItem.nextSibling
          list.insertBefore(item, swapItem)
        }
      }
      const handleDrop = (e) => {
        e.target.classList.remove('drag-sort-active')
      }
      const start = (classname) => {
        sortList(classname)
      }
      start('.board')           // function進入點

    }
    setDragDrop()


  }

  var db_operation = (op, event, message) => {
    if (op === "insert") {
      const message = event.target.value
      const sql = "INSERT INTO message (name,title,time) VALUES ('yale918','" + message + "',NOW())"

      fetch("/insert", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sql: sql })
      })
        .then(res => res.json())
        .then(data => { console.log("res from server: ", data) })
        .catch(err => { console.log("err:", err) })
    }


  }

  return (


    <div className="note">
      <DBop />

      <div className="input">
        <input
          type="text"
          placeholder=" write someting..."
          value={Mtext}
          className="text"
          onChange={(e) => {
            setFlag(1)
            setText(e.target.value)
          }}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              db_operation("insert", e, Mtext)
              setFlag(1)
              HandleBox()
              document.querySelector('.text').value = ""
            }
          }}

        />
        <input
          type="button"
          value="fetch"
          className="enter"
          onClick={(e) => {
            const message = e.target.value
            const sql = "INSERT INTO message (name,title,time) VALUES ('yale918','" + { message } + "',NOW())"
            
            fetch("/insert", {
              method: "post",
              headers: { "Content-Type": "application/json" },
              //headers:{"Content-Type":"text/html"},
              //body:JSON.stringify({})
              body: JSON.stringify({ sql: sql })
            })
              .then(res => res.json())
              .then(data => { console.log(data) })
              .catch(err => { console.log("err:", err) })

          }}
        />
        <input
          type="button"
          value="pic"
          className="picture"
        />

      </div>

      <ul className="board"></ul>
      <input className="iniButton"
        type="button"
        value="Add Message"
        onClick={(e) => {
          setFlag(0)
          setText(iniData[num])
          setNum(num + 1)
        }}
      />
    </div>
  )
}



export default Note


/*

ul {
  margin: 0;
  padding: 0;
}

ul>li{
  color:black
}

ul li {
  cursor: pointer;
  background: #eee;
  position:relative;
  font-size: 18px;
  padding: 12px 8px 12px 40px;
}
ul li:nth-child(odd) {
  background: rgb(223, 221, 221);
}


.close{
  position: absolute;
  right: 0;
  top: 0;
  padding: 12px 16px 12px 16px;
}
.close:hover{
  background-color: red;
}
</style>



</head>
<body>
  <header>
    <h3>JS ToDo</h3>
    <input id="inText" type="text" placeholder="Title..."/>
    <input id="inButton" type="button" value="Add" />
  </header>
  <hr>

  <ul id="todos"></ul>


<script>

const CloseButtonText = "\u00D7"

const Todos = document.getElementById('todos')
var NodeList = []
const ListLength = 0


window.onload = function(){
  setTimeout(2000)
  initList()
  setTimeout(2000)
  refreshList()
  setTimeout(2000)
  closeAct()
}

const initList = ()=>{
  AddNode("yale918");AddNode("athena77");AddNode("cloak")
}

const AddNode = (message)=>{
  //create node
  const li = document.createElement('li')
  const a = document.createElement('a');a.innerText = message
  const span = document.createElement('span');span.innerText = CloseButtonText
  span.className = "close"
  li.appendChild(a)
  li.appendChild(span)

  //node bind to tree
  Todos.appendChild(li)
  //showNode(li);showList() //********************************
}

const refreshList = ()=>{
  for(i=0;i<Todos.childElementCount;i++){
    NodeList[i] = Todos.children[i]

  }

}

const deleteNode = () => {

}

const showNode = ()=>{
  console.log("**** NodeList ****")
  for(i=0;i<NodeList.length;i++){
    console.log(NodeList[i].children[0].innerText)
  }
  console.log(".")
}
const showTree = ()=>{
  console.log("**** Tree ****")
  for(i=0;i<Todos.childElementCount;i++){
    console.log(Todos.children[i].children[0].innerText)
  }
}

const keyAct = ()=>{
  document.getElementById("inText").addEventListener("keypress",(e)=>{
    if(e.keyCode==13){
      AddNode(e.target.value)
      refreshList()
      setTimeout(2000)
      closeAct()
      e.target.value=""
    }
  })
}

const buttonAct = ()=>{}
closeAct()


function closeAct(){
  for(i=0;i<Todos.childElementCount;i++){
    NodeList[i].children[1].onclick=function(){
      console.log("will remove:"+ NodeList[NodeList.indexOf(this.parentElement)].children[0].innerText)
      Todos.removeChild(Todos.childNodes[NodeList.indexOf(this.parentElement)])
      NodeList.splice(NodeList.indexOf(this.parentElement),1)
      refreshList()
      showNode()  //**************
      showTree()  //**************

  }}
}
keyAct()
buttonAct()




*/