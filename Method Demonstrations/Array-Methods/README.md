
## Quick Overview

Javascript arrays are iterable collections containing variable data types and resizable as per requirement. They inherit from Array.prototype which is it's object type. It provides a number of useful members for various operations on these objects.

### Creation

- **new &nbsp; Array(...arg)**   &nbsp;&nbsp;   *length (single arg) or values (multiple args)*
- **Array.from(...itr)**  &nbsp;&nbsp;&nbsp;&nbsp;   *shallow copy of any iterable*
- **Array.of(...values)**    &nbsp;&nbsp;&nbsp;&nbsp;   *expands and combines all values*

### General Property/Methods

- **arr.length** 
- **arr.at** 
- **arr.sort( comp_fun(first,second) )**    &nbsp;&nbsp;   *Takes reference to a function, sorts in occurence order if returned value > 0 , otherwise reverse order*
- **arr.reverse()**  &nbsp;&nbsp; *In place reversal of original order*

### Mutation 

- **arr.push()**   &nbsp;&nbsp;&nbsp;   *append end*
- **arr.pop()**  &nbsp;&nbsp;&nbsp;&nbsp;   *remove last*
- **arr.unshift(...args)**    &nbsp;   *add multiple beginning*
- **arr.shift()**   &nbsp;&nbsp;&nbsp;&nbsp; *remove first*
- **arr.splice( start,del_count,...items )** &nbsp;&nbsp; *starting at given index delete any no. or add any no. of new elements*
- **arr.concat(...items)** &nbsp;&nbsp; *appends multiple values or arrays (merge)*
- **arr.fill( val )** &nbsp;&nbsp;&nbsp;&nbsp; *all elements changed to val*

### Search/Existence

- **arr.indexOf()**   &nbsp;&nbsp;&nbsp;&nbsp;   *index or -1 if not exists*
- **arr.find( test_fun )**  &nbsp;&nbsp;&nbsp;&nbsp;   *first match (element) passing callback or undefined*
- **arr.findIndex( test_fun )**    &nbsp;&nbsp;   *index of first callback pass or -1*
- **arr.findLast( test_fun )**   &nbsp;&nbsp;&nbsp;&nbsp; *last test function pass(element) or undefined*
- **arr.findLastIndex( test_fun )**  &nbsp;&nbsp; *index of last callback pass or -1*

### Conversion

- **arr.join( sep )**   &nbsp;&nbsp;&nbsp;&nbsp;   *Array to String with elements concatenated using seperator | default : ','*
- **arr.toLocaleString()**  &nbsp;&nbsp;&nbsp;&nbsp;   *array to string including commas*
- **str.split( sep )**    &nbsp;&nbsp;   *string to array using separator to split into elements*

### Iteration


- **arr.forEach( callback )** &nbsp;&nbsp; *iterates over array items & executes callback with args - element,index & array*
- **arr.values()**  &nbsp;&nbsp; *returns an iterator to object values [non-mutating]*
- **str.keys()**    &nbsp;&nbsp;  *returns iterator to object keys/indices*
- **arr.entries()** &nbsp;&nbsp; *returns iterator containing both keys & values as first & second items respectively*


### Subseting / Testing

- **arr.slice( start,end )**   &nbsp;&nbsp;   *sub-array from start upto end (non including) [non-mutating] [shallow-copy]*
- **arr.filter( callback )**  &nbsp;&nbsp;   *sub-array comprising elements passing callback check [n-m] [s-c]*
- **arr.includes( val )**    &nbsp;&nbsp;   *boolean representing existence of item*
- **arr.every( test_fun )**  &nbsp;&nbsp;  *boolean representing test function check value by all items (always true for empty arr)*
- **arr.some( test_fun )** &nbsp;&nbsp;   *boolean representing test function pass by atleast 1 item (always false for empty arr)*


### Transformation

- **arr.map( callback )**  &nbsp;&nbsp;  *iterate over each item and returns new array with elements corresponding to values returned by callback in order [n-m]*
- **arr.reduce( ( prevVal,el,ind,arr)=> ... , initVal )**  &nbsp;&nbsp;  *reducer callback aggregating results of execution previous item, starts iterating from index 1 with 0th element as initVal if not provided explicitly*
