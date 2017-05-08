import {combinePreds, combineAnd, combineOr} from '../src/logic'

describe('combinePreds', () => {
  test('it can combine predicates', () => {
    const preds = combinePreds(x => x % 2 === 0, x => x < 10)

    const result = [1,2,14,4].filter(preds)

    const expected = [2,4]

    expect(result).toEqual(expect.arrayContaining(expected))
  })
})

describe('combineAnd', () => {
    it('should combine an array of booleans using AND and true as the first element', () => {
        const shouldBeFalse = combineAnd([true, true, false])
        const shouldBeTrue = combineAnd([true, true, true])
        expect(shouldBeFalse).toEqual(false)
        expect(shouldBeTrue).toEqual(true)
    })
})

describe('combineOr', () => {
    it('should combine an array of booleans using AND and true as the first element', () => {
        const shouldBeTrue = combineOr([true, true, false])
        const shouldBeTrueAlso = combineOr([true, true, true])
        expect(shouldBeTrueAlso).toEqual(true)
        expect(shouldBeTrue).toEqual(true)
    })
})