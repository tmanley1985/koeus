import {transMap, transFilter} from '../src/transduce'

describe('transMap', () => {
  test('it reduces map operations over an array', () => {
    const reducingFunction = transMap(x => x + 1)

    const ten = [5,5].reduce(reducingFunction, [])

    const expected = [6,6]
    expect(ten).toEqual(expect.arrayContaining(expected));
  });

});

describe('transFilter', () => {
  test('it filters items from an array', () => {
  	const reducingFunction = transFilter(x => x % 2 === 0)

  	const result = [5,2,10].reduce(reducingFunction, [])

  	const expected = [2,10]
    expect(result).toEqual(expect.arrayContaining(expected));
  });

});