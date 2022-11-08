// import React, { useState } from "react";
import React from "react";

//******************* NOTES **********************/
// Currently working on adding this info to local storage
// Need to update models to have genres, aboutMe, Name, Birthday(if we want), and each role(Musician, Artist, Producer)
// CSS still need to be done but it has a basic setup for now.
// ************************************************/
const profileCreator = () => {
  const handleSubmit = (e) => {
    console.log("it works");
  };
  const handleChange = () => {
    console.log("it worked too");
  };

  return (
    <>
      <div className="flex-row justify-center">
        <h1>Edit Profile</h1>

        <form onSubmit={handleSubmit}></form>
        <section>
          {/* This will be where cloudnairy button to upload photo will go  */}
          <div className="flex justify-end">
          <label className="uploadProfile">Upload photo</label>
          <input
            type="url"
            name="url"
            id="url"
            onChange={handleChange}
            // this way the user doesnt have to put a photo in
            required={false}
          />
          </div>
        </section>

        <section>
          {/* This div is for Tailwind edits */}
          <div className="field col-12 col-md-10 mb-3 p-3">
            <label className="first_name">What do you go by? </label>
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
          {/* this container will collect all of the birthday digits */}
          <label>Birthday </label>
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

          {/* this will allow the user to select if they are a artist, musician, or producer */}
          <label>Roles</label>
          <div className="role-container">
            {/* This div is for Tailwind edits */}
            <div className="field col-12 col-md-10 mb-3 p-3">
              <input
                id="artist-role"
                type="radio"
                name="artist"
                required={true}
                value={"artist"}
                onChange={handleChange}
                // this will leave the box un-selected
                checked={false}
              />
              <label className="artist"> Artist </label>
            </div>
            <div className="field col-12 col-md-10 mb-3 p-3">
              <input
                id="musician-role"
                type="radio"
                name="musician"
                required={true}
                value={"musician"}
                onChange={handleChange}
                // this will leave the box un-selected
                checked={false}
              />
              <label className="musician"> Musician </label>
            </div>
            <div className="field col-12 col-md-10 mb-3 p-3">
              <input
                id="producer-role"
                type="radio"
                name="producer"
                required={true}
                value={"producer"}
                onChange={handleChange}
                // this will leave the box un-selected
                checked={false}
              />
              <label className="producer"> Producer </label>
            </div>
          </div>
          {/* this is a checkbox to display role tag */}
          <div className="field col-12 col-md-10 mb-3 p-3">
            <label className="display-role ">Display Role Tag</label>
            <input
              id="display-role"
              type="checkbox"
              name="display-role"
              onChange={handleChange}
              // this will leave the box un-selected
              checked={false}
            />
          </div>
          {/* This will be for picking what intrest they have */}
          <label>What Do You Want To See?</label>
          <div className="field col-12 col-md-10 mb-3 p-3">
            <div className="role-interest-container">
              <input
                id="artist-interest"
                type="radio"
                name="role-interest"
                required={true}
                value={"artist"}
                onChange={handleChange}
                // this will leave the box un-selected
                checked={false}
              />
              <label className="artist"> Artist </label>
              <input
                id="musician-interest"
                type="radio"
                name="role-interest"
                required={true}
                value={"musician"}
                onChange={handleChange}
                // this will leave the box un-selected
                checked={false}
              />
              <label className="musician"> Musician </label>

              <input
                id="producer-interest"
                type="radio"
                name="role-interest"
                required={true}
                value={"producer"}
                onChange={handleChange}
                // this will leave the box un-selected
                checked={false}
              />
              <label className="producer"> Producer</label>
            </div>

            {/* label for about me  */}
            <label className="about-me">About me </label>
            <input
              id="about"
              type="text"
              name="about-me"
              required={true}
              placeholder="Tell me about yourself"
              value={""}
              onChange={handleChange}
            />
          </div>
          <input type="submit" />
        </section>
       
      
      </div>
    </>
  );
};

export default profileCreator;
