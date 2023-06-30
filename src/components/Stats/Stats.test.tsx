import * as renderer from 'react-test-renderer'
import { test, expect } from 'vitest'
import Stats from './Stats';

function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON()
  expect(result).toBeDefined()
  expect(result).not.toBeInstanceOf(Array)
  return result as renderer.ReactTestRendererJSON
}

test('basic rencering of Stats', () => {
  const component = renderer.create(
    <Stats rotation="rotation" position="position" />
  )
  let tree = toJson(component)
  expect(tree).toMatchSnapshot()
});