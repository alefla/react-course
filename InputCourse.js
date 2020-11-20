import React, { Component } from "react";

class InputCourse extends Component {
  state = {
    code: "",
    title: "",
    unit: ""
  };
  
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addCourseProps(this.state);
      this.setState({
      code: "",
      title: "",
      unit: ""
    });   
  };

  render() {
    return (
      <form className="f-container" onSubmit={this.handleSubmit}>
        <input className="f-input" type="text" placeholder="Add Course Code" value={this.state.code} onChange={this.onChange} name="code" />
        <input className="f-input" type="text" placeholder="Add Course Title" value={this.state.title} onChange={this.onChange} name="title" />
        <input className="f-input" type="text" placeholder="Add Course Unit" value={this.state.unit} onChange={this.onChange} name="unit" />
        <input className="f-submit" type="submit" value="Add" />
      </form>
    )
  }
}

export default InputCourse;