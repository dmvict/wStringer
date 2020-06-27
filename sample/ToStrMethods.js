if( typeof module !== 'undefined' )
require( 'wstringer' );

var _ = wTools;

console.log( 'toStrMethods : ', _.toStrMethods( ( function add(){} ), {} ) );
// log : 'toStrMethods : [ routine add ]'

console.log( 'toStr( onlyRoutines : 0 ) : ', _.toStr( ( function add(){} ), { onlyRoutines : 0 } ) );
// log : 'toStr( onlyRoutines : 0 ) : [ routine add ]'

console.log( 'toStr( onlyRoutines : 1 )', _.toStr( ( function add(){} ), { onlyRoutines : 1 } ) );
// log : 'toStr( onlyRoutines : 1 ) : [ routine add ]'

console.log( _.toStr( { a : 1, b : 2 } ) );
// log : '{ a : 1, b : 2 }'

console.log( _.toStr( { a : 1, b : 2 }, { wrap : 0 } ) );
// log : 'a : 1, b : 2'

console.log( _.toStr( { a : 1, b : 2, c : { subd : 'some test', sube : true, subf : { x : 1 } } }, { levels : 3 } ) );
// log :
// '{
//    a : 1,
//    b : 2,
//    c :
//    {
//      subd : 'some text',
//      sube : true,
//      subf : { x : 1 }
//    }
// }'
console.log( _.toStr( { a : 1, b : 2, c : { subd : 'some test', sube : true, subf : { x : 1 } } }, { levels : 3, dtab : '-' } ) );
// log :
// '{
//  -a : 1,
//  -b : 2,
//  -c :
//  -{
//  --subd : 'some text',
//  --sube : true,
//  --subf : { x : 1 }
//  -}
// }'
