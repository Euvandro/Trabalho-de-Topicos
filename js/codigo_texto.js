
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