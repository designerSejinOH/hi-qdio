/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["0"]: THREE.Mesh;
  };
  materials: {
    ["Main_Dispersed Glass"]: THREE.MeshStandardMaterial;
  };
};

// @ts-ignore
export function Case(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("glb/case.glb") as GLTFResult;
  const config = {
    baseColor: "#73807c",
    transmission: 1.14,
    thickness: 0.2,
    backsideThickness: 0.28,
    roughness: 0.1,
    chromaticAberration: 0.1,
    anisotropicBlur: 0.1,
    distortion: 0.1,
    distortionScale: 0.0,
    temporalDistortion: 0.9,
    transmissionSampler: false,
    backside: true,
    samples: 6,
  };

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["0"].geometry}
        material={materials["Main_Dispersed Glass"]}
        scale={0.45}
      >
        <MeshTransmissionMaterial {...config} />
      </mesh>
    </group>
  );
}

useGLTF.preload("glb/case.glb");