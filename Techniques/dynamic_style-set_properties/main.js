function showHelloWorld(){
  var helloWorldElement = document.getElementById('hello-world');
  
  helloWorldElement.classList.remove('hide','fade-out');
  
  helloWorldElement.classList.add('fade-in')
  
}

function hideHelloWorld(){
   var helloWorldElement = document.getElementById('hello-world');
  helloWorldElement.classList.add('fade-out');
  helloWorldElement.classList.remove('fade-in');
  setTimeout(function(){
    helloWorldElement.classList.add('hide');
  },2000)  //Note that this interval matches the timing of CSS animation
}
