# Koeus
A small functional library for javascript

#### I wrote the greatest README in the world, this is just a tribute.

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

```js
import { map } from 'koeus'

const xs = map(x => x + 1, [1,2,3]) // [2,3,4]
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
    const four = addThree(1)
```

#### K
Accepts two arguments and ignores the second you give it.
The name comes from the K combinator in combinatory logic.
```js
    import { K } from 'koeus'

    const four = K(4,2) // 4
```

### Id
Unary function that returns the argument you give it.
```js
    import { Id } from 'koeus'

    const x = Id(1) // 1
```
## Logic


### combineAnd
Folds a list of booleans using logical conjunction (AND)
```js
    import { combineAnd } from 'koeus'

    const t = combineAnd([true,true,true]) // true
    const f = combineAnd([true,true,false]) // true
```

### combineAnd
Folds a list of booleans using logical disjunction (OR)
```js
    import { combineOr } from 'koeus'

    const t1 = combineAnd([true,true,true]) // true
    const t2 = combineAnd([true,false,true]) // true
    const f = combineAnd([true,true,true]) // true
```

### combinePreds
Takes a list of predicates and returns a predicate that's the conjunction of all of them.
```js
    import { combinePreds } from 'koeus'

    const preds = combinePreds(x => x % 2 === 0, x => x < 10)
    const result = [1,2,14,4].filter(preds) // [2,4]
```
## Lists


### map
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


## Objects

## Transducers

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## License

This project is licensed under the MIT License