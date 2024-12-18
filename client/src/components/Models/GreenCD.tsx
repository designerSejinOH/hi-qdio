/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { Cloud, MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    CD_center: THREE.Mesh;
    ["1box"]: THREE.Mesh;
    cd: THREE.Mesh;
    ctr: THREE.Mesh;
    cd_cover_2: THREE.Mesh;
    cd_cover_1: THREE.Mesh;
    cd_cover_backup: THREE.Mesh;
    Plane031: THREE.Mesh;
    Plane031_1: THREE.Mesh;
    Plane031_2: THREE.Mesh;
    Plane032: THREE.Mesh;
    Plane032_1: THREE.Mesh;
    Plane032_2: THREE.Mesh;
    Plant_01: THREE.Mesh;
    Plant_02: THREE.Mesh;
    Plant_03: THREE.Mesh;
    Plant_04: THREE.Mesh;
    Plant_05: THREE.Mesh;
  };
  materials: {
    ["Main_Dispersed Glass"]: THREE.MeshStandardMaterial;
    Main_Hologram: THREE.MeshStandardMaterial;
    grass_dark: THREE.MeshStandardMaterial;
    grass_light: THREE.MeshStandardMaterial;
    floer_org: THREE.MeshStandardMaterial;
    flower_brown: THREE.MeshStandardMaterial;
    plant_light: THREE.MeshStandardMaterial;
    plant_dark: THREE.MeshStandardMaterial;
  };
};

// @ts-ignore
export function GreenCD(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("glb/green.glb") as GLTFResult;

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
  materials.Main_Hologram = new THREE.MeshStandardMaterial({
    color: 0x000000,
    roughness: 0.5,
    metalness: 0.1,
    transparent: true,
    opacity: 0.5,
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CD_center.geometry}
        material={nodes.CD_center.material}
        scale={0.45}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["1box"].geometry}
        material={materials["Main_Dispersed Glass"]}
        scale={0.45}
      >
        <MeshTransmissionMaterial {...config} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cd.geometry}
        material={materials.Main_Hologram}
        position={[0, 0.006, 0]}
        scale={0.912}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ctr.geometry}
        material={materials["Main_Dispersed Glass"]}
        scale={0.165}
      >
        <MeshTransmissionMaterial {...config} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cd_cover_2.geometry}
        material={materials.grass_dark}
        position={[0, 0.055, 0]}
        scale={0.912}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cd_cover_1.geometry}
        material={materials.grass_light}
        position={[0, 0.035, 0]}
        scale={0.893}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cd_cover_backup.geometry}
        material={nodes.cd_cover_backup.material}
        position={[0, 0.038, 0]}
        scale={0.912}
      />
      <group
        position={[0.162, 0.07, -0.664]}
        rotation={[-2.353, 1.231, 1.907]}
        scale={0.044}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane031.geometry}
          material={materials.floer_org}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane031_1.geometry}
          material={materials.flower_brown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane031_2.geometry}
          material={materials.plant_light}
        />
      </group>
      <group
        position={[0.021, 0.123, 0.548]}
        rotation={[-2.81, 0.72, 2.578]}
        scale={[0.033, 0.028, 0.03]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane032.geometry}
          material={materials.floer_org}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane032_1.geometry}
          material={materials.flower_brown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane032_2.geometry}
          material={materials.plant_light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plant_01.geometry}
        material={materials.plant_light}
        position={[-0.499, 0.112, 0.32]}
        rotation={[Math.PI / 2, 0.325, -1.518]}
        scale={[0.014, 0.011, 0.025]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plant_02.geometry}
        material={materials.plant_dark}
        position={[-0.61, 0.144, 0.056]}
        rotation={[1.563, 0.148, -1.518]}
        scale={[0.014, 0.011, 0.041]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plant_03.geometry}
        material={materials.plant_dark}
        position={[-0.022, 0.108, 0.623]}
        rotation={[Math.PI / 2, 0, -1.859]}
        scale={[0.014, 0.011, 0.018]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plant_04.geometry}
        material={materials.plant_light}
        position={[0.096, 0.098, -0.601]}
        rotation={[1.563, 0.148, -1.518]}
        scale={[0.014, 0.011, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plant_05.geometry}
        material={materials.plant_light}
        position={[0.552, 0.083, -0.056]}
        rotation={[Math.PI / 2, 0, -2.16]}
        scale={[0.014, 0.011, 0.041]}
      />
    </group>
  );
}

useGLTF.preload("glb/green.glb");
