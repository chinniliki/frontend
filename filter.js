var arr1 = [1996, 2000, 1997, 1994];
var newArr = arr1.filter(function(ele) {
    return (ele % 4 === 0 && ele % 100 !== 0) || (ele % 400 === 0); // Corrected logic
});
console.log('Original Array:', arr1);
console.log('Leap years:', newArr);
