export const Card = ({ user }) => {

    return (
      <div className="container">
        <div className="row">
          {user.map((user) => (
            <div className="col-md-3 mb-4" key={user.id}>
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">{user.username}</h6>
                  <p className="card-text">
                    {user.company.name}
                  </p>
                  <a href="#" className="card-link" target="_blank">
                    {user.website}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  