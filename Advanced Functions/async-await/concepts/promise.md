# Promise

The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

## Description

A Promise is a proxy object for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, 
the asynchronous method returns a promise to supply the value at some point in the future. Upon resolution of the promise, further actions can be associated to the settled value that matches the states of an existing promise that can be triggered upon it's success, while also 
executing other asynchronous actions.

<b>A Promise is in one of these states:</b>

- <b> pending </b>: initial state, neither fulfilled nor rejected.

- <b> fulfilled </b>: meaning that the operation was completed successfully.

- <b> rejected </b>: meaning that the operation failed.

A pending promise can either be fulfilled with a value or rejected with a reason (error). When either of these options happens, the associated handlers queued up by a promise's then method are called. If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, 
so there is no race condition between an asynchronous operation completing and its handlers being attached.

As the Promise.prototype.then() and Promise.prototype.catch() methods return promises, they can be chained.
