import React from "react";

class Clock extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { date: new Date() };
  // }

  //shortcut without constructior
  state = { date: new Date() };

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <h1 className="heading">
        <span className="text">
          {this.state.date.toLocaleTimeString(this.props.locale)}
        </span>
      </h1>
    );
  }
}

//another way using functional component
// function Clock({ locale }) {
//   return (
//     <h1 className='heading'>
//       <span className='text'> {new Date().toLocaleTimeString(locale)}</span>
//     </h1>
//   )
// }

export default Clock;