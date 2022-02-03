export const User = ({ userName }) => {
  return (
    <div>
      <div className="row">
        <div className="col-xs-12">
          <h1>The User Page</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <p>User Name: {userName}</p>
        </div>
      </div>
    </div>
  );
};
