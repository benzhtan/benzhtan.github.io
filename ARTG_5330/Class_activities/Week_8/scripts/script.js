// 1. Get dimensions of browser window
    // browser window
    const width = window.innerWidth, height = window.innerHeight;

// 2. Initialize variables for svg container
    const svg = d3.select("#viz")
                .attr("width", width)
                .attr("height", height);
    
    const map = svg.select("#map");

// 3. Add background
    d3.select("#ocean")
      .attr("width", width)
      .attr("height", height);

// 4. Start building the map by loading the TopoJSON
    d3.json("/data/world-alpha3.json").then(function(world) {

// 5. Function that takes the TopoJSON file and converts it to GeoJSON
        
        let geoJSON = topojson.feature(world, world.objects.countries);

// 6. Filter out polygons

// 7. Map projection
        
        let proj = d3.geoMercator().fitSize([width, height], geoJSON);

// 8. Geographical path constructor
        
        let path = d3.geoPath().projection(proj);

        // D3 join pattern approach, binding "path" SVG shapes into geoJSON data
        map.selectAll("path")
           .data(geoJSON.features)
           .enter()
           .append("path")
           // Use "d" attribute in SVG graphics to define a path to be drawn. It is a presentation attribute. Can use CSS properties
           .attr("d", path)
           // Everything from here is stylistic
           .attr("fill", "#FCEDDA")
           .attr("vector-effect", "non-scaling-stroke")
           .attr("stroke", "#FC766AFF")
           .attr("stroke-width", "0.5px");

// 9. Plotting on geographical map
        // NOTE! In D3, you need to reverse lat and lon
        var points = [
            {"name": "Boston",
             "coords": [-71.0589, 42.3601]
            },
            {"name": "London",
             "coords": [-0.1278, 51.5074]
            }
        ];
        
// 10. D3 join for points on map
        map.selectAll("circle")
           .data(points)
           .enter()
           .append("circle")
           .attr("r", 4)
           .attr("fill", "#201E20")
           .attr("transform", function(d){
             return "translate(" + proj(d.coords) + ")";
           });

// 11. D3 Zoom and Pan
        function zoomed(e) {
            // "e" represents an event, which in this case, is a zoom event
            map.attr("transform", e.transform);
        };

        let zoom = d3.zoom()
           // Specifies the Zooming boundaries; which is the size of the viewport
           .translateExtent([[0,0], [width, height]])
           . scaleExtent([1, 15])
           .on("zoom", zoomed);
        
           // Make the svg canvas have a certain behavior specified within the parentheses.
        svg.call(zoom);
    });