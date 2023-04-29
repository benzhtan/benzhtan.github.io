
// set the dimensions and margins of the graph
var margin = {top: 10, right: 100, bottom: 30, left: 30},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#line-chart")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

d3.csv("./data/annual_visitors.csv", function(data) {

    // List of groups (here I have one group per column)
    var allGroup = ["Acadia","Arches","Badlands","Big Bend","Biscayne","Black Canyon of the Gunnison","Bryce Canyon","Canyonlands","Capitol Reef","Carlsbad Caverns","Channel Islands","Congaree","Crater Lake","Cuyahoga Valley","Denali","Death Valley","Dry Tortugas","Everglades","Gates of the Arctic","Glacier","Glacier Bay","Great Basin","Grand Canyon","Great Sand Dunes","Great Smoky Mountains","Grand Teton","Guadalupe Mountains","Haleakala","Hawaii Volcanoes","Hot Springs","Indiana Dunes","Isle Royale","Gateway Arch","Joshua Tree","Katmai","Kenai Fjords","Kings Canyon","Kobuk Valley","Lake Clark","Lassen Volcanic","Mammoth Cave","Mesa Verde","Mount Rainier","New River Gorge","North Cascades","Olympic","Petrified Forest","Pinnacles","Redwood","Rocky Mountain","Saguaro","Sequoia","Shenandoah","Theodore Roosevelt","Virgin Islands","Voyageurs","White Sands","Wrangell-St. Elias","Wind Cave","Yellowstone","Yosemite","Zion"]

    // add the options to the button
    d3.select("#selectButton")
        .selectAll('myOptions')
        .data(allGroup)
        .enter()
        .append('option')
        .text(function (d) { return d; }) // text showed in the menu
        .attr("value", function (d) { return d; }) // corresponding value returned by the button

    // A color scale: one color for each group
    var myColor = d3.scaleOrdinal()
        .domain(allGroup)
        .range(d3.schemeSet2);

    // Add X axis --> it is a date format
    var x = d3.scaleTime()
      .domain(d3.extent(data, function(d) { return d.date; }))
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));
    
    // Add Y axis
    var y = d3.scaleLinear()
      .domain( [0,20])
      .range([ height, 0 ]);
    svg.append("g")
      .call(d3.axisLeft(y));

    // Initialize line with group a
    var line = svg
      .append('g')
      .append("path")
        .datum(data)
        .attr("d", d3.line()
          .x(function(d) { return x(+d.time) })
          .y(function(d) { return y(+d.valueA) })
        )
        .attr("stroke", function(d){ return myColor("valueA") })
        .style("stroke-width", 4)
        .style("fill", "none")

    // A function that update the chart
    function update(selectedGroup) {

      // Create new data with the selection?
      var dataFilter = data.map(function(d){return {time: d.time, value:d[selectedGroup]} })

      // Give these new data to update line
      line
          .datum(dataFilter)
          .transition()
          .duration(1000)
          .attr("d", d3.line()
            .x(function(d) { return x(+d.time) })
            .y(function(d) { return y(+d.value) })
          )
          .attr("stroke", function(d){ return myColor(selectedGroup) })
    }

    // When the button is changed, run the updateChart function
    d3.select("#selectButton").on("change", function(d) {
        // recover the option that has been chosen
        var selectedOption = d3.select(this).property("value")
        // run the updateChart function with this selected option
        update(selectedOption)
    })

})
