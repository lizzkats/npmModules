List of functions:

## .forEach()
Iterates over elements of collection and invokes iteratee for each element. The iteratee is invoked with three arguments: (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.

## Examples of forEach uses

## .filter()
Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).

## Examples of filter uses


## .map()
Creates an array of values by running each element in collection thru iteratee. The iteratee is invoked with three arguments:
(value, index|key, collection).

## Examples of map uses

## .reduce()
Reduces collection to a value which is the accumulated result of running each element in collection thru iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not given, the first element of collection is used as the initial value. The iteratee is invoked with four arguments:
(accumulator, value, index|key, collection).

## Examples of reduce uses


## .flatten

Flattens array a single level deep.

## Examples of flatten uses

## .isArray

Checks if value is classified as an Array object.

## Examples of isArray uses

## Math.ceil

Computes number rounded up to precision.

## Examples of math.ceil uses

## Math.floor

Computes number rounded down to precision.

## Examples of math.floor uses

## .bind

Creates a function that invokes func with the this binding of thisArg and partials prepended to the arguments it receives.

The bind. placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder for partially applied arguments.

Note: Unlike native Function#bind, this method doesn't set the "length" property of bound functions.

## examples


## .mapKeys

The opposite of .mapValues; this method creates an object with the same values as object and keys generated by running each own enumerable string keyed property of object thru iteratee. The iteratee is invoked with three arguments: (value, key, object).


## examples

## .replace

Replaces matches for pattern in string with replacement.

## examples

## .truncate

Truncates string if it's longer than the given maximum string length. The last characters of the truncated string are replaced with the omission string which defaults to "...".

## examples 