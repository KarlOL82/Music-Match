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
    <header className="bg-gray-300 text-center mt-auto " >
      <div className="">
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link
                className="btn text-xl p-1 bg-amber-600 rounded-lg text-gray-900  float-right font-bold btn-lg btn-info m-2 hover:bg-slate-600 "
                to="/me"
              >
                {Auth.getProfile().data.username}'s profile
              </Link>

              <Link
                className="btn text-xl p-1 bg-amber-600 rounded-lg text-gray-900  float-right font-bold btn-lg btn-info m-2 hover:bg-slate-600 "
                to="/ConnectWith"
              >
                {ConnectWith}Find Connections
              </Link>
              <button
                className="btn text-xl p-1 bg-amber-600 rounded-lg text-gray-900  float-right font-bold btn-lg btn-info m-2 hover:bg-slate-600 "
                onClick={logout}
                type="button"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                className="btn text-xl bg-slate-300 rounded-lg text-gray-900  float-right font-bold btn-lg btn-info m-2 hover:bg-slate-600 "
                to="/login"
              >
                Login
              </Link>
              <Link
                className="btn text-xl  bg-slate-300 text-gray-900 rounded-lg float-right font-bold btn-lg btn-light m-2  hover:bg-slate-600"
                to="/signup"
              >
                Signup
              </Link>
            </>
          )}
        </div>

        <div>
          <Link className="text-gray-900 py-5 text-5xl font-bold hover:" to="/">
            <h1 className="m-0 py-10 ">Groove Connection</h1>
          </Link>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
