
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
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <div className="flex-row justify-center mb-3">
        <h2 className="text-xl float-left md:float-right">
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
          
        </div>
        <div className="col-12 col-md-10 mb-5">
          
        </div>
        {!userParam && (
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ border: "1px dotted #1a1a1a" }}
          >
            <Link
              className="btn text-xl bg-slate-300 rounded-lg text-gray-900  float-center font-bold btn-lg btn-info m-2 hover:bg-slate-600"
              to="/profileCreator"
            >
              Edit Profile
            </Link>
          </div>
        )}
      </div>
      <div className='btn text-xl bg-slate-300 rounded-lg text-gray-900  float-right font-bold btn-lg btn-info m-2 hover:bg-slate-600'>
        <UploadWidget/>
      </div>
    </div>
  );
};

export default Profile;
