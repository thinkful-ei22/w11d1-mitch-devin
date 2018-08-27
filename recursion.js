/* recurions.js
 * Created: 8/27/2018
 * Authors: Devin Hero, Mitch Gianoni
 */

function logProblem(name){
  console.log('========================');
  console.log('Begin', name);
}

// //Initial calls
let res;

// logProblem('Counting Sheep');
// sheep(5);

// logProblem('Array Doubles');
// const array = [2, 4, 5];
// res = arrayDouble(array);
// console.log(res);

// logProblem('Reverse String');
// res = reverseString('hello squirrels');
// console.log(res);

// logProblem('nth Number');
// res = nthNumber(9);
// console.log(res);

//res = stringSplitter('Mr. Stark I don\'t feel so good', '.');
//console.log(res);

//res = fibonacci(7);
//console.log(res);

//1. Counting sheep

function sheep(num){
  if(num === 0)
    return 0;

  console.log(`${num} - Another sheep jump over the fence`);
  sheep(num - 1);
  return 0;
}



//2. Array Double

function arrayDouble(arr){
  if(arr.length === 0){
    return [];
  }

  const lastElem = arr.pop(arr.length-1) * 2;
  return [...arrayDouble(arr), lastElem];
}



//3. Reverse String
function reverseString(string){
  if(string.length === 0){
    return '';
  }

  return reverseString(string.slice(1)) + string[0];
}



//4. nth Triangle Number
function nthNumber(n){
  if(n === 0){
    return 0;
  }

  return nthNumber(n - 1) + n;
}



//5. String Splitter
function stringSplitter(string, separator) {
  if(string.length === 1 ) {
    return '';
  }
  if(string.length === 2) {
    return 'weh';
  }

  if(string[1] === separator){
    return [string[0], ...stringSplitter(string.slice(2))];
  } else{
    return [string[0] + stringSplitter(string.slice(1))];
  }
  
}



//6. Binary Representation




//7. Factorial




//8. Fibonacci
function fibonacci(n) {
  if(n < 2) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}



//9. Anagrams




//10. Animal Hierarchy




//11. Organizational Chart


