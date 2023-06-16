function findMax(arr){
    let index = 0;
    let max = 0;
    function newMax(){
    if(index === arr.length){
      return max
    } else if(arr[index] > max) { 
      max = arr[index]
      index++
      return max
      }
      return newMax();
    }
    
    
    
      // This function returns the largest number in a given array.
  }
  
  function factorial(){
      // This function returns the factorial of a given number.
  }
  
  function fibonacci(){
      // This function returns the Nth number in the fibonacci sequence.
      // https://en.wikipedia.org/wiki/Fibonacci_number
      // For this function, the first two fibonacci numbers are 1 and 1
  }
  
  function coinFlips(num){
    if (num === 1) {
      return ["H", "T"]
    }
      const lastOne = coinFlips(n - 1)
      const results = [];
    
    for (let i =0; i < lastOne.length; i++ ) {
      results.push(lastOne[i] + "H")
      results.push(lastOne[i] + "T")
    }
    
    return results;
  }
  
  function letterCombinations(letters){
    const combo = [];
    
    function getCombos(space, restOfLetters) {
      if (remainingLetters.length === 0) {
        combos.push(space);
        return;
      }
      
      for (let i = 0; i < restOfLetetrs.length; i++) {
        const 
          }
  }
      // This function returns an array of all combinations of the given letters
      // Input type: Array of single characters
      // For example, letterCombinations(["a","b","c"]) would return the following:
      // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
  }