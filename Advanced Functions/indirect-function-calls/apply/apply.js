let p1 = {
  firstName: 'John',
  lastName: 'Smith'
};
let p2 = {
  firstName: 'Ann',
  lastName: 'Brown'
};
function sayWelcome(greeting) {
  console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}
sayWelcome.apply(p1, ['Welcome']); // Welcome John Smith
sayWelcome.apply(p2, ['Welcome']); // Welcome Ann Brown
