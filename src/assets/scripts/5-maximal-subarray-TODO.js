function getMaxSubSum(arr) {
    let a = Math.ceil(Math.log2(arr.length));
    console.log(a);
}

// alert(getMaxSubSum([-1, 2, 3, -9]) === 5);
// alert(getMaxSubSum([2, -1, 2, 3, -9]) === 6);
// alert(getMaxSubSum([-1, 2, 3, -9, 11]) === 11);
// alert(getMaxSubSum([-2, -1, 1, 2]) === 3);
// alert(getMaxSubSum([100, -9, 2, -3, 5]) === 100);
// alert(getMaxSubSum([1, 2, 3]) === 6);

getMaxSubSum([-1, 2, 3, -9]);
getMaxSubSum([2, -1, 2, 3, -9]);
getMaxSubSum([-1, 2, 3, -9, 11]);
getMaxSubSum([-2, -1, 1, 2]);
getMaxSubSum([100, -9, 2, -3, 5]);
getMaxSubSum([1, 2, 3]);
getMaxSubSum([-1, -2, -3]);