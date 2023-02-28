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

// 4. Determine x-y axes //

const margin = {top: 50, left: 100, right: 50, bottom: 100};

const xScale = d3.scaleBand()
    .domain(["1952", "1957", "1962", "1967", "1972", "1977", "1982", "1987", "1992", "1997", "2002", "2007"])
    .range([margin.left, width - margin.right])
    .padding(0.5);

const yScale = d3.scaleLinear()
    .domain([50, lifeExp.max])
    .range([height - margin.bottom, margin.top]);

// 5. Draw axes //

const xAxis = svg.append("g")
    .attr("class", "axis")
    .attr("transform", `translate(${height - margin.bottom})`)
    .call(d3.axisBottom().scale(xScale));

const yAxis = svg.append("g")
    .attr("class", "axis")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft().scale(yScale));

// 6. Draw bars //

const points = svg.selectAll("rect")
    .data(filtered_data)
    .enter()
    .append("rect")
        .attr("x", function(d) {return xScale(d.year);})
        .attr("y", function(d) {return yScale(d.leftExp);})
        .attr("width", xScale.bandWidth())
        .attr("height", function(d) {return height - (margin.bottom)})

// 7. Draw axis lables //

const xAxisLabel = svg.append("text")
    .attr("class","axisLabel")
    .attr("x", width/2)
    .attr("y", height-margin.bottom/2)
    .text("Year");

const yAxisLabel = svg.append("text")
    .attr("class","axisLabel")
    .attr("transform","rotate(-90)")
    .attr("x", -height/2)
    .attr("y", margin.left/2)
    .text("Life Expectancy (Years)");
});