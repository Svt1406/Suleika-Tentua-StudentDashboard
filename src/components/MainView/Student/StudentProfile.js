import * as s from "./StudentProfile.styles";
import React from "react";

class StudentProfile extends React.Component {
  render() {
    console.log(this.props);
    return (
      <s.StudentProfileContainer>
        <s.StudentImage
          src={this.props.student.picture.large}
          alt={this.props.student.first_name}
        ></s.StudentImage>
        <ul>
          <li>{this.props.student.first_name} {this.props.student.last_name}</li>
          <li>{this.props.student.date_of_birth}</li>
          <li>{this.props.student.email}</li>
        </ul>
      </s.StudentProfileContainer>
    );
  }
};

export default StudentProfile;
