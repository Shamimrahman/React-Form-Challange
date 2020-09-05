import React, { useState } from "react";
import "./index.css";

let App = () => {
  const [fullname, funame] = useState({
    fname:'',
    lname:''
    
  });
  
  let input_event = (event) => {

    let name=event.target.name
    let value=event.target.value
    funame((prevalue)=>
    {
      if(name==='fname')
      {
        return{
          fname:value,
          lname:prevalue.lname
        }
      }
      
      else if(name==='lname')
      {
        return{
          fname:prevalue.fname,
          lname:value
        }
      }




    }
    
    
    )

  };


  function onsubmits(event) {
    event.preventDefault();
    
  }

  return (
    <>
      <form onSubmit={onsubmits}>
        <div className="body-style">
          <h1>
            Hello {fullname.fname} {fullname.lname}
          </h1>

          <input
            type="text"
            placeholder="First Name"
            name='fname'
            onChange={input_event}
          ></input>
          <br></br>
          <br></br>
          <input
            type="text"
            name='lname'
            placeholder="Last Name"
            onChange={input_event}
          ></input>
          <br></br>
          <br></br>
          
          <button type="submit">
            Click <span>👍</span>
          </button>
        </div>
      </form>
    </>
  );
};
export default App;
