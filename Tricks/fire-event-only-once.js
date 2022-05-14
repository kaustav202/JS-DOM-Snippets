const el = document.querySelector('.target-element');
el.addEventListener('click', ()=>{
  do_something();
} , {once: true})

/* This mitigates the requirement of removeEventListener and also allows specifying exact number the event can be triggered */

/* Also it is not prone to accidental trigging by change of state as it's part of the same mathod */
