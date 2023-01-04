const arr1 = [1 ,2 , [3] ,[4 ,5] , 6 ,[]] ;

const flattened = arr1.flatMap(num => num) ;

console.log (flattened) ;


const arr2 = [[[]] ,1 ,3 ,5, 5 ,[[2 , 3] , 1 ,2 ] ,1] ;

const flatteneds = arr2.flatMap (num => num) ;

console.log (flatteneds) ;