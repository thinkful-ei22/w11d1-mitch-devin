/* recurions.js
 * Created: 8/27/2018
 * Authors: Devin Hero, Mitch Gianoni
 */

function logProblem(name){
  console.log('========================');
  console.log('Begin', name);
}

const animalHierarchy = [
  {id: 'Animals', parent: null},
  {id: 'Mammals', parent: 'Animals'},
  {id: 'Dogs', parent:'Mammals' },
  {id: 'Cats', parent:'Mammals' },
  {id: 'Golden Retriever', parent: 'Dogs'},
  {id: 'Husky', parent:'Dogs' },
  {id: 'Bengal', parent:'Cats' }
];



// //Initial calls
let res;

logProblem('Counting Sheep');
sheep(5);

logProblem('Array Doubles');
const array = [2, 4, 5];
res = arrayDouble(array);
console.log(res);

logProblem('Reverse String');
res = reverseString('hello squirrels');
console.log(res);

logProblem('nth Number Triangle');
res = nthNumber(9);
console.log(res);

logProblem('String Splitter');
res = stringSplitter('Mr. Stark I don\'t feel so good', ' ');
console.log(res);

logProblem('Binary Representation');
res = binaryRep(26);
console.log(res);

logProblem('Factorial');
res = factorial(5);
console.log(res);

logProblem('Fibonacci');
res = fibonacci(7);
console.log(res);

// logProblem('Anagrams');
// res = anagrams('bats');
// console.log(res);


// logProblem('Animal Hierarchy');
// console.log(traverse(animalHierarchy, null));

// logProblem('Organizational Chart');
// res = orgChart();
// console.log(res);

//1. Counting sheep

function sheep(num){
  for(let i = num; i > 0; i--){
    console.log(`${i} - Another sheep jump over the fence`);
  }
}


//2. Array Double

function arrayDouble(arr){
  let outputArr = [];
  for(let i = 0; i < arr.length; i++){
    outputArr.push(arr[i]*2);
  }
  return outputArr;
}


//3. Reverse String
function reverseString(string){
  let inputString = string.split('');
  let outputString = '';
  for(let i = 0; i < string.length; i++){
    outputString += (inputString.pop());
  }
  return outputString;
}


//4. nth Triangle Number
function nthNumber(n){
  let res = 0;
  for(let i = 1; i <= n; i++){
    res += i;
  }
  return res;
}


//5. String Splitter
function stringSplitter(string, separator) {
  let currWord = '';
  let splitArr =[];

  for(let i = 0; i < string.length; i++){
    if(string[i] === separator){
      splitArr.push(currWord);
      currWord = '';
    }else{
      currWord += string[i];
    }
  }
  splitArr.push(currWord);

  return splitArr;
}

//6. Binary Representation
function binaryRep(num){
  console.log('HOW DO BINARY REP?');
  for(let i = 0; i < i; i++){
    //what is length for loop?
  }
}

//7. Factorial
function factorial(num){
  let results = 1;
  for(let i = 1; i <= num; i++){
    results = results * i;
  }
  return results;
}

//8. Fibonacci
function fibonacci(n) {
  let curNum;
  let fibSequence = [1,1];
  
  if(n === 1){
    return [1];
  }
  if(n === 2){
    return fibSequence;
  }

  for(let i = 3; i <= n; i++){
    curNum = fibSequence[i-2] + fibSequence[i-3];
    fibSequence.push(curNum);
  }

  return curNum;
  // return fibSequence;
}

//9. Anagrams
function anagrams(str){
  
}



// ==============================
function traverse(animalHierarchy, parent) {
  
}


//11. Organizational Chart

