import { Vector3, Quaternion } from 'three';
import { describe, expect, it } from 'vitest'
import { formatCoordinates } from './utils';

describe('formatCoordinates', () => {
  it('formats an empty Vector3 into a string', () => {
    const input = formatCoordinates(new Vector3())
    expect(input).toEqual("x: 0.00, y: 0.00, z: 0.00")
  });

  it('formats a Vector3 into a string', () => {
    const input = formatCoordinates(new Vector3(2,1,0))
    expect(input).toEqual("x: 2.00, y: 1.00, z: 0.00")
  });

  it('formats a Quaternion into a string', () => {
    const input = formatCoordinates(new Quaternion(0,1,2))
    expect(input).toEqual("x: 0.00, y: 1.00, z: 2.00")
  });
});