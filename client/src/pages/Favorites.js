import React from "react";
import { useState } from "react";
import { QUERY_USERS } from "../utils/queries";
// import SwipeableCard from "react-tinder-card";

import { useQuery } from "@apollo/client";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import "../app.css";

const Favorites = () => {
  const { loading, data } = useQuery(QUERY_USERS);

  const users = data?.users || data?.users || {};
  console.log(users);
  // const [lastDirection, setLastDirection] = useState();

  const showMatches = JSON.parse(localStorage.getItem("matches"));
  console.log(showMatches);
  
  

  // const matches = [];

  // let renderMatches = () = {
  //     for(let i = 0; i < matches.length; i++ ) {
  //         let
  //     }
  // }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <h3 className="text-2xl text-gray-900 text-center py-3">Your Matches</h3>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      {Auth.loggedIn() ? (
        <div className="my-3 ">
          <div className="card-header bg-dark bg-opacity-50 text-light p-2 m-0 ">
            <div className="col-12 col-md-10 mb-5 justify-center">
              {/* <h3 className="text-white">{showMatches}</h3> */}
              {showMatches
                ? showMatches.map((matches) => (
                  
                    <div className="flex justify-center content-center border-2 rounded w-32 bg-gray-300 border-black">
                      <div
                        key={users._id}
                        
                        className="text-center col-12 mb-3 pb-3 "
                      >
                        <h3>{matches}</h3>
                        <h3>{users.role}</h3>
                        <h3>{users.about_me}</h3>
                        
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
          <div className="bg-light py-4"></div>
        </div>
      ) : (
        <p className="text-center py-48 text-3xl text-white">
          You need to be logged in to view your Connections. Please{" "}
          <Link to="/login">
            <span className="text-teal-400">login</span>
          </Link>{" "}
          or{" "}
          <Link to="/signup">
            <span className="text-teal-400">signup.</span>
          </Link>
        </p>
      )}
    </main>
  );
};

export default Favorites;
