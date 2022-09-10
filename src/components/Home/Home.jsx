import React from "react";
import poster from "../../assets/images/poster.jpg"
const Home = () => {
  return (
    <>
      <section  className="h-screen contrast-more: pb-10  xl:pt-80 md:pt-32 pt-20  bg-slate-100 ">
        <div className="relative container px-4   mx-auto">
          <div className="flex flex-wrap items-center -mx-4 mb-10 2xl:mb-14">
            <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
              
              <h2 className="text-center max-w-2xl mt-8 mb-12 text-6xl 2xl:text-8xl text-black font-bold font-heading">
                Welcome to the survey {" "}
                <span className="text-[#30BCBD] text-center">application</span>
              </h2>
              
          
            </div>
            <div className=" w-full lg:block lg:w-1/2   px-4">
              <img className="" src={poster} alt="poster" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;