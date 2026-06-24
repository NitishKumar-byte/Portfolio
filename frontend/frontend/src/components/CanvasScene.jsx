import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";

function Cube() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#a855f7" />
      </mesh>
    </Float>
  );
}

function CanvasScene() {
  return (
    <div className="canvas-wrapper">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={2} />
        <pointLight position={[5, 5, 5]} />

        <Cube />

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

export default CanvasScene;