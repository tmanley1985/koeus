# Koeus
A small functional library for javascript

## About
The K Combinator + Coeus (Greek Titan of Intellect) === Koeus.
I found an alternative spelling of Coeus, spelled KOIOS and facepalmed.
This is a small utility library that has little to no dependencies. If
you need something greater, I suggest you reach for [Ramda](http://ramdajs.com/) or if you've jumped
into the deep end of the pool you could look at [Folktale](http://folktalejs.org/).

If you're still unsatisfied, you could look at [Elm](http://elm-lang.org/) or for the purists, [Purescript](http://www.purescript.org/).


## TOC
* [Installation](#installation)
* [Versioning](#versioning)
* [License](#license)
* [Functions](#functions)
* [Logic](#logic)
* [Lists](#lists)
* [Objects](#objects)
* [Transducers](#transducers)

## Installation

First:

```
npm install koeus
```

Example of usage:

Note: All non-unary functions that do not have a variable number
of arguments (such as pipe) are auto curried, so that you can apply some or all arguments to it.

```js
import { map } from 'koeus'

const xs = map(x => x + 1, [1,2,3]) // [2,3,4]

// or, because map is auto curried

const addOne = x => x + 1
const mapAddOne(addOne)
const ys = mapAddOne([1,2,3]) // [2,3,4]
```

## Functions

#### curry
Auto curries a function so that some or all of the arguments can be supplied.
```js
    import { curry } from 'koeus'

    const add = (x,y) => x + y
    const curriedAdd = curry(add)

    const someArguments = add(1)(2)
    const allArguments = add(1,2)
```

#### pipe
Composes unary functions from left to right.
```js
    import { pipe, curry } from 'koeus'

    const pipeline = pipe(x => x + 1, x => x + 2) // x => x + 3

    const four = pipeline(1) // 4

    // If you have a function with multiple arguments that you want to pipe
    // you can curry the function and partially apply it to make it an unary function.

    //ex:
    const add  = curry((x,y) => x + y)
    const addOne = add(1)
    const addTwo = add(2)
    const addThree = pipe(addOne, addTwo)
    const four = addThree(1) // 4
```

#### K
Accepts two arguments and ignores the second you give it.
The name comes from the K combinator in combinatory logic.
```js
    import { K } from 'koeus'

    const four = K(4,2) // 4
```

#### Id
Unary function that returns the argument you give it.
```js
    import { Id } from 'koeus'

    const x = Id(1) // 1
```
## Logic


#### combineAnd
Folds a list of booleans using logical conjunction (AND)
```js
    import { combineAnd } from 'koeus'

    const t = combineAnd([true,true,true]) // true
    const f = combineAnd([true,true,false]) // false
```

#### combineOr
Folds a list of booleans using logical disjunction (OR)
```js
    import { combineOr } from 'koeus'

    const t1 = combineOr([true,true,true]) // true
    const t2 = combineAnd([true,false,true]) // true
    const f = combineAnd([false,false,false]) // true
```

#### combinePreds
Takes a list of predicates and returns a predicate that's the conjunction of all of them.
```js
    import { combinePreds } from 'koeus'

    const preds = combinePreds(x => x % 2 === 0, x => x < 10)
    const result = [1,2,14,4].filter(preds) // [2,4]
```
## Lists


#### map
Accepts a function, then a functor (in this case a list) and runs the function over
the list.
```js
    import { map } from 'koeus'

    const Box = x => ({
        map: f => Box(f(x))
    })

    const addOne = map(x => x + 1) // collection => collection.map(x => x + 1)

    const mapList = addOne([1,2,3]) // [2,3,4]
    const mapBox = addOne(Box(1)) // Box holding the value 2

```

#### flatten
Flattens a list one level.

```js
    import { flatten } from 'koeus'

    const flattened = flatten([[2],[3],[4]]) // [2,3,4]
```

#### deepFlatten
Flattens a list recursively n-depth levels.

```js
    import { deepFlatten } from 'koeus'

    const flattened = deepFlatten([[2, [3]],[3,[3,4]],[4]]) // [2,3,3,3,4,4]
```

#### partition
Take a predicate, then a list and returns an array of two arrays, the first of which
passes the predicate passed in, the second which does not.

```js
    import { partition } from 'koeus'

    const arr = [1,2,3,4]
    const isEven = x => x % 2 === 0
    const partitioned = partition(isEven)(arr) // [[2,4],[1,3]]
```
## Objects

#### entries
Takes an object, then returns an array containing the values from it's keys, one level deep.
```js
    import { entries } from 'koeus'

    const obj = { id: 2, name: 'Will'}
    const vals = entries(obj) // [2, Will]
```
## Transducers

#### transMap
Takes a transformation function, then returns a reducing function to pass to a reduce function on a list.
```js
    import { transMap } from 'koeus'

    const reducingFunction = transMap(x => x + 1)

    const newArray = [5,5].reduce(reducingFunction, []) // [6,6]
```

#### transFilter
Takes a predicate function, then returns a reducing function to pass to a reduce function on a list.
```js
    import { transMap } from 'koeus'

    const reducingFunction = transFilter(x => x % 2 === 0)
    const result = [5,2,10].reduce(reducingFunction, []) // [2,10]
```
## Versioning

We use [SemVer](http://semver.org/) for versioning.

## License

This project is licensed under the MIT License
