// Pipe is a monoid that starts with the first function that is passed in to the reduce function
export const pipe = (fn,...fns) => (...args) => fns.reduce( (acc, f) => f(acc), fn(...args))