import React, { useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAppContext } from "../../../Context/AppContextProvider";
import { motion } from "framer-motion";
// import { useFetchData } from "../../../HOC/useFetchData";
import Aurora from "../../UI/Aura";
import { Imgs } from "../../../Constants/Imgs";
export const BolidTeam = () => {
  // const [info, error, isLoading] = useFetchData(
  //   "http://localhost:3001/getImages"
  // );
  const goYT = () => {
    window.open(
      "https://www.youtube.com/watch?v=cB6uA-s3bHc&t=11900s",
      "_blank"
    );
  };
  const { state } = useAppContext();
  const sectionRef = useRef(null);
  const teamRef1 = useRef(null);
  const teamRef2 = useRef(null);
  const f25Ref = useRef(null);
  const hamf25Ref = useRef(null);
  const leclf25Ref = useRef(null);
  useEffect(() => {
    if (state.visibleOut) {
      const setInitialValues = () => {
        const isMobile = window.innerWidth < 768;
        const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
        const isLaptop = window.innerWidth >= 1024 && window.innerWidth < 1280;

        // Set initial values based on screen size
        gsap.set(teamRef1.current, {
          y: isMobile ? 450 : 650,
          x: isMobile ? 30 : 50,
          opacity: 1,
        });
        gsap.set(teamRef2.current, {
          y: isMobile ? 1200 : isTablet ? 1400 : 1600,
          opacity: 1,
        });
        gsap.set(f25Ref.current, {
          y: 0,
          x: isMobile ? 80 : 120,
          opacity: 1,
        });
        gsap.set(hamf25Ref.current, {
          y: isMobile ? 900 : isTablet ? 1000 : 1200,
          opacity: 1,
        });
        gsap.set(leclf25Ref.current, {
          y: isMobile ? 1200 : isTablet ? 1300 : 1500,
          x: isMobile ? 30 : 50,
          opacity: 0,
        });
      };

      setInitialValues();

      const createTimeline = () => {
        const isMobile = window.innerWidth < 768;
        const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
        const isLaptop = window.innerWidth >= 1024 && window.innerWidth < 1280;

        // Define responsive values
        const scrubValue = isMobile ? 2 : isTablet ? 2.5 : 3;
        const yOffset1 = isMobile ? 600 : isTablet ? 700 : 900;
        const yOffset2 = isMobile ? 200 : isTablet ? 250 : 300;
        const yOffset3 = isMobile ? 400 : isTablet ? 500 : 600;
        const yOffset4 = isMobile ? 300 : isTablet ? 350 : 400;
        const yOffset5 = isMobile ? 450 : isTablet ? 530 : 610;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: isMobile ? "top 150%" : isTablet ? "top 140%" : "top center",
            scrub: scrubValue,
            markers: false,
            pin: true,
          },
        });

        // Create animation sequence
        tl.to(teamRef1.current, {
          y: yOffset1,
          opacity: 1,
          ease: "power1.inOut",
        })
          .to(
            teamRef2.current,
            {
              y: yOffset2,
              opacity: 1,
              ease: "power1.inOut",
            },
            "<"
          )
          .to(
            f25Ref.current,
            {
              y: yOffset3,
              opacity: 1,
              ease: "power1.inOut",
            },
            "<"
          )
          .to(
            hamf25Ref.current,
            {
              y: yOffset4,
              opacity: 1,
              ease: "power1.inOut",
            },
            "<"
          )
          .to(
            leclf25Ref.current,
            {
              y: yOffset5,
              opacity: 1,
              ease: "power1.inOut",
            },
            "<"
          );

        return tl;
      };

      // Create the timeline
      let timeline = createTimeline();

      // Handle resize events
      const handleResize = () => {
        if (timeline) {
          timeline.kill();
        }
        setInitialValues();
        timeline = createTimeline();
      };

      window.addEventListener("resize", handleResize);

      // Clean up on unmount
      return () => {
        window.removeEventListener("resize", handleResize);
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        if (timeline) {
          timeline.kill();
        }
      };
    }
  }, [state.visibleOut]);
  return (
    <div
      className={`w-full h-[800px] relative top-40 text-white transition-all flex gap-96   flex-col  duration-1000 ease-out ${
        state.visibleOut
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-10"
      }`}
    >
      <div className="flex flex-col gap-96">
        <div className="flex flex-row gap-20 md:gap-72">
          <div ref={teamRef1} className="relative -top-28 xl:-top-20 xxl:top-0">
            <img
              alt=""
              src={Imgs.team.teamF1}
              className=" w-[800px] ssm:h-[150px]  smm:h-[200px] smm:w-[900px] sm:h-[250px] mmd:h-[300px] lg:h-[350px] xl:w-[700px] xl:h-[450px] xxl:w-[800px] xxl:h-[500px] "
            />
          </div>
          <div ref={teamRef2} className="relative -top-44 lg:top-0">
            <img src={Imgs.team.teamf2} alt="" />
          </div>
        </div>
        <div ref={f25Ref}>
          <img
            src={Imgs.hamilton.f25}
            alt=""
            className="   xxxl:h-[500px] w-[200px] h-[150px] ssm:w-[250px] ssm:h-[150px]  smm:w-[400px] smm:h-[250px] md:h-[300px] md:w-[450px]  lg:w-[550px] lg:h-[300px] xl:w-[650px] xxl:w-[750px] xl:h-[450px] xxxl:w-[800px] "
          />
        </div>
        <div>
          <div className="flex flex-row   gap-40 md:gap-72">
            <div ref={leclf25Ref} className="relative -top-48 mmd:top-0">
              <img
                alt="NextUI Album Cover"
                className="md:w-[800px] w-[950px] lg:h-[400px] h-[180px] ssm:h-[220px]  smm:h-[280px]  md:h-[300px]  xxl:h-[500px] z-10 "
                src={Imgs.leclerc.leclf25}
              />
            </div>
            <div ref={hamf25Ref} className="">
              <img
                alt="NextUI Album Cover"
                className="  w-[800px] lg:h-[450px] h-[150px] ssm:h-[200px] smm:h-[250px] sm:h-[300px] md:h-[350px]  xxl:h-[500px] "
                src={Imgs.hamilton.hamf25}
              />
            </div>
          </div>
        </div>
        <div
          className=" relative top-96  -z-10 w-full
        scale-100
        sm:scale-110
        md:scale-125
        lg:scale-100
        transform 
        origin-center
        "
        >
          {" "}
          <div className="top-shadow absolute left-0 top-0 w-full h-[20px] ssm:h-[40px] sm:h-[80px] md:h-[120px] xl:h-[180px] bg-gradient-to-b from-black to-transparent"></div>
          <Spline scene="https://prod.spline.design/4iikU6uegExMpba0/scene.splinecode" />{" "}
          {/* <div className="bottom-shadow absolute -top-[11em] left-0 -bottom-1 w-full h-[180px] bg-gradient-to-t from-black to-transparent "></div> */}
          <div className="bottom-shadow absolute left-0 -bottom-2 w-full h-[20px]  ssm:h-[40px]  sm:h-[80px] md:h-[120px] xl:h-[180px] bg-gradient-to-t from-black to-transparent "></div>
        </div>
      </div>
      <div className="relative top-10">
        <div className="flex flex-row gap-4 font-bold relative top-20 left-5 z-10">
          <div className="flex flex-col gap-2">
            <h1> The site was created by a simple Ferrari fan sseny.</h1>
            <div className="flex flex-row gap-4">
              <h1 className="">You can see it on YouTube.</h1>

              <section class="flex justify-center items-center relative top-1 ">
                <button
                  onClick={goYT}
                  class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#CD201F] from-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 576 512"
                    stroke-width="0"
                    fill="currentColor"
                    stroke="currentColor"
                  >
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                  </svg>
                  <span class="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700">
                    Youtube
                  </span>
                </button>
              </section>
            </div>
          </div>
        </div>

        <div className="rotate-[3.142rad] -z-10">
          <Aurora
            colorStops={["#6E260E", "#880808", "#7C3030"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
        </div>
      </div>
    </div>
  );
};
