import { PivotControls } from '@react-three/drei'
import { useEffect, useMemo, useState } from 'react';
import { Quaternion, Vector3 } from 'three';
import { formatCoordinates } from '../../utils';

interface Props {
  onPivot: (rotation: string, position: string) => void
}

const Pill = ({ onPivot }: Props) => {
  const [rotation, setRotation] = useState(new Quaternion());
  const [position, setPosition] = useState(new Vector3());
  
  const rotationString = useMemo(() => formatCoordinates(rotation), [rotation]);
  const positionString = useMemo(() => formatCoordinates(position), [position]);

  useEffect(() => {
    onPivot(`rotation: ${rotationString}`, `position: ${positionString}`);
  }, [rotationString, positionString])

  return (
    <group position={[0,-1,0]}>
      <PivotControls
        scale={2}
        rotation={[0, -1, 0]}
        disableSliders={true}
        anchor={[0, 0.35, 0]}
        depthTest={false}
        onDrag={(_l, _dl, w, _dw) => {
          const position = new Vector3()
          const rotation = new Quaternion()
          w.decompose(position, rotation, new Vector3())
          setRotation(rotation)
          setPosition(position)
        }}
        >
          <mesh>
            <capsuleGeometry args={[1, 1, 32, 32]} />
            <meshStandardMaterial color="black" roughness={0} metalness={0.8} />
          </mesh>
      </PivotControls>
    </group>
  )}

  export default Pill;