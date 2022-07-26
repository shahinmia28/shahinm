import "./cv.scss";
import CopyRight from "../copyRight/CopyRight";

const Cv = () => {
  return (
    <div className="cv">
      <div className="container">
        <div className="cv-title text-center text-muted m-3">
          <h2> Curriculum vitae or Resume </h2>
        </div>
        <div className="img-viewer">
          <img src="./images/shahincv.png" alt="cv" className="w-100 h-100 " />
        </div>

        <a href="./images/shahincv.pdf" className="btn btn-info pdf-link">
          Click for PDF
        </a>
      </div>
      <CopyRight />
    </div>
  );
};

export default Cv;
