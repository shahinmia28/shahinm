import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

const Intro = () => {
  const contentRef = useRef();

  useEffect(() => {
    init(contentRef.current, {
      showCursor: true,
      backSpeed: 100,
      backDelay: 1000,
      strings: ["Web Developer", "Web Designer", "SCO Analyser"],
    });
  }, []);

  return (
    <div className="intro  w-100 row d-flex " id="intro">
      <div className="col-12 col-md-6 left p-0 ">
        <div className="img-container d-flex">
          <img src="/images/man.png" alt="intro-img" />
        </div>
      </div>

      <div className="col-12 col-md-6 right p-0">
        <div className="wrapper d-flex w-100 h-100">
          <div className="content p-5 my-5 w-100">
            <h2>There, I'm </h2>
            <h1>Shahin Mia</h1>
            <h3>
              Freelancer <span ref={contentRef}></span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

// <div className="intro row d-flex" id="intro">
// <div className="col-12 col-md-6 left ">
//   <div className="img-container">
//     <img src="/images/man.png" alt="intro-img" />
//   </div>
// </div>
// <div className="col-12 col-md-6  right">
//   <div className="wrapper">
//     <h2>There, I'm </h2>
//     <h1>Shahin Mia</h1>
//     <h3>
//       Freelancer <span>Web designer</span>
//     </h3>
//   </div>
// </div>
// </div>
