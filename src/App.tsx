import { Canvas } from "@react-three/fiber";
import { Stats, OrbitControls } from '@react-three/drei'
export default function App() {
return (
    <Canvas className="bg-black w-full h-full">
      <OrbitControls>

      </OrbitControls>
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshPhongMaterial />
        </mesh>
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} color="red" />
    </Canvas>
);
}