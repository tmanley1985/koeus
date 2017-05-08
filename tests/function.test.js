import {curry, pipe, K, Id} from '../src/function'

describe('curry', () => {
    it('should auto curry a function', () => {
        const add = (x, y, z) => x + y + z
        const curriedAdd = curry(add)
        const a = curriedAdd(1)(1,3)
        const b = curriedAdd(1)(1)(3)
        const c = curriedAdd(1,1,3)

        expect(a).toEqual(5)
        expect(a).toEqual(5)
        expect(a).toEqual(5)
    })
})

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

describe('K', () => {
    it('accepts two arguments, throws the second away', () => {
        const one = K(1)(2)
        expect(one).toEqual(1)
    })
})

describe('Id', () => {
    it('returns the argument you give it', () => {
        const one = Id(1)
        expect(one).toEqual(1)
    })
})

