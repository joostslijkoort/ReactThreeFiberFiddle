import { Quaternion, Vector3 } from 'three'

export const formatCoordinates = (coordinates: Quaternion | Vector3): string => 
  `x: ${coordinates.x.toFixed(2)}, y: ${coordinates.y.toFixed(2)}, z: ${coordinates.z.toFixed(2)}`