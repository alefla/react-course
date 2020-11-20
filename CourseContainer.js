import React from "react";
import CourseList from "./CourseList";
import Header from "./Header";
import InputCourse from "./InputCourse";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

class CourseContainer extends React.Component {
  state = {
    courses: [
      {
        id: uuidv4(),
        code: "CNIT 103",
        title: "Hardware",
        unit: "3-units",
        added: true
      },
      {
        id: uuidv4(),
        code: "SCNIT 131",
        title: "Internet & Intro to HTML",
        unit: "3-units",
        added: true
      },
      {
        id: uuidv4(),
        code: "CNIT 106",
        title: "Introduction to Networks",
        unit: "3-units",
        added: true
      },
      {
        id: uuidv4(),
        code: "CNIT 120",
        title: "Network Security",
        unit: "3-units",
        added: true
      }
    ]
  };

  deleteCourse = id => {
    this.setState({
      courses: [
        ...this.state.courses.filter(course => {
            return course.id !== id;
        })
      ]
    });
  };

  addCourseItem = ({code, title, unit}) => {
    const newCourse = {
      id: uuidv4(),
      code: code,
      title: title,
      unit: unit,
      added: true
    };
    
    this.setState({
      courses: [...this.state.courses, newCourse]
    });
  };

  render() {
    return (
      <div className="container" >
      <Header />
      <CourseList courses={this.state.courses} handleChangeProps={this.handleChange}deleteCourseProps={this.deleteCourse} />
      <InputCourse addCourseProps={this.addCourseItem}/>
      </div>
    )
  }
}
export default CourseContainer;