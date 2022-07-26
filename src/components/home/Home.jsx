import Intro from "../intro/Intro";
import Portfolio from "../portfolio/Portfolio";
import Testimonial from "../testimonial/Testimonial";
import Works from "../work/Works";
import Footer from "../footer/Footer";
import CopyRight from "../copyRight/CopyRight";

const Home = () => {
  return (
    <div className="home">
      <Intro />
      <Portfolio />
      <Testimonial />
      <Works />
      <Footer />
      <CopyRight />
    </div>
  );
};

export default Home;
