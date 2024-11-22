import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["1"]: THREE.Mesh;
    ["2"]: THREE.Mesh;
    Plane028: THREE.Mesh;
    Plane028_1: THREE.Mesh;
    ["3"]: THREE.Mesh;
  };
  materials: {
    Main_Hologram: THREE.MeshStandardMaterial;
    ["Water lilies"]: THREE.MeshPhysicalMaterial;
    plant_dark: THREE.MeshStandardMaterial;
    plant_light: THREE.MeshStandardMaterial;
    ["Rock.024"]: THREE.MeshPhysicalMaterial;
  };
};

// @ts-ignore
export function BlueCD(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("glb/blue.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["1"].geometry}
        material={materials.Main_Hologram}
        position={[0, 0.006, 0]}
        scale={0.912}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["2"].geometry}
        material={materials["Water lilies"]}
        position={[0, 0.108, 0]}
        scale={0.893}
      />
      <group
        position={[-0.257, 0.152, -0.047]}
        rotation={[1.664, -0.091, -1.643]}
        scale={[0.008, 0.006, 0.023]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane028.geometry}
          material={materials.plant_dark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane028_1.geometry}
          material={materials.plant_light}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3"].geometry}
        material={materials["Rock.024"]}
        position={[0.636, 0.219, 0.371]}
        rotation={[-0.238, 0.717, -0.278]}
        scale={[0.047, 0.105, 0.106]}
      />
    </group>
  );
}

useGLTF.preload("glb/blue.glb");
