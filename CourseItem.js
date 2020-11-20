import React from "react";

class CourseItem extends React.Component {
  render() {
    
    return <li className="course-item"> 
      <button onClick={() => this.props.deleteCourseProps(this.props.course.id)}>DELETE</button>
      <span >{this.props.course.code} {this.props.course.title} {this.props.course.unit}</span>
    </li>
  }
}

export default CourseItem;