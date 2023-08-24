import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  BakeShadows,
  OrbitControls,
} from "@react-three/drei";
import Sphere from "./Sphere";

export const Field = ({
  env = "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/evening_road_01_2k.hdr",
}) => (
  <Canvas shadows camera={{ position: [0, 0, 12], fov: 35 }}>
    <hemisphereLight intensity={0.5} color="white" groundColor="black" />
    <Environment files={env} ground={{ height: 5, radius: 40, scale: 20 }} />
    <Sphere
      color="lightpink"
      amount={20}
      emissive="orange"
      glow="#ff9f50"
      size={0.25}
      position={[-1, 0.25, 1]}
    />
    <ContactShadows
      renderOrder={2}
      color="black"
      resolution={1024}
      frames={1}
      scale={10}
      blur={1.5}
      opacity={0.65}
      far={0.5}
    />
    <BakeShadows />
    <OrbitControls
      autoRotateSpeed={0.85}
      zoomSpeed={0.75}
      minPolarAngle={Math.PI / 2.5}
      maxPolarAngle={Math.PI / 2.55}
    />
  </Canvas>
);
