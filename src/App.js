import React from "react";
import { Main } from "./Components/Main";
import { User } from "./Components/User";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Virat Kohli"
    };
  }

  setName = (name) => {
    console.log(name);
    this.setState({
      name: name
    });
  };

  render() {
    return (
      <div className="wrapper">
        <button onClick={() => this.setName("Virat")}> Change Name </button>
        <h1>{this.state.name}</h1>
        <Main />
        <User />
      </div>
    );
  }
}

export default App;
