
var cod = document.getElementsByClassName("codigo_html");

for (let i = 0; i < cod.length; i++) {
    var text = cod.item(i).innerHTML;
    text = text.replaceAll('<', "&lt;");
    text = text.replaceAll('>', "&gt;");
    console.log(text);
    cod.item(i).innerHTML = text;
    cod.item(i).classList.add('language-html');
    hljs.highlightElement(cod.item(i));

}

// &amp; = &
// &lt; = <
// &gt; = >

let mybutton = document.getElementById("Btn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}