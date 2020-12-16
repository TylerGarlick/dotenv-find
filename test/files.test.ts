import { resolve } from 'path'
import find from '../src'

describe(`Infrastructure > Files`, () => {
  describe(`find()`, () => {
    it(`should find all the .env files within a certain directory`, async () => {
      const basePath = resolve(__dirname, 'fixtures')
      const results = await find(basePath)
      expect(results.length).toBeGreaterThanOrEqual(8)
    })
  })
})
