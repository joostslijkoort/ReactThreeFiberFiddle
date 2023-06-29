import { Canvas as ThreeCanvas, } from '@react-three/fiber'

interface Props {
  children: JSX.Element
}

const Canvas = (props: Props) => {
  return (
    <ThreeCanvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      {props.children}
    </ThreeCanvas>
  )
}

export default Canvas;