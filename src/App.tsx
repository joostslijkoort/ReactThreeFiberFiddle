import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import './App.css'

function App() {
  return (
    <>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <OrbitControls />
        <mesh scale={1}>
          <capsuleGeometry args={[1, 1, 32, 32]} />
          <meshStandardMaterial color={'hotpink'} />
        </mesh>
      </Canvas>
    </>
  )
}

export default App
