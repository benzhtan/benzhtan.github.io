d3.csv("/data/gapminder.csv").then(function(data) {
// 1. Create a SVG viewport where the chart will appear//
const width = document.querySelector("#chart").clientWidth;
const height = document.querySelector("#chart").clientHeight;

// Initializing viewport of SVG canvas //
const svg = d3.select("#chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

// 2. Filter the data //

// Initializing new variable //
let filtered_data = data.filter(function(d) {
    return d.country === "United States";
});

// 3. Determine min and max values //

const lifeExp = {
    min: d3.min(filtered_data, function(d) {return +d.lifeExp; }),  //the "+" forces str to int //
    max: d3.max(filtered_data, function(d) {return +d.lifeExp; })
};

console.log(lifeExp.min, lifeExp.max)

// 4. Determine x-y axes //
// 5. Draw axes //
// 6. Draw bars //
// 7. Draw axis lables //
});