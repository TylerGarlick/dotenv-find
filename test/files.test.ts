import { resolve } from 'path'
import find, { EXCLUDED_DIRECTORIES } from '../src'

describe(`Infrastructure > Files`, () => {
  describe(`find()`, () => {

    it(`should find all the .env files within a certain directory`, async () => {
      const basePath = resolve(__dirname, 'fixtures')
      const results = await find(basePath)
      for (let result of results) {
        expect(result.includes('.env')).toBeTruthy()
      }
    })

    it(`should exclude the EXCLUDED folder`, async () => {
      const basePath = resolve(__dirname, 'fixtures')
      const excludedDirectories = [...EXCLUDED_DIRECTORIES, 'EXCLUDED']
      const files = await find(basePath, excludedDirectories)
      for (let file of files) {
        expect(!excludedDirectories.some(dir => file.includes(dir))).toBeTruthy()
      }
    })
  })
})