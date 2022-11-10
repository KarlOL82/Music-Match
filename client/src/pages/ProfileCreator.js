import React, { useState } from "react";
// import React from "react";

//******************* NOTES **********************/
// Currently working on adding this info to local storage
// Need to update models to have genres, aboutMe, Name, Birthday(if we want), and each role(Musician, Artist, Producer)
// CSS still need to be done but it has a basic setup for now.
// ************************************************/



const ProfileCreator = () => {

  // const [formData, updateFormData] = React.useState(initialFormData);
  

    const [userData, setUserData] = useState({
        _id: "",
        name: "",
        // dob_day:"",
        // dob_month:"",
        // dob_year:"",
        display_role: false,
        role: "",
        role_interest:"",
        url:"",
        about_me:"",
        matches: []
    })

  const handleSubmit = (e) => {
    console.log("it works");
    console.log(userData);
    e.preventDefault()
  };
  const handleChange = (e) => {
    console.log("it worked too");
    const value = e.target.type === "checkedbox" ? e.target.checked : e.target.value
    const name = e.target.name
    console.log("value " + value);
    

    setUserData((prevState) => ({
        ...prevState,
        [name] : value
    }))
    console.log(userData);
  };

  return (
    <>
        <h1 className="flex justify-center">Edit Profile</h1>

      <div className="flex justify-center">
        <form onSubmit={handleSubmit}>
          <section >
            {/* This div is for Tailwind edits */}
            <div className="field col-12 col-md-10 mb-3 p-3">
              <label className="name">What do you go by? </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                required={true}
                value={userData.name}
                onChange={handleChange}
              />
            </div>
            {/* this container will collect all of the birthday digits */}
            {/* <label>Birthday </label>
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
            </div> */}

            {/* this will allow the user to select if they are a artist, musician, or producer */}
            <label>Roles</label>
            <div className="role-container">
              {/* This div is for Tailwind edits */}
              <div className="field col-12 col-md-10 mb-3 p-3">
                <input
                  id="artist_role"
                  type="radio"
                  name="role"
                  required={true}
                  value={"artist"}
                  onChange={handleChange}
                  // this will leave the box un-selected
                  checked={userData.role === "artist"}
                />
                <label className="artist"> Artist </label>
              </div>
              <div className="field col-12 col-md-10 mb-3 p-3">
                <input
                  id="musician_role"
                  type="radio"
                  name="role"
                  required={true}
                  value={"musician"}
                  onChange={handleChange}
                  // this will leave the box un-selected
                  checked={userData.role === "musician"}
                />
                <label className="musician"> Musician </label>
              </div>
              <div className="field col-12 col-md-10 mb-3 p-3">
                <input
                  id="producer_role"
                  type="radio"
                  name="role"
                  required={true}
                  value={"producer"}
                  onChange={handleChange}
                  // this will leave the box un-selected
                  checked={userData.role === "producer"}
                />
                <label className="producer"> Producer </label>
              </div>
            </div>
            {/* this is a checkbox to display role tag */}
            <div className="field col-12 col-md-10 mb-3 p-3">
              <label className="display-role ">Display Role Tag</label>
              <input
                id="display_role"
                type="checkbox"
                name="display_role"
                onChange={handleChange}
                // this will leave the box un-selected
                checked={userData.display_role}
              />
            </div>
            {/* This will be for picking what intrest they have */}
            <label>What Do You Want To See?</label>
            <div className="field col-12 col-md-10 mb-3 p-3">
              <div className="role-interest-container">
                <input
                  id="artist_interest"
                  type="radio"
                  name="role_interest"
                  required={true}
                  value={"artist"}
                  onChange={handleChange}
                  // this will leave the box un-selected
                  checked={userData.role_interest === "artist"}
                />
                <label className="artist"> Artist </label>
                <input
                  id="musician_interest"
                  type="radio"
                  name="role_interest"
                  required={true}
                  value={"musician"}
                  onChange={handleChange}
                  // this will leave the box un-selected
                  checked={userData.role_interest === "musician"}
                />
                <label className="musician"> Musician </label>

                <input
                  id="producer_interest"
                  type="radio"
                  name="role_interest"
                  required={true}
                  value={"producer"}
                  onChange={handleChange}
                  // this will leave the box un-selected
                  checked={userData.role_interest === "producer"}
                />
                <label className="producer"> Producer</label>
              </div>

              {/* label for about me  */}
              <label className="about-me">About me </label>
              <input
                id="about"
                type="text"
                name="about_me"
                required={true}
                placeholder="Tell me about yourself"
                value={userData.about_me}
                onChange={handleChange}
              />
            </div>
            <input type="text" />
          </section>
          <section>
            {/* This will be where cloudnairy button to upload photo will go  */}
            
              <label className="uploadProfile">Upload photo</label>
              <input
                type="url"
                name="url"
                id="url"
                onChange={handleChange}
                // this way the user doesnt have to put a photo in
                required={false}
              />
           
          </section>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default ProfileCreator;
