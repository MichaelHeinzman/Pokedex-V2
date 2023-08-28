import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useNavigate } from "react-router-dom";

const PokeballScene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.85} />
      <pointLight position={[0, 0, 6]} intensity={0.2} castShadow />

      <CameraControls />

      <Pokeball />
    </Canvas>
  );
};

const CameraControls = () => {
  return <OrbitControls target={[0, 0, 0]} />;
};

const Pokeball = () => {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const pokeballSize = 2;
  const pokeballSegments = 12;

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {}, 2000);
    navigate("/pokedex");
  };

  const handleHover = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
    setHovered(!hovered);
  };

  return (
    <group name="Pokeball">
      {/* Upper side */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry
          args={[
            pokeballSize,
            pokeballSegments,
            pokeballSegments,
            0,
            Math.PI * 2,
            0,
            Math.PI / 2,
          ]}
        />
        <meshLambertMaterial color="aqua" side={THREE.DoubleSide} />
      </mesh>

      {/* Lower side */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry
          args={[
            pokeballSize,
            pokeballSegments,
            pokeballSegments,
            0,
            Math.PI * 2,
            (Math.PI / 2) * 1.03,
            Math.PI / 2,
          ]}
        />
        <meshLambertMaterial color="white" side={THREE.DoubleSide} />
      </mesh>

      {/* Inner side */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry
          args={[pokeballSize * 0.95, pokeballSegments, pokeballSegments]}
        />
        <meshLambertMaterial color="black" />
      </mesh>

      {/* Opening */}
      <group
        position={[0, 0, pokeballSize * 0.9]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <mesh>
          <cylinderGeometry args={[0.3, 0.3, 0.4, pokeballSegments]} />
          <meshLambertMaterial color="black" />
        </mesh>

        <mesh position={[0, 0.04, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 0.4, pokeballSegments]} />
          <meshLambertMaterial color="white" />
        </mesh>

        <mesh
          position={[0, 0.05, 0]}
          onClick={handleClick}
          onPointerOver={handleHover}
          onPointerOut={handleHover}
        >
          <cylinderGeometry args={[0.2, 0.2, 0.4, pokeballSegments]} />
          <meshLambertMaterial
            color={clicked ? "#42f56f" : hovered ? "#f5f242" : "white"}
          />
        </mesh>
      </group>
    </group>
  );
};

export default PokeballScene;
