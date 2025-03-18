import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import Marquee from "react-fast-marquee";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>I am an experienced Full Stack Developer with 4 year of specializing in MERN Stack (MongoDb, ExpressJS, ReactJS, NodeJS) and strong UI skill in HTML, CSS, Bootstrap, Tailwind and JavaScript.I have also a basic proficiency in AngularJs, NextJS and VueJS, allowing me to adapt to a wider range of project requirements. </p>

              <Marquee responsive={responsive}>
                <div className="item mx-5">
                  <img src={meter1} alt="Image" />
                  <h5 className="mt-3">Web Development</h5>
                </div>

                <div className="item mx-5">
                  <img src={meter2} alt="Image" />
                  <h5 className="mt-3">FrontEnd Developer</h5>
                </div>

                <div className="item mx-5">
                  <img src={meter3} alt="Image" />
                  <h5 className="mt-3">Backend Developer</h5>
                </div>

                <div className="item mx-5">
                  <img src={meter1} alt="Image" />
                  <h5 className="mt-3">UI/UX Designer</h5>
                </div>

                <div className="item mx-5">
                  <img src={meter1} alt="Image" />
                  <h5 className="mt-3">React Developer</h5>
                </div>

                <div className="item mx-5">
                  <img src={meter1} alt="Image" />
                  <h5 className="mt-3">Angular Developer</h5>
                </div>

              </Marquee>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
