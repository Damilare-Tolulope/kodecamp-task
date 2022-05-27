import React from "react";
import person from './assets/person.svg'

const Home = () => {
  return (
    <div className="home">
      <div>
        <h1><span style={{color: "#dad6d6"}}>Learn</span> on your class <span style={{color: "#f87474"}}>schedule</span></h1>
        <p>Compeletely learn and become a master at your own pace with readily available and adeqaute resources provided for you. Get ready to experience a smooth road learning processes.</p>
        <button>Get Started</button>
      </div>
      <img src={person} alt={person} />
    </div>
  )
};

export default Home;
