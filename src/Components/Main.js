export const Main = ({ changeName }) => {
  return (
    <div>
      <div className="row">
        <div className="col-xs-12">
          <h1>The Main Page</h1>
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
    </div>
  );
};
