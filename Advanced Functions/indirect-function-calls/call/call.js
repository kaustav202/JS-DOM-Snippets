firstName: 'Ann',
lastName: 'Brown'

let p1 = {
  firstName: 'John',
  lastName: 'Smith'
};

function sayWelcome(greeting) {
  console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}
sayWelcome.call(p1, 'Welcome'); // Welcome John Smith
sayWelcome.call(this , 'Welcome'); // Welcome Ann Brown
