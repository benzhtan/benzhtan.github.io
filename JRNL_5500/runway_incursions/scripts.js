var body = document.querySelector("body");
var lead_scrolly = body.querySelector(.scrolly_1);
var body_scrolly = body.querySelector(.scrolly_2);
var sticky = scrolly.querySelector("sticky");
var article = sticky.querySelector("article");
var steps = article.querySelectorAll(".step");

var scroller = scrollama();

function init() {
    scroller
        .setup({
            step: scrolly article .step;
            offset: 0.33;
            debug: true; //shows the trigger line //
        })
}
init();