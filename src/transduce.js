// See how we redefine map?  It takes a transformation function and
//returns a reducing function to pass to the reducer.
export const transMap = trans => (result, input) => {
  result.push(trans(input));
  return result;
}

// Filter receives a predicate function, and returns a reducing function.
export const transFilter = pred => (result, input) => {
	if (pred(input)) {
		result.push(input);
	}
  return result;
}