import "./webDevelop.scss";
import { webDevelop } from "../../data";
import CopyRight from "../copyRight/CopyRight";

const WebDevelop = () => {
  return (
    <div className="web-develop">
      <div className="container">
        <h1 className="text-center m-3 p-3">Welcome to Web Design Service</h1>

        <div className="services m-auto d-flex">
          {webDevelop.map((data, index) => (
            <div class="jumbotron m-5" key={index}>
              <h1 class="display-4">{data.title}</h1>
              <img src={data.img} alt={data.img} />
              <p class="lead">{data.docs}</p>
              <ul class="list-group">
                {data.list.map((l, i) => (
                  <li class="list-group-item list-group-item-light" key={i}>
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <CopyRight />
    </div>
  );
};

export default WebDevelop;
