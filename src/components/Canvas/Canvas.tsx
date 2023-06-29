import { Canvas as ThreeCanvas } from '@react-three/fiber'
import { Environment, OrbitControls, Sky } from '@react-three/drei'

interface Props {
  children: JSX.Element
}

const Canvas = (props: Props) => {
  return (
    <ThreeCanvas shadows camera={{ position: [0, 0, 4.5], fov: 100 }}>
      <directionalLight position={[10, 10, 5]} />
      <Environment
        preset='city'
        background={false}
      />
      <Sky distance={4500} sunPosition={[0, 1, 0]} inclination={1} azimuth={0.5} />
      <OrbitControls makeDefault />
      {props.children}
    </ThreeCanvas>
  )
}

export default Canvas;