import * as s from "./FilterStudent.styles";
import React from "react";

class FilterStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: props.students,
    };

    this.handler = props.changedHandler;
  }
  handleCheckbox = (event) => {
    let students = this.state.students;
    students.forEach((student) => {
      if (student.value === event.target.value)
        student.isChecked = event.target.checked;
    });
    let newstate = { students: students };
    this.setState(newstate);
    this.handler(newstate);
  };

  render() {
    return (
      <s.FilterContainer>
        {this.props.students.map((item, index) => {
          return (
            <s.FilterUl>
              <s.FilterLi key={item.value}>
                <input
                  key={item.id}
                  type="checkbox"
                  onChange={(event) => this.handleCheckbox(event)}
                  checked={item.isChecked}
                  value={item.value}
                />
                {item.value}
              </s.FilterLi>
            </s.FilterUl>
          );
        })}
      </s.FilterContainer>
    );
  }
}

export default FilterStudent;
