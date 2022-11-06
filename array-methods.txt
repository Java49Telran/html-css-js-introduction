let array = [10, -15, 2, 40, 80]
undefined
> array.push(1,2,3)  - added 1, 2, 3 at end of array                                                                 js-introduction> 
8 - returns length of array after adding new elements
> array
[ 10, -15, 2, 40, 80, 1, 2, 3 ]
array.push([10, 20, 30]) - added sub-array [10, 20, 30] at end of array
9
> array[8][1]
20
> array[8].map(function(e) {return e * 2})
[ 20, 40, 60 ]
> array[8].reduce(function(res, e){return res + e}, "")
'102030'

array.splice(3,0, 100, 200) - first argument (3) - index,
 second argument (0) - how many elements will be deleted
 beginning from third argument - list of being inserted elements
[] - returns array of being deleted elements
> array
[ 10, -15, 2, 100, 200, 40, 80, 1, 2, 3, [ 10, 20, 30 ] ]
> array.splice(3, 2, -100, -200, -300, -400)
[ 100, 200 ]
> array
[ 10, -15, 2, -100, -200, -300, -400, 40, 80, 1, 2, 3, [ 10, 20, 30 ] ]
> array.slice(3,7)
[ -100, -200, -300, -400 ]
> array
[ 10, -15, 2, -100, -200, -300, -400, 40, 80, 1, 2, 3, [ 10, 20, 30 ] ]
> let copy = array.slice()
undefined
> copy
[ 10, -15, 2, -100, -200, -300, -400, 40, 80, 1, 2, 3, [ 10, 20, 30 ] ]
> let falseCopy = array;
undefined
> falseCopy
> falseCopy[0] = "xaxa"
'xaxa'
> array[0]
> array[0]
'xaxa'