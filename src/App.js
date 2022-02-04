import React from "react";
import { Main } from "./Components/Main";
import { User } from "./Components/User";
import { connect } from "react-redux";

import { setName, setAge } from "./actions/userActions";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: "Virat Kohli"
  //   };
  // }

  // changeName = (name) => {
  //   console.log(name);
  //   this.setState({
  //     name: name
  //   });
  // };

  render() {
    return (
      <div className="wrapper">
        <Main changeName={() => this.props.setName("King Kohli")} />
        <User userName={this.props.user.name} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    math: state.math
  };
};

const mapDisptachToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch(setName(name));
    },
    setAge: (age) => {
      dispatch(setAge(age));
    }
  };
};

export default connect(mapStateToProps, mapDisptachToProps)(App);
