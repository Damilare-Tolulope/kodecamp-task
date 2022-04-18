import React, { useState } from "react";

const Header = () => {
  const [name] = useState("Ajele Oluwadamilare");
  const [position] = useState("React Developer");
  const [phone] = useState("08074270190");
  const [linkedIn] = useState("ajele oluwadamilare");
  const [email] = useState("damilaretolulope1@gmail.com");
  const [bio] = useState(
    "My name is Ajele Oluwadamilare. I'm an aspiring fullstack developer. I have passion for coding and finsing solutions to problems. Surfing the net to find new and intresting things is also what i love doing. I have proficiency in HTML, CSS, JS and ReactJS for frontend technologies."
  );

  return (
    <header>
      <h1>{name}</h1>
      <h4>{position}</h4>
      <div>
        <span>
          <b>Phone:</b> {phone}
        </span>
        <span>
          <b>LinkedIn:</b> {linkedIn}
        </span>
      </div>
      <span>
        <b>E-mail:</b> {email}
      </span>
      <div className="bio">{bio}</div>
    </header>
  );
};

export default Header;
