import React from "react";
import { useState } from 'react'
import { QUERY_USERS } from "../utils/queries";
import SwipeableCard from 'react-tinder-card'
// import { useParams } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import '../app.css'

const ConnectWith = () => {
  const { loading, data } = useQuery(QUERY_USERS);

  const users = data?.users || data?.users || {};

    const [lastDirection , setLastDirection] = useState()

  console.log(users);
  if (loading) {
    return <div>Loading...</div>;
  }


  const swiped = (direction, nameToDelete) => {
      console.log('removing:' + nameToDelete)
      setLastDirection(direction)
  }

  const outOfFrame = (name) => {
      console.log(name + 'left the screen!')
  }

  return (
    <main>
      <h3>Find Your Next Connection</h3>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      {Auth.loggedIn() ? (
        <div className="my-3 ">
          <div className="card-header bg-dark text-light p-2 m-0 ">
          <div className="col-12 col-md-10 mb-5 ">
          {users
            ? users.map((user) => (
              <div className="flex justify-center">
              <SwipeableCard className='swipe ' key={user.username} onSwipe={(dir) => swiped(dir, user.username)} preventSwipe={['up', 'down']} onCardLeftScreen={(dir) => outOfFrame(user.username, console.log('you swiped '+ dir + ' on ' + user.username))}>
                <div key={user._id} className="text-center col-12 mb-3 pb-3 ">
                  <div className="p-3 pb-6 bg-dark text-gray-900 main-card ">
                    <div className="header-div ">
                      <h1 className="py-6 card-header text-2xl">
                        {user.username}
                      </h1>
                      <h2 className="py-6">
                        {user.role}
                      </h2>
                    </div>
                      <h3 className="card-body">{user.about_me}</h3>
                    <div>
                      <figure className="justify-center ">
                        <figcaption>My Music</figcaption>
                          <audio className="audio" controls src={user.url}>
                              <p>greatness</p>
                          </audio>
                     </figure>
                    </div>
                  </div>
                </div>
                </SwipeableCard> 
             </div>
                 ))
             : null}  
        </div>
          </div>
          <div className="bg-light py-4">
            
          </div>
        </div>
        ) : (
          <p className="text-center py-48 text-3xl text-white">
          You need to be logged in to share your thoughts. Please{" "}
          <Link to="/login"><span className="text-teal-400">login</span></Link> or <Link to="/signup"><span className="text-teal-400">signup.</span></Link>
        </p>
      )}
      </main>
      );
    };
    
    export default ConnectWith;