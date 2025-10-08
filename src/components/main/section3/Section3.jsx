import React from "react";
import "./Section3.css"
import image from "../../../assets/image.png";
function Section3() {
  return (
    <div>
      <h1>
        Our <span>Features</span>
      </h1>
      <p>
        This very extraordinary feature, can make learning activities more
        efficient
      </p>
      <div className="salom">
       <div className="div">
       <h2>
          <span>Tools</span> For Teachers <br /> And Learners
        </h2>
        <p className="math">
          Class has a dynamic set of teaching tools built to be deployed and
          used during class. Teachers can handout assignments in real-time for
          students to complete and submit.
        </p>
        <h4>Learn more</h4>
       </div>
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default Section3;
