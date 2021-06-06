
const Test = ()=>{
  
  const fetchh = ()=>{

    fetch('/test',()=>{
      console.log("hello /test")
    })
      .then(res=>res.json())
      .then(result=>{
        console.log(result.data)
      })
    }
/*
    fetch('/test',()=>{
      console.log("hello /test")
    })
      .then(res=>res.text()
      )
      .then(result=>
        console.log(result))
  }
*/
  return (
    <div>
      <h5 style={hstyle}>Hello Test</h5>
      <input 
      className="fetch" 
      style={hstyle} 
      type="button" 
      value="request"
      onClick = {fetchh}
      />
    </div>
    
  )
}

const hstyle = {
  color:'red',
  margin:'10px',
  fontWeight:'bold'
}

export default Test