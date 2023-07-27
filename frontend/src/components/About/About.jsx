import React from "react";

import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* About img */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="Women" className="rounded-lg" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[2%]">
              <img src={aboutCardImg} alt="Card of a teacher" data-aos="fade-right" data-aos-duration="3000" />
            </div>
          </div>

          {/* About content */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Proud to be able to help students</h2>
            <p className="text__para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt tempora velit odio recusandae reprehenderit, quasi aperiam cumque ipsa labore provident autem esse earum nobis quis!</p>
            <p className="text__para mt-[30px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nulla earum, corporis quasi illum necessitatibus vitae. Odio quasi aspernatur eligendi, eos molestiae tempora.</p>
            <Link to="/about"><button className="btn">Learn More</button></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
