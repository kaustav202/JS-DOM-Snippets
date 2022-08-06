### Declaration 

let / const

### Arrow Functions

const fun1 = arg => // Do something;

const fun2 = (a,b) => { </br>
 &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;  // Do something  </br>
}

### Spread and Rest Operator

Although the syntax is same for both their fiunction is totally different.

**Spread Operator** -> Unpack / Expand an object into individual elements, (key,value pair for objects)

array1 = [3,7,5]

array2 = [5, ...array1]
>array2 </br>
\>[5,3,7,5]

**Rest Operator** -> It condenses the rest of / remaining vlaues into one single element

my_func(...args)

[a,b, ...c] = [4,5,1,7,2]
>c </br>
\>[1,7,2]

### Array Destructuring

const a,b,c = [6,4,7]

### for-of  and for-in loop 

Both iterate over objects, but with subtle differences.

**for in** -> It loops over ennumerable properties of any object and hence it's the general purpose loop.

for(const i in arr){</br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; // console.log(i) </br>
 }

**for of** -> It is an object specific iterator that allows iterating directly over the generated values.

for(const element of array){ </br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   // Do something  </br>
}

