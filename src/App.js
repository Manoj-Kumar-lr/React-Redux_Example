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

  changeName = (name) => {
    console.log(name);
    this.setState({
      name: name
    });
  };

  render() {
    return (
      <div className="wrapper">
        <Main changeName={this.changeName} />
        <User userName={this.state.name} />
      </div>
    );
  }
}

export default App;
