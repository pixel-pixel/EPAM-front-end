const arr = ['1', '2', '3', '4', '5'];
let result;
const getMaxEvenElement = (arr) => {
  return arr.reduce((a, b) => {
    if (Math.max(a, b) % 2 === 0) {
      result = Math.max(a, b);
    }
    return result;
  });
};


let a = 3;
let b = 5;

[a, b] = [b, a];


const getValue = (value) => value ?? '-';


const getObjFromArray = (arr) => {
  return Object.fromEntries(arr);
};


function addUniqueId(...obj) {
  return Object.assign({}, ...obj, { id: Symbol() });
}


const oldObj = {
  name: 'willow',
  details: { id: 1, age: 47, university: 'LNU' }
};

const getRegroupedObject = (obj) => {
  const {
    name,
    details: { id, age, university }
  } = obj;
  const newObject = {
    university: university,
    user: { age, firstName: name, id }
  };
  return newObject;
};


const getArrayWithUniqueElements = (arr) => {
  return [...new Set(arr)];
};


const phoneNumber = '0123456789';
const lastDigits = 4;
const digitsLength = 10;

const hideNumber = (value) => {
  return value
    ?.toString()
    .slice(value.length - lastDigits)
    .padStart(digitsLength, '*');
};


const required = () => {
  throw new Error('b is required');
};

function add(a, b = required()) {
  return a + b;
}


function* generateIterableSequence() {
    yield 'I';
    yield 'Love';
    yield 'Epam';
    return
  }

const generatedObject = generateIterableSequence();

for (let value of generatedObject) {
    console.log(value);
}