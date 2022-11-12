import React from "react";
import { QUERY_USERS } from "../utils/queries";
// import { useParams } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

const ConnectWith = () => {
  const { loading, data } = useQuery(QUERY_USERS);

  const users = data?.users || data?.users || {};
  console.log(users);
  if (loading) {
    return <div>Loading...</div>;
  }

  

  return (
    <main>
      <h3>Find Your Next Connection</h3>

      {Auth.loggedIn() ? (
        <div className="my-3">
          <div className="card-header bg-dark text-light p-2 m-0">
          <div className="col-12 col-md-10 mb-5">
          {users
            ? users.map((users) => (
              
                <div key={users._id} className="text-center col-12 mb-3 pb-3">
                  <div className="p-3 bg-dark text-light">
                    <h2 className="py-6 card-header">
                      {users.name}

                      <h3 className="py-6">
                         {users.role}
                      </h3>
                    </h2>
                    <>
                      <p className="card-body">{users.about_me}</p>
                    </>
                  </div>
                </div>
                 ))
             : null}  
        </div>

          </div>
          <div className="bg-light py-4">
            
          </div>
        </div>
      ) : (
        <p>
          You need to be logged in to share your thoughts. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </main>
  );
};

export default ConnectWith;
