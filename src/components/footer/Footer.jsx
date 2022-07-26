import "./footer.scss";
import FormPage from "./FormPage";
const Footer = () => {
  return (
    <div className="contact py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 my-3">
            <img src="./images/shake.svg" alt="shake" className="w-100 h-100" />
          </div>
          <div className="col-12 col-md-6 ">
            <FormPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
