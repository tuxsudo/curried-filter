# curried-filter

A curried application of [].filter.

```
import filter from 'curried-filter';

Promise.resolve([0,1,2])
	.then( filter(a=>a<2) );
```


## API

### `filter(fn, items)`

`fn` is any function compatible with [`[].filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).

`items` is an array.

Returns a new array of filtered items.


### `filter(fn)`

`fn` is any function compatible with [`[].filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).

Returns a new function which expects an array. When the returned function is executed with an array parameter, it returns a filtered array.

```
var gt5 = filter(n=>n>5);

gt5([2,3,5,6,7]); // [6, 7]
gt5([5, 10, 15, 20]); // [10, 15, 20]
```
