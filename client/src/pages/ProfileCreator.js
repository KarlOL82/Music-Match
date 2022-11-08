// import React, { useState } from "react";
import React from "react";

const profileCreator = () => {
  const handleSubmit = () => {
    console.log("it works");
  };
  const handleChange = () => {
    console.log("it worked too");
  };

  return (
    <>
      <div className="test">
        <h2>Edit Profile</h2>

        <form onSubmit={handleSubmit}></form>
        <section>
        <div className="field col-12 col-md-10 mb-3 p-3">
            <label className="first_name">First Name </label>
            <input
              id="first_name"
              type="text"
              name="first_name"
              placeholder="First Name"
              required={true}
              value={""}
              onChange={handleChange}
            />
          </div>

          <label>Birthday </label>
          {/* this container will collect all of the birthday digits */}
          <div className="birthday-container">
            <div className="field col-12 col-md-10 mb-3 p-3">
            <input
              id="dob_day"
              type="number"
              name="dob_day"
              placeholder="DD"
              required={true}
              value={""}
              onChange={handleChange}
            />
            </div>
            <div className="field col-12 col-md-10 mb-3 p-3">
            <input
              id="dob_month"
              type="number"
              name="dob_month"
              placeholder="MM"
              required={true}
              value={""}
              onChange={handleChange}
            />
            </div>
            <div className="field col-12 col-md-10 mb-3 p-3">
            <input
              id="dob_year"
              type="number"
              name="dob_year"
              placeholder="YYYY"
              required={true}
              value={""}
              onChange={handleChange}
            />
            </div>
          </div>
          <label>Role</label>
          {/* this will allow the user to select if they are a artist, musician, or producer */}
          <div className="role-container">
            <input
              id="artist"
              type="radio"
              name="artist"
              required={true}
              value={"artist"}
              onChange={handleChange}
              // this will leave the box un-selected
              checked={false}
            />
            <label className="artist">Artist</label>

            <input
              id="musician"
              type="radio"
              name="musician"
              required={true}
              value={"musician"}
              onChange={handleChange}
              // this will leave the box un-selected
              checked={false}
            />
            <label className="musician">Musician</label>

            <input
              id="producer"
              type="radio"
              name="producer"
              required={true}
              value={"producer"}
              onChange={handleChange}
              // this will leave the box un-selected
              checked={false}
            />
            <label className="producer">Producer</label>
          </div>
          <label className="display-role">Display Role Tag</label>
          <input
            id="display-role"
            type="checkbox"
            name="display-role"
            onChange={handleChange}
            // this will leave the box un-selected
            checked={false}
          />
        </section>
      </div>
    </>
  );
};

export default profileCreator;
