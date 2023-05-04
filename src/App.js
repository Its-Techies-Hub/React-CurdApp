import Form from "./components/Form";
import List from "./components/List";
import React , {Component} from "react";
import "./App.css"


class App extends Component {
  state={
    courses:[
    ],
    current :''
  }
  updateCourse = e =>{
    this.setState({
      current:e.target.value,
    })
  }
  addCourse=e=>{
    e.preventDefault();
    let {courses} = this.state;
    if(this.state.current !== ""){
      courses.push({name:this.state.current})
      this.setState({
        courses,
        current:""
      })
    }
  }
  deleteCourse = index=>{
    console.log(index);
    let {courses} = this.state;
    courses.splice(index,1);
    this.setState({
      courses,
    })
  }
  editCourse = (index,value)=>{
    let {courses} = this.state;
    let course = courses[index];
    course["name"] = value;
    this.setState({
      courses,  
    })
  }
  render(){
    const {courses} = this.state;
    const coursesList = courses.map((course,index)=>{
      return (<List delete={this.deleteCourse} edit={this.editCourse} index={index} details={course} key={index}/>)
    })
    return (
      <section className="App">
        <h2>add course</h2>
        <Form current={this.state.current} update={this.updateCourse} add={this.addCourse}/>
        <ul>
          {coursesList}
        </ul>
      </section>
    )
  }
}

export default App;
