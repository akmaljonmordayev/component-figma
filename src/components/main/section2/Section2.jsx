import React from "react";
import "./Section2.css";
import photo from "../../../assets/1.png";
import photo1 from "../../../assets/Ellipse 12.png";
import photo2 from "../../../assets/Ellipse 13.png";
import photo3 from "../../../assets/Rectangle 17.png";
import photo4 from "../../../assets/Rectangle 18.png";
function Section2() {
  return (
    <div className="boss">
      <div className="box3">
        <div className="box1">
          <h1>
            Everything you can do in a physical classroom,
            <span>you can do with Skilline</span>
          </h1>
          <p className="p1">
            Skilline’s school management software helps traditional and online
            schools manage scheduling, attendance, payments and virtual
            classrooms all in one secure cloud-based system.
          </p>
          <button>Learn more</button>
        </div>
        <div className="box2">
          <img src={photo} alt="" />
        </div>
        <div className="photos">
          <img className="photo1" src={photo1} alt="" />
          <img className="photo2" src={photo2} alt="" />
          <img className="photo3" src={photo3} alt="" />
          <img className="photo4" src={photo4} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Section2;
