const featured_el = document.querySelector('some-element');

const outside = false;

document.addEventListener('click',(e)=>{
   outside = !featured_el.contains(e.target);
}
                          
/* This can check for any element of interest on the DOM weather the event has been performed on it or outside it */
                          
/* Like in this example which checks if the click is inside the element or outside it */
                          
/* the outside is toggled to true if the featured element has no attribue e.target */
