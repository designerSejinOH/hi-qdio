"use client";

import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import { sendGAEvent } from "@next/third-parties/google";

interface ScrollDownButtonProps {
  currentSection?: number; // 스크롤할 요소의 ID
  children?: React.ReactNode;
}

export const ScrollDownButton: React.FC<ScrollDownButtonProps> = ({
  currentSection = 0,
  children,
}) => {
  const id = `${currentSection + 1}`;
  const handleScroll = () => {
    if (id) {
      const targetElement = document.getElementById(id);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth", // 부드러운 스크롤
          block: "start", // 요소의 시작 부분으로 스크롤
        });
      }
    }
  };

  const handleScrollToTop = () => {
    const targetElement = document.getElementById("0");
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth", // 부드러운 스크롤
        block: "start", // 요소의 시작 부분으로 스크롤
      });
    }
  };

  const targetDate = new Date("2024-11-21T23:59:59");
  const today = new Date();

  return (
    <>
      <AnimatePresence>
        {currentSection < 10 && (
          <>
            <AnimatePresence>
              {currentSection === 7 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed z-20 bottom-[12%] left-1/2 -translate-x-1/2 w-fit min-w-72 max-w-96 h-fit"
                >
                  {children}
                  <Button
                    preset="special"
                    onClick={() => {
                      today < targetDate
                        ? alert("곧 오픈합니다!")
                        : window.open("https://qdio.vercel.app");
                      sendGAEvent({
                        event: "buttonClicked",
                        category: "button",
                        label: "special",
                      });
                    }}
                  >
                    {today < targetDate ? (
                      <CountdownTimer targetDate={targetDate} />
                    ) : (
                      "체험하러 가기"
                    )}
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleScroll}
              className="fixed z-20 bottom-[3%] left-1/2 transform -translate-x-1/2 w-fit h-fit flex flex-col justify-center items-center cursor-pointer"
            >
              <div
                className={classNames(
                  "w-fit h-fit animate-pulse flex  flex-col justify-center items-center gap-0 transition-all duration-300 ease-in-out",
                  (currentSection ?? 0) > 1
                    ? "text-white active:bg-white active:text-black md:hover:bg-white md:hover:text-black"
                    : "text-black active:bg-black active:text-white md:hover:bg-black md:hover:text-white"
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={classNames(" w-14 md:w-16 px-4  rounded-lg")}
                  viewBox="0 0 30 17"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M28.841 0.91462C29.3779 1.48222 29.3779 2.37037 28.841 2.93796L16.2509 16.2479C15.4619 17.0821 14.1341 17.0821 13.345 16.2479L0.754938 2.93796C0.218039 2.37036 0.21804 1.48222 0.754939 0.91462C1.33575 0.300596 2.31315 0.300596 2.89397 0.91462L13.345 11.9632C14.1341 12.7974 15.4619 12.7974 16.2509 11.9632L26.702 0.914619C27.2828 0.300595 28.2602 0.300596 28.841 0.91462Z"
                  />
                </svg>
                {/* <span className="text-xs md:text-sm font-bold">스크롤하기</span> */}
              </div>
            </motion.div>
          </>
        )}
        {currentSection > 9 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleScrollToTop}
            className="fixed z-20 bottom-[3%] left-1/2 transform -translate-x-1/2 w-fit h-fit flex flex-col justify-center items-center cursor-pointer opacity-60"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={classNames(
                " w-14 md:w-16 py-2 px-4 animate-bounce  rounded-lg transition-all duration-300 ease-in-out rotate-180",
                (currentSection ?? 0) > 1
                  ? "text-white active:bg-white active:text-black md:hover:bg-white md:hover:text-black"
                  : "text-black active:bg-black active:text-white md:hover:bg-black md:hover:text-white"
              )}
              viewBox="0 0 30 17"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M28.841 0.91462C29.3779 1.48222 29.3779 2.37037 28.841 2.93796L16.2509 16.2479C15.4619 17.0821 14.1341 17.0821 13.345 16.2479L0.754938 2.93796C0.218039 2.37036 0.21804 1.48222 0.754939 0.91462C1.33575 0.300596 2.31315 0.300596 2.89397 0.91462L13.345 11.9632C14.1341 12.7974 15.4619 12.7974 16.2509 11.9632L26.702 0.914619C27.2828 0.300595 28.2602 0.300596 28.841 0.91462Z"
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return null; // 시간이 다 되었을 때 null 반환
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft();
      setTimeLeft(updatedTimeLeft);
    }, 1000);

    // 컴포넌트가 언마운트될 때 타이머 정리
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return <div>Countdown complete!</div>; // 시간이 다 되었을 때 메시지 출력
  }

  return <>{timeLeft.days + 1}일 뒤에 오픈!</>;
};
