// using d3 for convenience
var main = document.querySelector("main");
var scrolly = main.querySelector("#scrolly");
var sticky = scrolly.querySelector(".sticky-chart");
var article = scrolly.querySelector("article");
var steps = article.querySelectorAll(".step");

// initialize the scrollama
var scroller = scrollama();

// scrollama event handlers
function handleStepEnter(response) {
  // response = { element, direction, index }
  var el = response.element;
  console.log(el);

  // remove is-active from all steps
  // then add is-active to this step
  steps.forEach(step => step.classList.remove('is-active'));
  el.classList.add('is-active');

  // v Update network maps here
  // update graphic based on step
  // use "template literals" with backticks
  sticky.querySelector("p").innerText = el.dataset.step;
  sticky.style.backgroundColor = el.dataset.color;
  // ^ `.step` refers to the `data-step` in the div tags //

}

function init() {
  scroller
    .setup({
      step: "#scrolly article .step",
      offset: 0.66,
      debug: false
    })
    .onStepEnter(handleStepEnter);

  // setup resize event
  window.addEventListener("resize", scroller.resize);
}

// kick things off
init();