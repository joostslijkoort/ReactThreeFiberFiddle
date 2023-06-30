import { useState } from 'react';
import Canvas from '../../components/Canvas'
import Pill from '../../components/Pill'
import Stats from '../../components/Stats'

const Dashboard = () => {
  const [rotation, setRotation] = useState<string>('');
  const [position, setPosition] = useState<string>('');

  return (
    <>
      <Canvas>
        <Pill onPivot={(a: string, b: string) => { setRotation(a); setPosition(b) } } />
      </Canvas>
      <Stats rotation={rotation} position={position} />
    </>
  ) 
}

export default Dashboard;