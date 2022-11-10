import React from "react";
import { QUERY_USERS } from "../utils/queries";
// import { useParams } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

const ConnectWith = () => {
  const { loading, data } = useQuery(QUERY_USERS);

  const users = data?.users || data?.users || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <h3>Find Your Next Connection</h3>

      {Auth.loggedIn() ? (
        <div className="my-3">
          <div className="card-header bg-dark text-light p-2 m-0">
            <div>
              {users
                ? users.map((users) => 
                <div key={user._id}>{user.username}</div>)
                : null}
            </div>

          </div>
          <div className="bg-light py-4">
            {/* <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          
        </blockquote> */}
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
