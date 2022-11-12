import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
// import UploadWidget from './uploadWidget';

import Auth from "../utils/auth";

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  console.log(data);

  const userData = useState({
    _id: "",
    name: "",
    display_role: false,
    role: [""],
    role_interest: "",
    url: "",
    about_me: "",
  });

  console.log(userData);

  if (Auth.loggedIn() && Auth.getProfile().data._id === userParam) {
    console.log("logged in");
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  // if (!user?.username) {
  //   return (
  //     <h4>
  //       You need to be logged in to see this. Use the navigation links above to
  //       sign up or log in!
  //     </h4>
  //   );
  // }

  return (
    <div>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="flex-row justify-center mb-3">

        <h2 className="text-xl float-left md:float-right">
          Viewing {userParam ? `${user.username}'s` : "your"} profile.
        </h2>

        <div className="col-12 col-md-10 mb-5">
          {/* {userData
            ? userData.map((userData) => ( */}

          <div key={userData._id} className="text-center col-12 mb-3 pb-3">
            <div className="p-3 bg-dark text-light">
              <h2 className="py-6 card-header">
                {user.name}

                <p className="py-6">
                  {user.role}

                </p>
              </h2>
              <div>
                <figure>
                  <figcaption>My Music</figcaption>
                  <audio controls src={user.url}>
                   <p>greatness</p>
                  </audio>
                </figure>
              </div>
              <>
                <p className="card-body">{user.about_me}</p>
              </>
            </div>
          </div>
          {/* ))

             : null}   */}
        </div>
        </div>
        {!userParam && (
          <div className="">
            <Link
              className="btn text-xl bg-slate-300 rounded-lg text-gray-900  float-right font-bold btn-lg btn-info m-2 hover:bg-slate-600"
              to="/profileCreator"

            >

              Update Profile
            </Link>
        </div>
        )}
      </div>
      {/* <div className='btn text-xl bg-slate-300 rounded-lg text-gray-900  float-right font-bold btn-lg btn-info m-2 hover:bg-slate-600'>
        <UploadWidget/>
      </div> */}

    </div>
  );
};

export default Profile;
