
let mybutton = document.getElementById("Btn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function toogleMenu() {
  console.log(document.body.offsetWidth);
  var x = document.getElementsByClassName("menu")[0];
  
  if(x.classList.contains('menu-hidden')){
    x.classList.remove('menu-hidden');
  }else{
    x.classList.add('menu-hidden');
  }
}