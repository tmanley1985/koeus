import {entries} from '../src/object'

describe('entries', () => {
  it('should return an array of object entries', () => {
      const obj = { id: 2, name: 'Will'}

    expect(entries(obj)).toEqual([2, 'Will']);
  })
  it('should return an array of elements when passed an array', () => {
      const arr = [2,3,4]

    expect(entries(arr)).toEqual([2, 3, 4]);
  })
})
