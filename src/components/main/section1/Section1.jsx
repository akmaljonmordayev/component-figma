import React from "react";
import google from "/public/google.png";
import netflix from "/public/netflix.png";
import Vector from "/public/Vector.png";
import amazon from "/public/amazon.png";
import facebook from "/public/facebook.png";
import grab from "/public/grab.png";
import teacher from "/public/teacher.png";
import student from "/public/student.png";

import "./Section1.css";
function Section1() {
  return(
   <>
   <div className="conteiner">
        <div className="section1">
          <p>Trusted by 5,000+ Companies Worldwide</p>
          <div className="imgs-box">
           <ul>
            <li><a href="#"><img src={google} alt="" /></a></li>
            <li><a href="#"><img src={netflix} alt="" /></a></li>
            <li><a href="#"><img src={Vector} alt="" /></a></li>
            <li><a href="#"><img src={amazon} alt="" /></a></li>
            <li><a href="#"><img src={facebook} alt="" /></a></li>
            <li><a href="#"><img src={grab} alt="" /></a></li>
           </ul>
          </div>
        </div>
        <div className="section2">
          <h2>
            What is <span>Skilline?</span>
          </h2>
          <p>
            Skilline is a platform that allows educators to create online
            classes whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.
          </p>
        </div>
        <div className="buttons">
          <div className="button">
            <img src={teacher} alt="" /> 
            <p>FOR INSTRUCTORS</p>
            <button className="box">Start a class today</button>
          </div>
          <div className="button">
            <img src={student} alt="" /> 
            <p>FOR STUDENTS</p>
            <button className="box">Enter access code</button>
          </div>
        </div>
      </div>
   </>
   )
}

export default Section1;
