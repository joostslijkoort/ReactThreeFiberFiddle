import { Canvas as ThreeCanvas } from '@react-three/fiber'
import { Environment, FaceControls, FaceLandmarker } from '@react-three/drei'

interface Props {
  children: JSX.Element
}

const Canvas = (props: Props) => {
  return (
    <ThreeCanvas>
      <Environment
        preset='city'
        background={true}
        blur={0.15}
      />
      {props.children}
    </ThreeCanvas>
  )
}

export default Canvas;