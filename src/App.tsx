import { Canvas } from '@react-three/fiber'
import { PivotControls } from '@react-three/drei'
import './App.css'

function App() {
  return (
    <>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <PivotControls
          scale={2}
          disableSliders={true}
          anchor={[0, 0.35, 0]}
          depthTest={false}
          >
            <mesh>
              <capsuleGeometry args={[1, 1, 32, 32]} />
              <meshStandardMaterial color={'hotpink'} />
            </mesh>
        </PivotControls>
      </Canvas>
    </>
  )
}

export default App
