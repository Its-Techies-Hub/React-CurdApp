import React from "react";

const Form = (props)=>{
  return (
    <form className="Form" onSubmit={props.add}> 
      <input type="text" value={props.current} onChange={props.update}/>
      <button type="submit">Add Course</button>
    </form>
  )
}

export default Form;