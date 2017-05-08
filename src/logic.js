export const combineAnd = bools => bools.reduce((identity, bool) => identity && bool, true)

export const combineOr = bools => bools.reduce((identity, bool) => identity || bool, false)

export const combinePreds = (...predicates) => x => predicates.reduce((identity, predicate) => identity && predicate(x), true)

