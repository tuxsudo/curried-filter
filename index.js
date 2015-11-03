import curry from 'instant-curry';

let filter = curry( (fn, items)=>items.filter(fn) );


export { filter as default };
