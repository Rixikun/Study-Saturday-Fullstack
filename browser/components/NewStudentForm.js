import React, { Component } from "react";

export default class NewStudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: ""
    };
  }

  render() {
    return (
      <form>
        <label>
          First Name :<input type="text" name={this.state.firstName}></input>
        </label>
        <label>
          <input type="text" name={this.state.lastName}></input>
        </label>
        <label>
          {" "}
          Email :<input type="text" name={this.state.email}></input>
        </label>
        <button>Submit</button>
      </form>
    );
  }
}

// <form>
//   <label value={this.state.firstName}>First Name : </label>
//   <input type="text"></input>
//   <br></br>
//   <label value={this.state.lastName}>Last Name : </label>
//   <input type="text"></input>
//   <br></br>
//   <label value={this.state.email}>Email : </label>
//   <input type="text"></input>
// </form>
// <button type="button" id="submit">
//   Submit
// </button>
