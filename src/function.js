export const curry = (fn, ...args) => (
    args.length === fn.length ?
    fn(...args) :
    curry.bind(null, fn, ...args)
  )
export const pipe = (fn,...fns) => (...args) => fns.reduce( (acc, f) => f(acc), fn(...args));

export const K = x => _ => x

export const Id = x => x