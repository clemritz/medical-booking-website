import React from "react";

import teacherImage from "../assets/images/teacher.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const Home = () => {
  return (
    <>
      {/* Hero section start */}
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
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowBgColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Years of Experience</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    9800+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Teachers</p>
                </div>

                <div>
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
                  src={teacherImage}
                  alt="Teacher"
                  className="mb-[30px] w-36 rounded-lg"
                />
                <img
                  src={teacherImage}
                  alt="Teacher"
                  className="w-36 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero section end */}

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
            <div className="py-[30px] px-5">
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
            <div className="py-[30px] px-5">
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
            <div className="py-[30px] px-5">
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
    </>
  );
};

export default Home;
