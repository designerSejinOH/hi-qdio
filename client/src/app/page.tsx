"use client";

import { useEffect, useRef, useState } from "react";
import {
  Section,
  Footer,
  Logo,
  GradientBlur,
  ScrollDownButton,
  R3FView,
  NaverMap,
  AudioPlayer,
} from "@/components";
import classNames from "classnames";
import Image from "next/image";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Home() {
  const [dvh, setDvh] = useState(0);

  const [scrollY, setScrollY] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const frameRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef(
    Array.from({ length: 11 }, () => React.createRef<HTMLDivElement>())
  );

  const swiperRef = useRef<any>(null); // Swiper 인스턴스 참조

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext(); // 다음 슬라이드로 이동
  };

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev(); // 이전 슬라이드로 이동
  };

  const [modelNum, setModelNum] = useState(0);

  const [userInteracted, setUserInteracted] = useState(false);

  const [showMap, setShowMap] = useState(false);

  const dueDate = new Date("2024-11-22T00:00:00").getTime();
  const now = new Date().getTime();
  const distance = dueDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  // window resize event
  useEffect(() => {
    const handleResize = () => {
      setDvh(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDvh(window.innerHeight);
    }

    const handleScroll = () => {
      if (frameRef.current) {
        setScrollY(frameRef.current.scrollTop);
      }
    };

    const scrollContainer = frameRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    const maxScrollY = dvh * (sectionRefs.current.length - 1);
    const sectionIndex = Math.round(scrollY / dvh);

    if (scrollY >= maxScrollY) {
      setCurrentSection(sectionRefs.current.length - 1);
    } else {
      setCurrentSection(sectionIndex);
    }
  }, [scrollY, dvh, currentSection]);

  return (
    <div
      ref={frameRef}
      style={{ height: dvh + 1 }}
      className="w-screen relative  overflow-x-hidden overflow-y-scroll snap-y snap-mandatory "
    >
      {/* <div className="fixed z-50 w-fit h-fit bg-yellow-200 ">
        {currentSection}
      </div> */}
      <div className="fixed z-50 top-0 left-0 w-full h-1 md:h-2 bg-transparent">
        <div
          className={classNames("h-full ", "bg-primary-300")}
          style={{ width: `${(scrollY / (dvh * 10)) * 100}%` }}
        ></div>
      </div>
      <FTop currentSection={currentSection} />
      <FCenter currentSection={currentSection} modelNum={modelNum} />
      <ScrollDownButton currentSection={currentSection}>
        <AudioPlayer
          trackIndex={modelNum}
          currentSection={currentSection}
          userInteracted={userInteracted}
          setUserInteracted={setUserInteracted}
        />
      </ScrollDownButton>
      <GradientBlur visible={currentSection < 8} />

      <div
        style={{ height: dvh * 2 }}
        className="absolute z-0 pointer-events-none top-0 left-1/2 -translate-x-1/2 w-full"
      >
        <Image
          priority={true}
          src="/images/main.png"
          alt="01"
          width={1920}
          height={2160}
          className=""
          style={{
            objectFit: "cover",
            objectPosition: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "auto",
            height: "100%",
          }}
        />
      </div>
      <Section
        id="0"
        className="bg-[#CACACB]"
        ref={sectionRefs.current[0]}
      ></Section>
      <Section
        id="1"
        className="bg-[#CACACB]"
        ref={sectionRefs.current[1]}
      ></Section>
      {/* Background */}
      <Section
        id="2"
        className="bg-black"
        ref={sectionRefs.current[2]}
      ></Section>
      <Section
        id="3"
        className="bg-black"
        ref={sectionRefs.current[3]}
      ></Section>
      <Section
        id="4"
        className="bg-black"
        ref={sectionRefs.current[4]}
      ></Section>
      <Section
        id="5"
        className="bg-black"
        ref={sectionRefs.current[5]}
      ></Section>
      {/* Contents */}
      <Section id="6" className="bg-black" ref={sectionRefs.current[6]}>
        <div className="absolute w-full h-full bg-[#282828] overflow-hidden">
          <Image
            src="/images/content1.png"
            alt="01"
            className="absolute bottom-0 h-[100dvh] min-w-[100dvh] left-1/2 transform -translate-x-1/2"
            width={839}
            height={839}
          />
        </div>
        <div className="absolute w-full h-full bg-black/50"></div>
      </Section>
      <Section id="7" className="bg-black" ref={sectionRefs.current[7]}>
        <div className="absolute w-full h-full ">
          <div className="absolute z-10 w-full h-fit aspect-square top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
            <div className="w-full max-w-xl  h-fit flex flex-row justify-center items-center relative  overscroll-contain touch-pan-y">
              <button
                onClick={() => {
                  handlePrev();
                }}
                className="w-fit h-fit py-6 px-4 flex justify-center items-center active:scale-90 active:opacity-50 text-white/60 md:hover:opacity-50 transition-all duration-200 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 18 30"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.8474 30.036C17.2252 30.5935 16.2515 30.5935 15.6293 30.036L1.03811 16.9628C0.123648 16.1435 0.123649 14.7647 1.03811 13.9454L15.6293 0.872225C16.2515 0.314726 17.2252 0.314727 17.8474 0.872227C18.5205 1.47533 18.5205 2.49023 17.8474 3.09333L5.73524 13.9454C4.82077 14.7647 4.82077 16.1435 5.73524 16.9628L17.8474 27.8149C18.5205 28.418 18.5205 29.4329 17.8474 30.036Z"
                  />
                </svg>
              </button>
              <Swiper
                // install Swiper modules
                className="w-full  "
                modules={[]}
                loop={true}
                spaceBetween={10}
                onSwiper={(swiper) => (swiperRef.current = swiper)} // Swiper 인스턴스를 ref에 저장
                onSlideChange={(swiper) => {
                  setModelNum(swiper.realIndex);
                }} // 스와이프할 때 modelNum 업데이트
              >
                {["green", "yellow", "red", "blue"].map((item, index) => (
                  <SwiperSlide
                    key={index}
                    className="w-full h-fit aspect-square"
                  >
                    <Image
                      src={`/images/${item}.webp`}
                      alt={item}
                      className="w-full h-full"
                      width={839}
                      height={839}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <button
                onClick={() => {
                  handleNext();
                }}
                className="w-fit h-fit py-6 px-4 flex justify-center items-center active:scale-90 active:opacity-50 text-white/60 md:hover:opacity-50 transition-all duration-200 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 18 30"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.857114 30.036C1.47935 30.5935 2.45299 30.5935 3.07523 30.036L17.6664 16.9628C18.5809 16.1435 18.5809 14.7647 17.6664 13.9454L3.07522 0.872225C2.45299 0.314726 1.47935 0.314727 0.857112 0.872227C0.183981 1.47533 0.183982 2.49023 0.857114 3.09333L12.9693 13.9454C13.8838 14.7647 13.8838 16.1435 12.9693 16.9628L0.857114 27.8149C0.183983 28.418 0.183982 29.4329 0.857114 30.036Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute w-full h-full bg-[#282828] overflow-hidden">
          <Image
            src="/images/content2.png"
            alt="02"
            className="absolute bottom-0 w-screen h-auto left-1/2 transform -translate-x-1/2"
            width={386}
            height={839}
          />
        </div>
        <div className="absolute w-full h-full bg-black/50"></div>
      </Section>
      {/* Information */}
      <Section
        id="8"
        className="bg-black text-white flex flex-col justify-center items-center"
        ref={sectionRefs.current[8]}
      >
        <div className="w-full flex flex-col gap-4 justify-center items-center h-fit px-12 py-10">
          <div className="w-fit h-fit leading-tight font-semibold text-8xl md:text-[16vmax] ">
            D-{days + 1}
          </div>
          <div className="w-fit h-fit leading-snug text-center text-4xl md:text-5xl">
            전시개관까지
            <br />
            11.22 - 25
          </div>
        </div>
      </Section>
      <Section
        id="9"
        className="bg-black text-white flex flex-col justify-start pt-12 gap-2 items-center"
        ref={sectionRefs.current[9]}
      >
        <div className="w-[90vw] md:w-[100vw] md:px-6 h-[100vw] md:h-[60vh] relative">
          <NaverMap />
        </div>
        <div className="w-full h-fit px-6 pt-6 flex flex-col gap-2 justify-start items-start">
          <div className="w-fit h-fit leading-tight text-zinc-400 text-2xl font-semibold ">
            Location
          </div>
          <div className="w-fit h-fit leading-tight text-white text-5xl md:text-7xl font-bold">
            더서울 라이티움
          </div>
          <div className="w-fit h-fit leading-tight text-zinc-400 text-sm md:text-2xl">
            서울특별시 성동구 서울숲2길 32-14 갤러리아포레 B2
          </div>
        </div>
      </Section>
      {/* Footer */}
      <Footer
        id="10"
        className="bg-black text-white flex flex-col justify-between items-start"
        ref={sectionRefs.current[10]}
      >
        <div className="w-full h-fit px-6 py-6 flex flex-col gap-2 md:gap-4 justify-start items-start">
          <div className="w-fit h-fit leading-tight text-white text-2xl md:text-3xl font-light">
            제4회 <br />
            홍익대학교 <br />
            디자인컨버전스학부 <br />
            졸업전시회
          </div>
          <div className="self-stretch h-2"></div>
          <div className="flex flex-row gap-2 justify-center items-center w-fit h-fit">
            <div className="text-black w-fit h-fit px-2 font-medium bg-white text-2xl md:text-3xl">
              UXUI - 17 부스
            </div>
            <div className="text-white w-fit h-fit px-2 font-medium text-xl md:text-3xl">
              황현동, 오세진
            </div>
          </div>
        </div>
        <div className="h-full ml-6 flex-1 p-4 aspect-square relative">
          <Image
            onClick={() => {
              setShowMap(true);
            }}
            src="/images/map.png"
            alt="Image"
            fill
            style={{ objectFit: "cover" }}
            className="cursor-pointer md:hover:opacity-70 active:opacity-70 transition-all duration-200 ease-in-out"
          />
        </div>
        {/* 이미지 크게보기 */}
        {showMap && (
          <div
            onClick={() => {
              setShowMap(false);
            }}
            className="fixed z-50 top-0 left-0 w-screen h-dvh p-4 flex justify-center items-center bg-black/90"
          >
            <div
              onClick={() => {
                setShowMap(false);
              }}
              className="w-fit h-fit p-6 absolute right-0 top-0 md:hover:opacity-60 active:opacity-60 transition-all duration-200 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 14 14"
                fill="currentColor"
              >
                <path d="M12.9398 0.211762C12.7836 0.0555521 12.5303 0.0555525 12.3741 0.211762L7.70722 4.87867C7.31678 5.26911 6.6838 5.26919 6.29326 4.87892L1.6261 0.211762C1.46989 0.055552 1.21662 0.0555521 1.06041 0.211762L0.211884 1.06029C0.0556741 1.2165 0.0556742 1.46977 0.211884 1.62598L5.30305 6.71714C5.45926 6.87335 5.71253 6.87335 5.86874 6.71714L6.293 6.29288C6.68353 5.90236 7.31669 5.90236 7.70722 6.29288L8.13148 6.71714C8.28769 6.87335 8.54096 6.87335 8.69717 6.71714L13.7883 1.62598C13.9445 1.46977 13.9445 1.2165 13.7883 1.06029L12.9398 0.211762Z" />
                <path d="M6.29392 9.12039C6.6844 8.7309 7.31661 8.73109 7.70686 9.12095L12.3741 13.7882C12.5303 13.9444 12.7836 13.9444 12.9398 13.7882L13.7883 12.9397C13.9445 12.7835 13.9445 12.5302 13.7883 12.374L8.69717 7.28283C8.54096 7.12662 8.28769 7.12662 8.13148 7.28283L7.70722 7.70709C7.31669 8.09762 6.68353 8.09762 6.293 7.70709L5.86874 7.28283C5.71253 7.12662 5.45926 7.12662 5.30305 7.28283L0.211883 12.374C0.0556744 12.5302 0.0556741 12.7835 0.211884 12.9397L1.06041 13.7882C1.21662 13.9444 1.46989 13.9444 1.6261 13.7882L6.29392 9.12039Z" />
              </svg>
            </div>
            <Image
              onClick={(e) => {
                e.stopPropagation();
              }}
              src="/images/map.png"
              alt="Image"
              layout="intrinsic"
              width={1920}
              height={1080}
              className="cursor-pointer"
            />
          </div>
        )}

        <div className="w-full flex-2 h-fit px-6 flex flex-col justify-end items-center pb-8 gap-12">
          <div className="w-full pt-6 h-fit flex flex-col md:flex-row-reverse gap-2 justify-center md:justify-between items-center md:items-end">
            <Logo className="w-56 md:w-1/5 px-6" />
            <div className="w-fit text-xs md:text-lg">
              © 2024 Qdio. All rights reserved. Based in Seoul.
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
}

const FTop = ({ currentSection }: { currentSection: number }) => {
  return (
    <div className="fixed z-10 top-6 left-6 w-fit h-fit flex justify-center items-center">
      <AnimatePresence>
        {currentSection < 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={classNames(
              "text-xl md:text-3xl font-light pointer-events-none text-black leading-tight"
            )}
          >
            HONGIK UNIV <br />
            GRADUATION EXHIBITION <br />
            PROJECT
            <br />
            2024
          </motion.div>
        )}
        {currentSection > 1 && currentSection < 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={classNames(
              "text-5xl md:text-7xl font-light pointer-events-none text-white leading-tight"
            )}
          >
            <span className="font-extrabold">AI시대</span>에는
            <br />
            <span className="font-extrabold">어떤 음악</span>을
            <br />
            듣게 될까요?
          </motion.div>
        )}
        {currentSection === 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={classNames(
              "text-5xl md:text-7xl font-light pointer-events-none text-white leading-tight"
            )}
          >
            <span className="font-extrabold">사진</span>으로 만드는
            <br />
            나만의 음악
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {currentSection === 8 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={classNames(
              "text-xl font-light pointer-events-none text-white leading-tight"
            )}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FCenter = ({
  currentSection,
  modelNum,
}: {
  currentSection: number;
  modelNum: number;
}) => {
  const dueDate = new Date("2024-11-22T00:00:00").getTime();
  const now = new Date().getTime();
  const distance = dueDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const tagsForCD = [
    ["평화로운", "휴식중", "11월"],
    ["신나는", "여행중", "6월"],
    ["화가날 때", "업무중", "9월"],
    ["우울한", "일상", "2월"],
  ];

  return (
    <>
      <AnimatePresence>
        {currentSection < 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={classNames(
              "pointer-events-none fixed z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-fit h-fit flex flex-col justify-center items-center gap-4 text-black"
            )}
          >
            {days < 0 && (
              <span className="text-2xl md:text-4xl leading-[100%]">
                순간을 모아, 음악으로 만들다
              </span>
            )}
            <Logo className="w-[72vw] md:w-[45vw] h-fit" />
            {days > 0 && (
              <span className="text-6xl md:text-8xl font-light leading-[100%]">
                D-{days + 1}
              </span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {currentSection > 1 && currentSection < 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none fixed z-30 top-64 md:top-[56%] left-6 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 flex flex-col gap-5 md:gap-8 justify-center items-start md:items-center"
          >
            {currentSection > 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-white leading-snug text-2xl md:text-3xl"
              >
                상황에 맞는 {""}
                <span className=" md:hidden ">
                  <br />
                </span>
                맞춤형 음악
              </motion.div>
            )}
            {currentSection > 3 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-white leading-snug text-2xl md:text-3xl"
              >
                생성형 AI를 통한 {""}
                <span className=" md:hidden ">
                  <br />
                </span>
                매번 새로운 음악
              </motion.div>
            )}
            {currentSection > 4 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-white leading-snug text-2xl md:text-3xl"
              >
                내가 원하는 {""}
                <span className=" md:hidden ">
                  <br />
                </span>
                스타일의 음악
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {currentSection > 6 && currentSection < 8 && (
          <motion.div className="pointer-events-none fixed z-50 top-[7%] left-1/2 -translate-x-1/2 flex flex-col justify-center items-center">
            <div className="w-fit h-fit text-white flex flex-col gap-6 justify-center items-center">
              <div className="w-fit text-nowrap h-fit text-center leading-snug text-3xl">
                황현동님의 {""}
                <span className=" md:hidden ">
                  <br />
                </span>
                일상을 담은 음악
              </div>
              <div className="w-fit h-fit flex flex-row gap-2">
                {tagsForCD[modelNum].map((item, index) => (
                  <AnimatePresence key={index}>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      key={index}
                      className={classNames(
                        "w-fit min-w-16 h-fit text-nowrap rounded-full  backdrop-blur-sm text-base px-5 py-2",
                        index === 0 && modelNum === 0
                          ? "bg-green-500"
                          : index === 0 && modelNum === 1
                            ? "bg-yellow-500"
                            : index === 0 && modelNum === 2
                              ? "bg-red-500"
                              : index === 0 && modelNum === 3
                                ? "bg-blue-500"
                                : "bg-trueGray-100/35"
                      )}
                    >
                      {item}
                    </motion.div>
                  </AnimatePresence>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
