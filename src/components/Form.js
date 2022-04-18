import React, { useState } from "react";
import "./form.css";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [bio, setBio] = useState("");
  const [displayValues, setDisplayValues] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!firstName || !lastName || !email || !gender || !address || !bio) return alert("Please fill the form completely")

    const values = () => {
      return(
          <div>
            <p>First name: {firstName} </p>
            <p>Last name: {lastName} </p>
            <p>Email: {email} </p>
            <p>Gender: {gender} </p>
            <p>Address: {address} </p>
            <p>Bio: {bio} </p>
          </div>
        )
      }
      
    
    setDisplayValues(values);
    const form = document.querySelector('form')
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} >
      <p className="text">Contact form</p>
      {displayValues}
      <div>
        <label>First name</label>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          placeholder="First name"
        />
      </div>
      <div>
        <label>Last name</label>
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="Last name"
        />
      </div>
      <div>
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Your email here..."
        />
      </div>
      <div onChange={e => setGender(e.target.value)}>
        <label>Gender</label>
        <input value="Male" name="gender" type="radio" selected />
        <span>Male</span>
        <input value="Female" name="gender" type="radio" />
        <span>Female</span>
      </div>
      <div>
        <label>Address</label>
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          placeholder="Address"
        />
      </div>
      <div>
        <label>Bio</label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Bio"
        ></textarea>
      </div>
      <input type="submit" value="SUBMIT" />
    </form>
  );
};

export default Form;
