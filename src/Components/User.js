export const User = ({ user: { name, age } }) => {
  return (
    <div>
      <div className="row">
        <div className="col-xs-12">
          <h3>The User Page</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <p>User Name: {name}</p>
        </div>
        <div className="col-xs-12">
          <p>User Age: {age}</p>
        </div>
      </div>
    </div>
  );
};
