export const Main = ({ changeName, changeAge }) => {
  return (
    <div>
      <div className="row">
        <div className="col-xs-12">
          <h3>The Main Page</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <button
            className="btn btn-primary"
            onClick={() => changeName("King Kohli")}
          >
            Change the Username
          </button>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-xs-12">
          <button className="btn btn-primary" onClick={() => changeAge("33")}>
            Change the Age
          </button>
        </div>
      </div>
    </div>
  );
};
