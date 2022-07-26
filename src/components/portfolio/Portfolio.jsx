import { useEffect, useState } from "react";
import "./portfolio.scss";
import { webDesign, webDevelop } from "../../data";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [menuItem, setMenuItem] = useState("webDesign");
  const [cardItem, setCardItem] = useState([]);

  useEffect(() => {
    switch (menuItem) {
      case "Web Design":
        setCardItem(webDesign);
        break;
      case "Web Develop":
        setCardItem(webDevelop);
        break;
      default:
        setCardItem(webDesign);
    }
  }, [menuItem]);

  return (
    <div className="portfolio" id="portfolio">
      <div className="container d-flex">
        <div className="p-3">
          <button
            className="btn btn-outline-dark m-2"
            onClick={() => {
              setMenuItem("Web Design");
            }}
          >
            Web design
          </button>
          <button
            className="btn btn-outline-dark m-2"
            onClick={() => {
              setMenuItem("Web Develop");
            }}
          >
            Web develop
          </button>
        </div>

        <div className="items-lists row d-flex m-auto">
          {cardItem.map((list, index) => (
            <Link to={`/${list.id}`} className="card m-3" key={index}>
              <img src={list.img} alt="" />
              <h3>{list.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
