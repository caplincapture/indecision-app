const add = (a,b) => {
    //console.log(arguments);
    return a + b;
};

console.log(add(55,1));

const user = {
    name: 'Gabriel',
    cities: ['San Francisco', 'London', 'Paris'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);   
    }
};
console.log(user.printPlacesLived());

const multiplier = {
    // numbers - array of numbers
    numbers: [1, 2, 3],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
    // multiplyBy - single number
    // return a new array where the numbers have been multiplied
};

console.log(multiplier.multiply());