var body = document.querySelector("body");
var scrolly = body.querySelector(.scrolly);
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