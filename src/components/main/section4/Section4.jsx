import "./Section4.css";
import images from "../../../../public/imagesss.png"
function Section4() {
  return <>
    <div className="container">
      <section className="sect4">
        <div className="sect4Left">
          <img src={images} alt="" />
        </div>
        <div className="sect4Right">
          <h2>Assessments, <span>Quizzes</span>, Tests</h2>
          <p>
            Easily launch live assignments, quizzes, and tests.
            Student results are automatically entered in the online gradebook.
          </p>
        </div>
      </section>
    </div>
  </>;
}

export default Section4;
