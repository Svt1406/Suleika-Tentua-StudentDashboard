import * as s from "./StudentProfile.styles";
import React from "react";

class StudentProfile extends React.Component {
  getAge = (dateOfBirth) => {
    const today = new Date();
    const dob = new Date(dateOfBirth);
    const dateDiff = new Date(today - dob);
    const age = Math.abs(dateDiff.getUTCFullYear() - 1970);
    return age;
  };

  render() {
    return (
      <s.StudentProfileContainer>
        <s.StudentImage
          key={this.props.id}
          src={this.props.student.picture.large}
          alt={this.props.student.first_name}
        />
        <s.HeaderProfile>
          {this.props.student.first_name} {this.props.student.last_name}
        </s.HeaderProfile>
        <s.ProfileP>
          Student
          <br />
          Front end Developer <br />
          Age: {this.getAge(this.props.student.date_of_birth)}
          <br />
        </s.ProfileP>
        <s.Email>
          <s.ContactLink href={"mailto:" + this.props.student.email}>
            <i className="fa fa-envelope"></i>
          </s.ContactLink>
          <s.ContactLink href={"tel:" + this.props.student.telephone_number}>
            <i className="fas fa-mobile-alt"></i>
          </s.ContactLink>
          <s.ContactLink href={"sms:" + this.props.student.telephone_number}>
            <i className="fab fa-whatsapp"></i>
          </s.ContactLink>
        </s.Email>
      </s.StudentProfileContainer>
    );
  }
}

export default StudentProfile;
