import {pipe} from '../src/compose'

describe('', () => {
  test('it will pipe data through a series of functions', () => {
  	const pipeline = pipe(x => x + 1, x => x + 2)

  	const result = pipeline(1)

  	const expected = 4
    expect(result).toBe(expected)
  });

  test('it will create a composed function that can be used', () => {
    const pipeline = pipe(x => x + 1, x => x + 2)

    const result = [1,2,3].map(pipeline)
    const expected = [4,5,6]
    expect(result).toEqual(expect.arrayContaining(expected));
  });

});