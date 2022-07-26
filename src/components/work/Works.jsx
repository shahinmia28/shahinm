import "./works.scss";
import { Carousel } from "react-bootstrap";
import { workData } from "../../data";

const Works = () => {
  return (
    <div className="work" id="work">
      <h2>My Works</h2>

      <Carousel className="carousal">
        {workData.map((data, index) => (
          <Carousel.Item className="carousal-i" key={index}>
            <div className="item">
              <div className="left d-none d-md-inline">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={data.icon} alt="" />
                  </div>
                  <h3>{data.title}</h3>
                  <p>{data.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={data.img} alt="" />
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Works;
