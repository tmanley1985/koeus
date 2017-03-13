import * as k from '../src/index'

describe('combinePreds', () => {
  test('it can combine predicates', () => {
    const preds = k.combinePreds(x => x % 2 === 0, x => x < 10)

    const result = [1,2,14,4].filter(preds)

    const expected = [2,4]

    expect(result).toEqual(expect.arrayContaining(expected))
  })
})