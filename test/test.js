import test from 'tape';
import filter from '../index';


test('filters lazily (curried)', t=> {

	t.plan( 2 );

	t.deepEqual([6,7], filter( n=>n>5, [2,3,5,6,7]) );
	t.deepEqual([10,15,20], filter( n=>n>5, [5, 10, 15, 20]) );

});



test('filters lazily (curried)', t=> {
	t.plan(2);

	let gt5 = filter(n=>n>5);

	t.deepEqual([6,7], gt5([2,3,5,6,7]) );
	t.deepEqual([10,15,20], gt5([5, 10, 15, 20]) );

});
