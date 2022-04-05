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
body{
  text-align:center;
}

#hello-world{ 
  font-size:36px;
}

.hide{
  display:none;
}

.fade-in{
  animation: 2s fadeIn;
}


.fade-out{
  animation: 2s fadeOut;
}

@keyframes fadeIn{
  from{
    opacity:0;
  }
  
  to{
    opacity:1;
  }
}


@keyframes fadeOut{
  from{
    opacity:1;
  }
  
  to{
    opacity:0;
  }
}
<div id="hello-world" class="hide">Hello World</div>
<br>
<button onclick="showHelloWorld()">Click Here To Fade In</button>

<button onclick="hideHelloWorld()">Click Here To Fade Out</button>
