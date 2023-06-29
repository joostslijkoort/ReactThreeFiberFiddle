import { PivotControls } from '@react-three/drei'

const Pill = () => {
  return (
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
  )}

  export default Pill;