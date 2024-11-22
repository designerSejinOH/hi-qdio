"use client";
import classNames from "classnames";
import { Suspense, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import {
  Box,
  Center,
  Environment,
  Html,
  OrbitControls,
  Preload,
} from "@react-three/drei";
import { Canvas, useFrame, ThreeElements, useThree } from "@react-three/fiber";
import { GreenCD, RedCD, YellowCD, BlueCD, Case } from "./Models";
import React from "react";
interface R3FViewProps {
  modelNum: number;
  setModelNum: React.Dispatch<React.SetStateAction<number>>;
}

export const R3FView = ({ modelNum, setModelNum }: R3FViewProps) => {
  const setPrevModel = () => {
    //modelNum의 이전 숫자로 변경, 다만 0보다 작아지면 3으로 변경
    setModelNum((prev) => (prev - 1 + 4) % 4);
  };

  const setNextModel = () => {
    //modelNum의 다음 숫자로 변경, 다만 3보다 커지면 0으로 변경
    setModelNum((prev) => (prev + 1) % 4);
  };

  return (
    <>
      <Canvas
        camera={{ position: [0, 8, 8], fov: 50 }}
        dpr={[1, 2]}
        className="w-full h-full bg-transparent"
        onCreated={(state) => (state.gl.toneMapping = THREE.AgXToneMapping)}
      >
        <ambientLight intensity={1} />
        <RectLight />
        <Suspense
          fallback={
            <Html center>
              <motion.div
                className="w-36 h-36 bg-white rounded-full flex items-center justify-center"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <p className="text-base">Loading...</p>
              </motion.div>
            </Html>
          }
        >
          <Environment files="glb/hdr.hdr" />
          {modelNum === 0 ? (
            <GreenCD scale={3.5} />
          ) : modelNum === 1 ? (
            <YellowCD scale={3.5} />
          ) : modelNum === 2 ? (
            <RedCD scale={3.5} />
          ) : (
            <>
              <BlueCD scale={3.5} />
              <Case scale={3.5} />
            </>
          )}

          <OrbitControls
            autoRotate
            autoRotateSpeed={2}
            enableDamping
            dampingFactor={0.1}
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 3}
            // maxPolarAngle={Math.PI / 3}
          />
        </Suspense>
        <Preload all />
      </Canvas>
      <div className="absolute top-0 -left-8 md:-left-20 z-10 w-fit h-full flex flex-col justify-center items-center">
        <button
          onClick={() => setPrevModel()}
          className="w-fit h-fit py-6 flex justify-center items-center active:scale-90 active:opacity-50 text-white/60 md:hover:opacity-50 transition-all duration-200 ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
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
      </div>
      <div className="absolute top-0 -right-8 md:-right-20 z-10 w-fit h-full flex flex-col justify-center items-center">
        <button
          onClick={() => setNextModel()}
          className="w-fit h-fit py-6 flex justify-center items-center active:scale-90 active:opacity-50 text-white/60 md:hover:opacity-50 transition-all duration-200 ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
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
    </>
  );
};

export const Common = () => {
  return (
    <Suspense fallback={null}>
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} intensity={3} />
      <pointLight position={[20, 30, 10]} intensity={3} decay={0.2} />
      <Environment files="glb/hdr.hdr" />
    </Suspense>
  );
};

function RectLight() {
  const lightRef = useRef<THREE.RectAreaLight>();

  const lightconfig = {
    position: [0, 4, 0],
    color: "#ffffff",
    intensity: 1,
    width: 4.2,
    height: 4.2,
  };

  useEffect(() => {
    if (lightRef.current) {
      lightRef.current.lookAt(0, 0, 0); // 빛이 중앙을 향하게 설정
    }
  }, []);

  return (
    <rectAreaLight
      ref={lightRef}
      intensity={lightconfig.intensity}
      position={lightconfig.position as [number, number, number]}
      color={lightconfig.color}
      width={lightconfig.width}
      height={lightconfig.height}
    />
  );
}
