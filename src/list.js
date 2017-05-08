import { curry } from './function'

export const partition = curry((predicate, arr) => [arr.filter(predicate), arr.filter(x => !predicate(x))])

export const map = curry((fn, collection) => collection.map(fn))

export const flatten = arr => arr.reduce((acc, val) => acc.concat(val), [])

export const deepFlatten = arr => arr.reduce((acc, val) => acc.concat(!Array.isArray(val) ? val : deepFlatten(val)), [])