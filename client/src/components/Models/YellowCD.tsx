/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
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
    Cube017: THREE.Mesh;
    Cube017_1: THREE.Mesh;
    Cube017_2: THREE.Mesh;
    Cube019: THREE.Mesh;
    Cube019_1: THREE.Mesh;
    Cube019_2: THREE.Mesh;
    Plant_01001: THREE.Mesh;
    Plant_01002: THREE.Mesh;
    Plant_01003: THREE.Mesh;
    Plant_01004: THREE.Mesh;
    Plant_01005: THREE.Mesh;
    Plant_01006: THREE.Mesh;
  };
  materials: {
    ["Main_Dispersed Glass"]: THREE.MeshStandardMaterial;
    Main_Hologram: THREE.MeshStandardMaterial;
    yellow_grass_01: THREE.MeshStandardMaterial;
    yellow_grass_02: THREE.MeshStandardMaterial;
    flower_brown: THREE.MeshStandardMaterial;
    balloon_yellow: THREE.MeshStandardMaterial;
    balloon_orange: THREE.MeshStandardMaterial;
    ["grass_yellow.003"]: THREE.MeshStandardMaterial;
    ["grrass_yellow.002"]: THREE.MeshStandardMaterial;
  };
};
// @ts-ignore
export function YellowCD(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("glb/yellow.glb") as GLTFResult;

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
        material={materials.yellow_grass_01}
        position={[0, 0.055, 0]}
        scale={0.912}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cd_cover_1.geometry}
        material={materials.yellow_grass_02}
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
        position={[0.173, 0.302, 0.165]}
        rotation={[0.132, 0, 0]}
        scale={0.057}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube017.geometry}
          material={materials.flower_brown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube017_1.geometry}
          material={materials.balloon_yellow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube017_2.geometry}
          material={materials.balloon_orange}
        />
      </group>
      <group
        position={[-0.25, 0.352, -0.263]}
        rotation={[-0.169, -0.548, 0]}
        scale={0.028}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019.geometry}
          material={materials.flower_brown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_1.geometry}
          material={materials.balloon_yellow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_2.geometry}
          material={materials.balloon_orange}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plant_01001.geometry}
        material={materials["grass_yellow.003"]}
        position={[0.316, 0.07, 0.392]}
        rotation={[1.523, -0.244, -2.315]}
        scale={[0.01, 0.007, 0.008]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plant_01002.geometry}
        material={materials["grrass_yellow.002"]}
        position={[0.427, 0.051, 0.282]}
        rotation={[1.408, 0.061, -1.729]}
        scale={[0.007, 0.006, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plant_01003.geometry}
        material={materials["grass_yellow.003"]}
        position={[-0.131, 0.07, -0.547]}
        rotation={[1.766, -0.155, -1.212]}
        scale={[0.006, 0.005, 0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plant_01004.geometry}
        material={materials["grrass_yellow.002"]}
        position={[0.055, 0.051, -0.525]}
        rotation={[1.743, -0.018, 1.667]}
        scale={[0.008, 0.007, 0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plant_01005.geometry}
        material={materials["grass_yellow.003"]}
        position={[-0.231, 0.07, 0.362]}
        rotation={[1.706, -0.209, -1.54]}
        scale={[0.006, 0.005, 0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plant_01006.geometry}
        material={materials["grass_yellow.003"]}
        position={[-0.418, 0.07, -0.063]}
        rotation={[1.766, -0.155, -1.212]}
        scale={[0.006, 0.005, 0.005]}
      />
    </group>
  );
}

useGLTF.preload("glb/yellow.glb");
