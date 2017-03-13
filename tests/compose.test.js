import {pipe, combinePreds} from '../src/compose'

describe('pipe', () => {
  test('it will pipe data through a series of functions', () => {
  	const pipeline = pipe(x => x + 1, x => x + 2)

  	const result = pipeline(1)

  	const expected = 4
    expect(result).toBe(expected)
  })

  test('it will create a composed function that can be used', () => {
    const pipeline = pipe(x => x + 1, x => x + 2)

    const result = [1,2,3].map(pipeline)
    const expected = [4,5,6]
    expect(result).toEqual(expect.arrayContaining(expected))
  })

})

describe('combinePreds', () => {
  test('it can combine predicates', () => {
    const preds = combinePreds(x => x % 2 === 0, x => x < 10)

    const result = [1,2,14,4].filter(preds)

    const expected = [2,4]

    expect(result).toEqual(expect.arrayContaining(expected))
  })
})