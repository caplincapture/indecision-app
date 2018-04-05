var nameVar = 'Andrew';
var nameVar = 'Gabe';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName(){
    let petName = 'Hal';
    return petName;
}

var fullName = 'Gabriel Leupin';
let firstName;

if (fullName) {
    let firstName = fullName.split(' ')[0]
    console.log(firstName);
}

console.log(firstName);