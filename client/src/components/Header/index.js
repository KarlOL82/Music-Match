import React from "react";
import { Link } from "react-router-dom";
import ConnectWith from "../../pages/ConnectWith";

import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-yellow-500 p-10  text-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link
                className="btn text-xl text-gray-700 float-right font-bold btn-lg btn-light m-2"
                to="/me"
              >
                {Auth.getProfile().data.username}'s profile
              </Link>
              
              <Link
                className="btn text-xl text-gray-700 float-right font-bold btn-lg btn-light m-2"
                to="/ConnectWith"
              >
                {ConnectWith}Find Connections
              </Link>
              <button
                className="btn text-xl text-gray-700 float-right font-bold btn-lg btn-light m-2"
                onClick={logout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                className="btn text-xl text-gray-700 float-right font-bold btn-lg btn-info m-2"
                to="/login"
              >
                Login
              </Link>
              <Link
                className="btn text-xl text-gray-700 float-right font-bold btn-lg btn-light m-2"
                to="/signup"
              >
                Signup
              </Link>
            </>
          )}
        </div>

        <div>
          <Link className="text-gray-900 py-10 text-4xl font-bold" to="/">
            <h1 className="m-0 py-10 ">Clever Music App Name</h1>
          </Link>
          <p className="m-0 text-xl py-6 text-gray-700">
            Connect With Others Through Music
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
