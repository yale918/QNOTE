import React,{useState} from 'react'


const Note = () => {

  const [Mtext,setText] = useState("")
  //const [num,setNum] = useState(0)


  const HandleBox = ()=>{

    //************  CREATE  FUNCTION **********
    //************  DELETE  FUNCTION **********
    const createBox = () =>{
      const li = document.createElement('li')
      document.querySelector('.board').appendChild(li)

  /*
      const span1 = document.createElement('span');span1.innerText = num
      setNum(num+1)
      span1.className = "box-number"
      li.appendChild(span1)
  */  
      const a = document.createElement('a');a.innerText = Mtext
      li.appendChild(a)
      const span2 = document.createElement('span');span2.innerText = "\u00D7"
      span2.className = "box-close"
      li.appendChild(span2)
      //  DELETE FUNCTION 
      span2.onclick = (e)=>{     
        const board = e.target.parentNode.parentNode  //用x 反抓出board
        
        let list = Array.from(board.children)// HtmlElement to ArrayList
        
        const deleteTarget = board.childNodes[list.indexOf(e.target.parentNode)] // list.indexOf 先標出deleteTarget
        const parseText = deleteTarget.children[0].innerText // log用: parseText
        
        board.removeChild(deleteTarget) // removeChild
        
        setTimeout(2000)
        list = Array.from(board.children) // log用:刪掉後再parse一次array
        console.log("delete: ",parseText)
        console.log("Ater: ",list)
        // ************* DELETE NODE FUNCTION END *************     
      }

      
    }
    createBox()

    //************  DragDrop FUNCTION **********
    const setDragDrop = ()=>{

      const sortList = (name)=>{
 
        const listCollection = document.querySelector(name).children
        const list = Array.from(listCollection)
        
        list.forEach((element)=>{
          enableDragItem(element)
        })
      }
      const enableDragItem = (element)=>{
        element.setAttribute('draggable',true)
        element.ondrag = handleDrag
        element.ondragend = handleDrop
      }
      const handleDrag = (e)=>{
        const item = e.target
        
        item.classList.add('drag-sort-active');
  
        const list = item.parentNode 
        const x = e.clientX
        const y = e.clientY
      
        var swapItem = document.elementFromPoint(x,y)
      
        if(swapItem.parentNode === list ){
          swapItem = swapItem !== item.nextSibling ? swapItem:swapItem.nextSibling
          list.insertBefore(item,swapItem)
        }
      }
      const handleDrop = (e)=>{
        e.target.classList.remove('drag-sort-active')
      }
      const start = (classname)=>{
        sortList(classname)
      }
      start('.board')           // function進入點

    }
    setDragDrop()

    

  }



  return (
    
    <div className="note">
      <div className="input">
        <input 
        type="text" 
        placeholder="write" 
        value={Mtext}
        className="text" 
        onChange={(e)=>{
          setText(e.target.value)
        }}
        onKeyDown={(e)=>{
          if(e.keyCode===13){
            HandleBox()
            document.querySelector('.text').value=""
          }
        }}

        />
        <input 
        type="button" 
        value="enter" 
        className="enter" 
        onClick = {()=>{
          //console.log("enter test")
          //AddBox(Mtext)
          //createTodo(Mtext)
        }}
        />
        <input 
        type="button" 
        value="pic" 
        className="picture" 
        />
        
      </div>

      <ul className="board"></ul>
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