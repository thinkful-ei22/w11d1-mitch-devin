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

// logProblem('String Splitter');
// res = stringSplitter('Mr. Stark I don\'t feel so good', ' ');
// console.log(res);

// logProblem('Binary Representation');
// res = binaryRep(26);
// console.log(res);

// logProblem('Factorial');
// res = factorial(5);
// console.log(res);

// logProblem('Fibonacci');
//res = fibonacci(7);
//console.log(res);

logProblem('Anagrams');
res = anagrams('bats');
console.log('done');
console.log(res);


logProblem('Animal Hierarchy');
console.log(traverse(animalHierarchy, null));

logProblem('Organizational Chart');
// res = orgChart();
// console.log(res);

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
  const idx = string.indexOf(separator);

  if(idx === -1){
    return [string];
  }

  return [string.slice(0, idx)].concat(stringSplitter(string.slice(idx + separator.length), separator));
}

//6. Binary Representation
function binaryRep(num){
  if(num === 1){
    return '1';
  }
  if(num === 0){
    return '0';
  }

  if(num % 2 === 1){
    return binaryRep(Math.floor(num/2)) + '1';
  }else{
    return binaryRep(Math.floor(num/2)) + '0';
  }
}

//7. Factorial
function factorial(num){
  if(num === 1){
    return 1;
  }

  return num * factorial(num-1);
}

//8. Fibonacci
function fibonacci(n) {
  if(n < 2) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

//9. Anagrams
function anagrams(str){
  
  if(str.length === 0)
    return [''];

  console.log('String: ', str);
  
  return str.split('')
    .map(letter =>{
      const idx = str.indexOf(letter);
      const tempArr = [...str];
      tempArr.splice(idx, 1);
      // console.log(letter, tempArr);

      return [letter].concat(anagrams(tempArr.join('')));
    });
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

// ==============================
function traverse(animalHierarchy, parent) {
  let node = {};
  animalHierarchy.filter(item => item.parent === parent)
                 .forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
  return node;  
}


//11. Organizational Chart

const facebookStaff = [
  {}
];
