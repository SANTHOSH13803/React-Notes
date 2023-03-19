import React, { Component, useState, useEffect, useRef } from "react";

export class UseRef2Class extends Component {
  interval;
  constructor(props) {
    super(props);

    this.state = {
      timer: 0,
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prev) => ({
        timer: prev.timer + 1,
      }));
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Class Timer - {this.state.timer}
        <button onClick={() => clearInterval(this.interval)}>Clear</button>
      </div>
    );
  }
}

function UseRef2() {
  const [timer, setTimer] = useState(0);
  // Here we are replicating the behaviour of "componentwillmount" and "componentWillUnmount"
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setTimer((prev) => prev + 1);
  //     }, 1000);
  //     // clean up funtion
  //     return () => {
  //       clearInterval(interval);
  //     };
  //   }, []);

  // ! using UseRef
  const intervalRef = useRef();
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    // clean up funtion
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <div>
      Hook Timer = {timer}
      {/* <button onClick={clearInterval(interval)}>Clear Hook Timer</button> */}
      {/* The problem we encounter in the above line of code is "interval" is not specified golbally it is only declared in useEffect block (Functional scope) , So it throws an error*/}
      {/* This is where we use useRef Hook */}
      {/* Using useRef Hook*/}
      <button onClick={clearInterval(intervalRef.current)}>
        Clear Hook Timer
      </button>
    </div>
  );
}

export default UseRef2;
