
import React, {useState}from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import UploadWidget from './uploadWidget';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import ProfileCreator from '../pages/ProfileCreator';



// import { User } from '../../../server/models';

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  const userData = useState({
    _id: "",
    name: "",
    // dob_day:"",
    // dob_month:"",
    // dob_year:"",
    display_role: false,
    role: "",
    role_interest: "",
    url: "",
    about_me: "",
    matches: [],
  });

  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Viewing {userParam ? `${user.username}'s` : "your"} profile.
        </h2>

        <div className="col-12 col-md-10 mb-5">
          {userData
            ? userData.map((userData) => (
                <div key={userData._id}>{userData.name}</div>
              ))
            : null}
          <span className="text-gray-200 text-sm">{userData.role}</span>
          <span className="text-gray-200 text-sm">{userData.role_interest}</span>
                                
                              
        </div>
        <div className="col-12 col-md-10 mb-5">{ProfileCreator.role}</div>
        <div className="col-12 col-md-10 mb-5">
          {ProfileCreator.display_role}
        </div>
        <div className="col-12 col-md-10 mb-5">
          {ProfileCreator.role_interest}
        </div>
        {!userParam && (
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ border: "1px dotted #1a1a1a" }}
          >
            <Link
              className="btn text-xl text-white float-right font-bold btn-lg btn-light m-2"
              to="/profileCreator"
            >
              Link to ProfileCreator(Still need localStoragese up)
            </Link>
          </div>
        )}
      </div>
      <UploadWidget/>
    </div>
  );
};

export default Profile;
