import "./copyRight.scss";

const CopyRight = () => {
  return (
    <div className="copy-right">
      <div className="container">
        <div className="row">
          <div className="left col-md-6 col-12">
            <p>&copy; All right are reserved by Shahin M.</p>
          </div>
          <div className="right col-md-6 col-12">
            <a href="https://www.facebook.com/shahinmia28/">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/shahin91449044/media">
              <i className="fa-brands fa-twitter"></i>
            </a>

            <a href="https://www.linkedin.com/in/shahin-mia-08b5b21ba/">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/shahinmia28">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
