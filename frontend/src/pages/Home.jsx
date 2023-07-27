import React from "react";

import teacherImage from "../assets/images/teacher.png";

const Home = () => {
  return (
    <>
      {/* Hero section */}
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
                    10000+
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
    </>
  );
};

export default Home;
