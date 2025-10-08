import React from "react";
import img1 from "../../../../public/igm1.png";
import img2 from "../../../../public/img2.png";
import "./Section5.css";

const ClassSection = () => {
  return (
    <section className="class-section">
      <div className="parent1">
        <div className="baby1">
          <p className="title">
            <span>Class Management</span> Tools for Educators
          </p>
          <p className="desc">
            Class provides tools to help run and manage the class such as Class
            Roster, Attendance, and more. With the Gradebook, teachers can
            review and grade tests and quizzes in real-time.
          </p>
        </div>
        <img src={img1} alt="Class management illustration" />
      </div>

      <div className="parent2">
        <div className="baby1">
          <p className="title">
            One-on-One <span>Discussions</span>
          </p>
          <p className="desc">
            Teachers and teacher assistants can talk with students privately
            without leaving the Zoom environment.
          </p>
        </div>
        <img src={img2} alt="Private discussion illustration" />
      </div>
    </section>
  );
};

export default ClassSection;
