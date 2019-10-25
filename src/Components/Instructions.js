import React, { Component } from 'react';

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

class Instructions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goLeft() {}

  goRight() {}

  render() {
    // const instruction = this.props
    return (
      <div>
        <div onClick={this.goLeft}>{'&#9654;'}</div>
        <video src={`/video/${video}`}></video>
        <p>{text}</p>
        <div onClick={this.goRight}>{'&#9664;'}</div>
      </div>
    );
  }
}

export default Instructions;
