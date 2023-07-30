import React, { useEffect } from "react";
import About from "../components/About/About";

import teacherImage from "../assets/images/teacher.png";
import teacherImage2 from "../assets/images/profile3.jpeg";
import teacherImage3 from "../assets/images/profile2.png";
import icon01 from "../assets/images/illustration1.png";
import icon02 from "../assets/images/illustration2.png";
import icon03 from "../assets/images/illustration3.png";
import featureImg from "../assets/images/feature-img2.jpeg";
import videoImg from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon2.jpeg";
import "aos/dist/aos.css"; // Import the AOS styles
import AOS from "aos"; // Import the AOS library
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import ServiceList from "../components/Services/ServiceList";
import TeacherList from "../components/Teachers/TeacherList";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {/*----- Hero section start ----*/}
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* Hero content */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  Empowering students for a brighter future
                </h1>
                <p className="text__para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam quaerat quidem quasi, quibusdam quasi, quasi, quasi
                  quasi quasi quasi quasi quasi quasi quasi quasi quasi quasi
                  quasi
                </p>
                <button className="btn">Find a Teacher</button>
              </div>

              {/* Hero counter */}
              <div className="mt-[30px] lg:mt-[45px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div
                  data-aos="fade-right"
                  data-aos-duration="3000"
                  data-aos-delay="200"
                >
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    10+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowBgColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Years of Experience</p>
                </div>

                <div
                  data-aos="fade-right"
                  data-aos-duration="3000"
                  data-aos-delay="300"
                >
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    9800+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Teachers</p>
                </div>

                <div
                  data-aos="fade-right"
                  data-aos-duration="3000"
                  data-aos-delay="400"
                >
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    98%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Student Satisfaction</p>
                </div>
              </div>
            </div>

            <div className="flex gap-[30px] justify-end">
              <div>
                <img
                  src={teacherImage}
                  alt="Teacher"
                  className="w-80 rounded-lg"
                />
              </div>
              <div className="mt-[30px]">
                <img
                  src={teacherImage2}
                  alt="Teacher"
                  className="mb-[30px] w-36 rounded-lg"
                />
                <img
                  src={teacherImage3}
                  alt="Teacher"
                  className="w-36 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*----- Hero section end -----*/}

      {/*----- How it works section start -----*/}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best teaching methods
            </h2>
            <p className="text__para text-center">
              Unlock your full academic potential with exceptional tutoring. Our
              platform connects you with the finest educators for personalized
              learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            {/* ICON 1 */}
            <div
              className="py-[30px] px-5"
              data-aos="fade-right"
              data-aos-duration="3000"
              data-aos-delay="200"
            >
              <div className="flex items-center justify-center">
                <img src={icon01} alt="A person offering help to someone" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Teacher
                </h2>
                <p className="text-center text-textColor">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ratione voluptates nostrum hic totam exercitationem
                  perferendis, eligendi minus maxime.
                </p>

                <Link
                  to="/teachers"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            {/* ICON 2 */}
            <div
              className="py-[30px] px-5"
              data-aos="fade-right"
              data-aos-duration="3000"
              data-aos-delay="500"
            >
              <div className="flex items-center justify-center">
                <img src={icon02} alt="A person offering help to someone" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Learn in the best way
                </h2>
                <p className="text-center text-textColor">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ratione voluptates nostrum hic totam exercitationem
                  perferendis, eligendi minus maxime.
                </p>

                <Link
                  to="/teachers"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            {/* ICON 3 */}
            <div
              className="py-[30px] px-5"
              data-aos="fade-right"
              data-aos-duration="3000"
              data-aos-delay="700"
            >
              <div className="flex items-center justify-center">
                <img src={icon03} alt="A person offering help to someone" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Be confident for the future
                </h2>
                <p className="text-center text-textColor">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ratione voluptates nostrum hic totam exercitationem
                  perferendis, eligendi minus maxime.
                </p>

                <Link
                  to="/teachers"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*----- How it works section end -----*/}

      <About />

      {/*----- Subject section start -----*/}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Subjects</h2>
            <p className="text__para text-center">
              Unlock your full academic potential with exceptional tutoring. Our
              platform connects you with the finest educators for personalized
              learning.
            </p>
          </div>

          <ServiceList />
        </div>
      </section>
      {/*----- Subject section end -----*/}

      {/*----- Feature section start -----*/}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* Feature content */}
            <div className="xl:w-[670px]">
              <div className="heading">
                Get virtual course <br /> anytime.
              </div>
              <ul className="pl-4">
                <li className="text__para">
                  1. Schedule the appointment directly
                </li>
                <li className="text__para">
                  2. Choose your subject and your teacher
                </li>
                <li className="text__para">
                  3. Use online scheduling tool to select an appointement time.
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>

            {/* Feature image */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} alt="Teacher" className="rounded-lg" />

              <div
                className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] shadow-2xl left-[-50px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[16px] rounded-[10px]"
                data-aos="fade-right"
                data-aos-duration="3000"
                data-aos-delay="500"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      Wed, 21
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                      11:00AM
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowBgColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={videoImg} alt="Camera icon" />
                  </span>
                </div>

                <div className="w-[65px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                  Course
                </div>

                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" className="w-10 rounded-full" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                    Ava Clark
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*----- Feature section end -----*/}

      {/*----- Teacher's section start -----*/}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our great Teachers</h2>
            <p className="text__para text-center">
              Unlock your full academic potential with exceptional tutoring. Our
              platform connects you with the finest educators for personalized
              learning.
            </p>
          </div>
          <TeacherList />
        </div>
      </section>
      {/*----- Teacher's section end -----*/}
    </>
  );
};

export default Home;
