import { map, partition, flatten, deepFlatten} from '../src/list'
import { entries } from '../src/object'

describe('map', () => {
    it('should map a function over an array', () => {
        const arr = [1,2,3,4]
        const plusOne = x => x + 1
        const mapped = map(plusOne)(arr)
        expect(mapped).toEqual([2,3,4,5])
    })
    it('should map a function over an object converted to an array', () => {
        const arr = entries({id: 1, num: 2,num2: 3,num3: 4})
        const plusOne = x => x + 1
        const mapped = map(plusOne,arr)
        expect(mapped).toEqual([2,3,4,5])
    })
})

describe('flatten', () => {
    it('flatten an array one level', () => {
        const arr = [[1,2],[3,4]]
        const flattened = flatten(arr)
        expect(flattened).toEqual([1,2,3,4])
    })
})

describe('deepFlatten', () => {
    it('flatten an array of arrays all the way down', () => {
        const arr = [[[1,2]],[[3,4]]]
        const flattened = deepFlatten(arr)
        expect(flattened).toEqual([1,2,3,4])
    })
})


describe('partition', () => {
    it('should make an array containing two arrays using a predicate', () => {
        const arr = [1,2,3,4]
        const isEven = x => x % 2 === 0
        const partitioned = partition(isEven)(arr)
        expect(partitioned.length).toEqual(2)
        expect(partitioned[0].length).toEqual(2)
        expect(partitioned[1].length).toEqual(2)
    })

    it('should have first array being the result of predicate', () => {
        const arr = [1,2,3,4]
        const isEven = x => x % 2 === 0
        const partitioned = partition(isEven)(arr)
        expect(partitioned[0]).toEqual([2,4])
        expect(partitioned[1]).toEqual([1,3])
    })
})