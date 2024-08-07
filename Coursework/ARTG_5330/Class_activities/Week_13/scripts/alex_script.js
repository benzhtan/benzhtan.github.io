// Define the dimensions of the space that will contain the hierarhy
const width = 700;
const height = 380;

const svg = d3.select("#chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

// Output: Promise object
//          .then() callback function to actually turn it into JSON structure

let fileName = "data/films.json";

d3.json(fileName).then(function(results){

    // Once the data is loaded, everything happens inside the createHierarchy() function
    createHierarchicalLayout(results);

});

//

function createHierarchicalLayout(data) {

    /**
     *  The following lines of code handle the ABSTRACT DATA STRUCTURE
     *  of a hierarchy. No visualization-specific methods are used.
     */

    let groups = d3.rollup(data, function(d) { return d.length; },
                                 function(d) { return d.Distributor; },
                                 function(d) { return d.Genre; }
                                 // function(d) { return d.Rating; }
    );

    let root = d3.hierarchy(groups);

    // console.log(root);
    
    /**
     * If you're passing the output of d3.rollup into d3.hierarchy, the accessor 
     * function will usually return d[1] which is the rolled up value generated by d3.rollup.
     */
    root.sum(function(d) {
        return d[1];
    });

    /**
     *  The following lines of code handle HIERARCHICAL LAYOUT-SPECIFIC methods.
     */

    let treeLayout = d3.tree()
                       .size([width, height - 50]);

    treeLayout(root);

    /**
     *  The following lines of code handle VISUALIZATION-SPECIFIC methods.
     */

    svg.append("g")
       .selectAll("line")
       .data(root.links())
       .join("line")
        // coordinates of start of line. D3 refers to these as "source"
        .attr("x1", function(d){return d.source.x; })
        .attr("y1", function(d){return d.source.y; })
        // coordinates of end of line. D3 refers to these as "targets"
        .attr("x2", function(d){return d.target.x; })
        .attr("y2", function(d){return d.target.y; })
        .style("stroke-width", 6);
    
    //Connecting nodes of the tree with lines
    svg.append("g")
        .selectAll("circle")
        .data(root.descendants())
        .join("circle")
        .attr("cx", function(d){return d.x; })
        .attr("cy", function(d){return d.y; })
        .attr("r", 8);

    //Add text to nodes
    svg.append("g")
       .selectAll("text.label")
       .data(root.descendants())
       .classed("label", true)
       .join("text")
       .attr("x", function(d){return d.x; })
       .attr("x", function(d){return d.y; })
       .text(function(d) {
            return d.data[0];
        });

    svg.append("g")
       .selectAll("text.count-label")
       .data(root.descendants())
       .classed("count-label", true)
       .join("text")
            .attr("x", function(d) { return d.x; })
            .attr("x", function(d) { return d.y; })
                .text(function(d) {
                    return d.data[1];
                });

}
