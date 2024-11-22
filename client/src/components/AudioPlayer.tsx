"use client";

// 오디오 파일 경로를 배열로 선언
const audioFiles = [
  {
    src: "/audio/green.mp3",
    name: "평화로운 휴식",
  },
  {
    src: "/audio/yellow.mp3",
    name: "신나는 여행",
  },
  {
    src: "/audio/red.mp3",
    name: "화가날때 들을 노래",
  },
  {
    src: "/audio/blue.mp3",
    name: "일상 속 우울함",
  },
];

// components/MusicPlayer.tsx
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import ReactDOM from "react-dom";

interface AudioPlayerProps {
  trackIndex: number; // 0 ~ 3 사이의 인덱스로 곡 선택
  currentSection: number;
  userInteracted: boolean;
  setUserInteracted: (value: boolean) => void;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  trackIndex,
  currentSection,
  userInteracted,
  setUserInteracted,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const play = () => setIsPlaying(true);

  const pause = () => setIsPlaying(false);

  const [showPopup, setShowPopup] = useState(false);

  const handleInteraction = () => {
    setUserInteracted(true);
    setShowPopup(false);
  };

  useEffect(() => {
    if (currentSection === 7 && !userInteracted) {
      setShowPopup(true);
    }

    if (userInteracted) {
      play();
    }
  }, [userInteracted, currentSection, isPlaying]);

  return (
    <>
      {/* 팝업 */}
      {showPopup && Overlay({ handleInteraction })}

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 w-fit h-fit opacity-70">
        <ReactPlayer
          url={audioFiles[trackIndex].src} // 변수에 따라 다른 곡 재생
          playing={isPlaying}
          controls={false}
          width="100%"
          height="0"
          className="hidden"
        />
        <button onClick={togglePlay} className="text-white">
          {isPlaying ? (
            <>
              <span>&quot;{audioFiles[trackIndex].name}&quot;</span>
              <span className="opacity-70">을 듣고 있습니다...</span>
            </>
          ) : (
            "재생하기"
          )}
        </button>
      </div>
    </>
  );
};

const Overlay = ({ handleInteraction }: { handleInteraction: () => void }) => {
  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/70 z-50">
      <div className="bg-white px-8 py-6 rounded-2xl text-center flex flex-col justify-center items-center gap-4">
        <p>음악을 재생하려면 클릭하세요.</p>
        <button
          onClick={handleInteraction}
          className="mt-4 px-8 py-2 bg-black text-white rounded-xl active:bg-black active:text-white transition-all duration-200 ease-in-out md:hover:bg-white md:hover:text-black"
        >
          허용
        </button>
      </div>
    </div>,
    document.body
  );
};
