let name = 'Rabindranat';
const greeting = function() {
    let name = 'Peter';
    return function (){
        let name = 'John';
        console.log(`Hello ${name}`);
    }
}

name = 'Tigran';
const hello = greeting();
hello();