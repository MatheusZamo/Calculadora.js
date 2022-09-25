let screenResult = document.querySelector('#account');
let sum = document.querySelector('#sum');
let subtraction = document.querySelector('#subtraction');
let multiplication = document.querySelector('#multiplication');
let division = document.querySelector('#division');
let percentage = document.querySelector('#percentage');
let equal = document.querySelector('#equal');
let clear = document.querySelector('#clear');
let key0 = document.querySelector('#key-0');
let key1 = document.querySelector('#key-1');
let key2 = document.querySelector('#key-2');
let key3 = document.querySelector('#key-3');
let key4 = document.querySelector('#key-4');
let key5 = document.querySelector('#key-5');
let key6 = document.querySelector('#key-6');
let key7 = document.querySelector('#key-7');
let key8 = document.querySelector('#key-8');
let key9 = document.querySelector('#key-9');
let key10 = document.querySelector('#key-10');
let key11 = document.querySelector('#key-11');

const keyBoard = [sum,subtraction,multiplication,division,percentage,key0,key1,key2,key3,key4,key5,key6,key7,key8,key9,key10,key11];

const filterKeyBoard = keyBoard.filter(keys => keys.addEventListener('click',(() => {
    account.innerHTML += keys.innerHTML
})) )

function clearScreen(){
    account.innerHTML = '';
}

clear.addEventListener('click', clearScreen)

function result(){
    const operation = account.innerHTML;
    const finalResult = eval(operation);
    account.innerHTML = finalResult;
}

equal.addEventListener('click',result)