import CopyRight from "../copyRight/CopyRight";
import FormPage from "../footer/FormPage";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container contact-section ">
        <h3 className="py-3 text-center">Sent your valuable comment here</h3>
        <FormPage />
      </div>
      <CopyRight />
    </div>
  );
};

export default Contact;
