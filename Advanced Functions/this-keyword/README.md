### In javascript, the `this` keyword refers to the context of invocation.

- function invocation: alert('Hello World!') <b> => </b>  &nbsp;&nbsp;&nbsp;  It's context is the same as the global object ie window.
- method invocation: console.log('Hello World!') <b> => </b> &nbsp;&nbsp; Refers to the object that owns the method.
- constructor invocation: new RegExp('\\d') <b> => </b> &nbsp;&nbsp; Refers to the newly created object.
- indirect invocation: alert.call(undefined, 'Hello World!') <b> => </b> &nbsp;&nbsp; Refers to the first argument passed.
