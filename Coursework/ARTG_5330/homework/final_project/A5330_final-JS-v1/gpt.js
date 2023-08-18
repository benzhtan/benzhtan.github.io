// Set up the data
const data = [
    { name: "Apples", value: 20 },
    { name: "Oranges", value: 14 },
    { name: "Bananas", value: 10 },
    { name: "Grapes", value: 8 },
    { name: "Pineapples", value: 5 },
  ];
  
  // Set up the dimensions of the chart
  const width = 500;
  const height = 300;
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };
  
  // Create the SVG element and set its dimensions
  const svg = d3.select("#chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height);
  
  // Set up the scales
  const xScale = d3.scaleBand()
    .range([margin.left, width - margin.right])
    .domain(data.map(d => d.name))
    .padding(0.1);
  
  const yScale = d3.scaleLinear()
    .range([height - margin.bottom, margin.top])
    .domain([0, d3.max(data, d => d.value)]);
  
  // Add the bars
  svg.selectAll("rect")
    .data(data)
    .join("rect")
    .attr("x", d => xScale(d.name))
    .attr("y", d => yScale(d.value))
    .attr("width", xScale.bandwidth())
    .attr("height", d => height - margin.bottom - yScale(d.value))
    .attr("fill", "steelblue");
  
  // Add the x-axis
  svg.append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(xScale));
  
  // Add the y-axis
  svg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(yScale));
  