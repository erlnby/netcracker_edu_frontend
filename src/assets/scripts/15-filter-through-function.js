let inBetween = (a, b) => x => a <= x && x <= b;

let inArray = arr => x => arr.includes(x);


let arr = [1, 2, 3, 4, 5, 6, 7];

alert(arr.filter(inBetween(3, 6))); // 3,4,5,6

alert(arr.filter(inArray([1, 2, 10]))); // 1,2