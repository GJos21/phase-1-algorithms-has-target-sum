function hasTargetSum(list, target) {
  const len = list.length;
  for (let index1 = 0; index1 < len; index1++) {
    for (let index2 = 0; index2 < len; index2++) {
      if (index1 != index2 && (list[index1] + list[index2]) === target) {
        return true;
      }
    }
  }
  return false;
}
/* 
  O(n²)
*/

/* 
  iterate through the list
  set index1
  iterate through the list
  set index 2
  if index1 != index2 and list[index1] + list[index2] = target
      return true
*/

/*
  use a loop to get a number, then another loop to get another number, add the numbers and if they equal to the target, return true  
  if both loops complete, return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
