import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export function Teapot({ color }: { color: string }) {
  const { scene } = useGLTF("/models/teapot.gltf");

  scene.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material = new THREE.MeshStandardMaterial({
        color,
        roughness: 0.2,
      });
    }
  });

  return <primitive object={scene} scale={0.1} />;
}
