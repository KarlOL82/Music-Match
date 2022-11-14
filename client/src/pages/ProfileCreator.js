import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { UPDATE_PROFILE } from "../utils/mutations";
import { useNavigate } from "react-router-dom";
import UploadWidget from "./uploadWidget";

const ProfileCreator = () => {
  const [url, setUrl] = useState("");
  const [updateProfile] = useMutation(UPDATE_PROFILE);
  const [userData, setUserData] = useState({
    name: "",
    role: null,

    url: "",
    about_me: "",
  });

  const handleSubmit = async (e) => {
    console.log("it works");
    console.log(userData.url);
    userData.url = url;
    e.preventDefault();
    const res = await updateProfile({
      variables: { userData },
    });
    console.log(res);
  };
  const handleChange = (e) => {
    console.log("it worked too");
    const value =
      e.target.type === "checkedbox" ? e.target.checked : e.target.value;
    const name = e.target.name;
    console.log("value " + value);
    console.log(url);

    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
      url: url,
    }));
    console.log(userData);
  };

  const Navigate = useNavigate();
  const navigateToMe = () => {
    Navigate("/me");
  };

  function submitAndGo(event) {
    handleSubmit(event);
    navigateToMe();
  }

  return (
    <>
      <div className="flex justify-center pt-16 ">
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
        <form onSubmit={handleSubmit}>
          <section className="bg-slate-300 p-3 text-gray-900 rounded-lg text-xl shadow-xl ">
            <h1 className="flex justify-center font-bold">Edit Profile</h1>

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

            {/* this will allow the user to select if they are a artist, musician, or producer */}
            <label>Roles</label>
            <div className="field col-12 col-md-10 mb-3 p-3">
              <div className="role-container">
                {/* This div is for Tailwind edits */}
                <div className="">
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
                <div className="field">
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
                <div className="field ">
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
            </div>

            {/* <label>What Do You Want To See?</label> */}
            <label className="about-me">About me </label>
            <div className="field col-12 col-md-10 mb-3 p-3">
              {/* label for about me  */}
              <textarea
                id="about"
                type="textarea"
                rows="4"
                name="about_me"
                required={true}
                placeholder="Tell me about yourself"
                value={userData.about_me}
                onChange={handleChange}
              />
            </div>
            {url ? (
              <p>Audio Uploaded</p>
            ) : (
              <div className="font-bold bg-dark rounded-lg text-gray-900 hover:bg-slate-600">
                <UploadWidget setUrl={setUrl} name="url" />
              </div>
            )}
            <button
              className="font-bold bg-dark rounded-lg text-gray-900 hover:bg-slate-600"
              type="submit"
              onClick={submitAndGo}
            >
              Submit
            </button>
          </section>
          <section>
            {/* This will be where cloudnairy button to upload photo will go  */}

            {/* <label className="uploadProfile">Upload photo</label>
              <input
                type="url"
                name="url"
                id="url"
                onChange={handleChange}
                // this way the user doesnt have to put a photo in
                required={false}
              /> */}
          </section>
        </form>
      </div>
    </>
  );
};

export default ProfileCreator;
