import React from "react";

class StudentFilter extends React.Component {
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
      <ul>
        {this.props.students.map((item, index) => {
          return (
            <div className="form-control checkbox">
              <li key={item.value}>
                <input
                  key={item.id}
                  type="checkbox"
                  onChange={(event) => this.handleCheckbox(event)}
                  checked={item.isChecked}
                  value={item.value}
                />
                {item.value}
              </li>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default StudentFilter;
