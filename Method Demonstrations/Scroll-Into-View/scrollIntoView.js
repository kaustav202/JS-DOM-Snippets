const button = document.querySelector('button');

const element = document.querySelector('section');

button.AddEventListener('click',()=>{
  element.scrollIntoView({ behaviour : 'smooth', block : 'start'});
})

/* call the method on a target element when a event is triggered */

/* the method takes an object where we can set the scroll behaviour and final position after scrolling (start,end,center,nearest) */
