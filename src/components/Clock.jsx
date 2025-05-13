import React from "react";
import Button from "./button";

class Clock extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { date: new Date() };
  // }

  //shortcut without constructior
  state = { date: new Date(), locale: "bn-BD" };

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

  handleClick = (locale) => {
    this.setState({
      locale,
    });
  };

  render() {
    const { date, locale } = this.state;
    return (
      <div>
        <h1 className="heading">
          <span className="text">{date.toLocaleTimeString(locale)}</span>
        </h1>
        {locale == "bn-BD" ? (
          <Button change={this.handleClick} locale="en-US">
          </Button>
        ) : (
          <Button change={this.handleClick} locale="bn-BD">
          </Button>
        )}
      </div>
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