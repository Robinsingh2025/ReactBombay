import React, { Component } from "react";

// const mockProps = {
//   instructions: [
//     {
//       video: '1.MOV',
//       text: 'do the thing'
//     },
//     {
//       video: '1.MOV',
//       text: 'then do another thing'
//     }
//   ]
// };

// TODO: Finish this class component example
// FIXME: Convert to a function component with hooks after that
class Instructions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // choose a property of state to represent the current instruction index
    };
    // Bind the keyword 'this' to the class context for each method
    this.goLeft = this.goLeft.bind(this);
    this.goRight = this.goRight.bind(this);
  }

  goLeft() {
    this.setState({
      // decrement the number for the current instruction index
    });
  }

  goRight() {
    this.setState({
      // increment the number for the current instruction index
    });
  }

  render() {
    // Use the state property for the current instruction index
    // Get the current instruction object and destructure it
    const { video, text } = this.props.instructions[0];
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div onClick={this.goLeft}>&#9664;</div>
        <div style={{ flex: "1 1 auto", textAlign: "center" }}>
          <video src={`/video/${video}`} style={{ background: "#000" }} />
          <p>{text}</p>
        </div>
        <div onClick={this.goRight}>&#9654;</div>
      </div>
    );
  }
}

export default Instructions;
