'use strict';

function numBuckets(arr, max, min) {
  let bucketCount = max - min + 1;
  let result = new Array(bucketCount);
  
  let i = 0;
  for (i; i < arr.length; i++) {
    result[arr[i] - min] = arr[i];
  }
  console.log(result);
  let clean = [];
  result.map(item => {
    if (typeof item === 'number') clean.push(item);
  });
  return clean;
}

console.log(numBuckets([5, 6, 7, 3], 7, 3));