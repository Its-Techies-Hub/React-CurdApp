import React , {Component , Fragment} from "react";
import "./List.css"

class List extends Component{
  state = {
    isEdit: false
  }
  renderCourse=()=>{
    return(
      <li>
        <span>{this.props.details.name}</span>
        <button onClick={()=>{this.toggleState()}}>edit</button>
        <button className="delete" onClick={()=>{this.props.delete(this.props.index)}}>delete</button>
      </li>
    )
  }
  toggleState = ()=>{
    let {isEdit}= this.state;
    this.setState({
      isEdit:!isEdit
    })
  }
  updateCourseItem = (e)=>{
    e.preventDefault();
    this.props.edit(this.props.index,this.input.value);
    this.toggleState();
  }
  renderUpdateForm=()=>{
    return(
      <form onSubmit={this.updateCourseItem}>
        <input type="text" ref={(v)=>{
          this.input = v;
        }} defaultValue={this.props.details.name}/>
        <button>done</button>
      </form>
    )
  }
  render(){
    return (
      <Fragment> 
        {this.state.isEdit?this.renderUpdateForm():this.renderCourse()}
      </Fragment>
    )
  }
}

export default List;