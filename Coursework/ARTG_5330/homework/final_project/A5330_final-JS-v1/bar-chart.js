/*

    ARTG5330 Visualization Technologies 1
    February 21, 2023
    Spring Semester
    Week 7

    - What is the "./data/gapminder.csv" inside of the parentheses 
    for d3.csv() referring to?

    It is referring to a dataset given in csv filetype provided by
    Gapminder that is stored locally inside the folder called "data".
    You need to provide the exact local path to that csv file to
    fetch it with the d3.csv() method.

    - The parameter named `data` inside of the function expression .then()

    The parameter named `data` binds to the csv file
    you fetch with the d3.csv method. Thus, it refers
    to the gapminder.csv file.

    - What kind of JavaScript data structure is `data`?

    An array of objects.

    - Where does the entire d3.csv().then() pattern
        open and close in this document?

    Use the VSCode interface to locate the opening
    and closing of the d3.csv().then() pattern.

    You may find it useful to examine the contents
    of `data` with console.log(data).

*/

d3.csv("gapminder.csv").then(function(data) {
    const width = document.querySelector("#chart").clientWidth;
    const height = document.querySelector("#chart").clientHeight;
    const svg = d3.select("#chart")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    let filtered_data = data.filter(function(d) {
        return d.country === 'United States';
    });

    const lifeExp = {
        min: d3.min(filtered_data, function(d) { return +d.lifeExp; }),
        max: d3.max(filtered_data, function(d) { return +d.lifeExp; })
    };

    const margin = {
        top: 50, 
        left: 100, 
        right: 50, 
        bottom: 100
    };

    const xScale = d3.scaleBand()
        .domain(["1952","1957","1962","1967","1972","1977","1982","1987","1992","1997","2002","2007"])
        .range([margin.left, width - margin.right])
        .padding(0.5);

    const yScale = d3.scaleLinear()
        .domain([50, lifeExp.max])
        .range([height - margin.bottom, margin.top]);

    const xAxis = svg.append("g")
        .attr("class","axis")
        .attr("transform", `translate(0,${height-margin.bottom})`)
        .call(d3.axisBottom().scale(xScale));

    const yAxis = svg.append("g")
        .attr("class","axis")
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft().scale(yScale));

    const points = svg.selectAll("rect")
        .data(filtered_data)
        .enter()
        .append("rect")
            .attr("x", function(d) { return xScale(d.year); })
            .attr("y", function(d) { return yScale(d.lifeExp); })
            .attr("width", xScale.bandwidth())
            .attr("height", function(d) { return height - (margin.bottom + yScale(d.lifeExp)) })
            .attr("fill", "steelblue");
    
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
