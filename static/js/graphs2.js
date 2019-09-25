queue()
    .defer(d3.csv, "data/states.csv")
    .await(makeGraphs);

function makeGraphs(error, statesData) {
    var ndx = crossfilter(statesData);

    // bar charts

    show_members_balance(ndx);
    show_year_accession(ndx);

    // pie charts

    show_council_votes(ndx);
    show_parliament_seats(ndx);

    show_gdp_per_country();

    dc.renderAll();
}

/* ------ show_members_balance --------*/

function show_members_balance(ndx) {
    var dim = ndx.dimension(dc.pluck('European_Union'));
    var group = dim.group();

    dc.barChart("#members_balance")
        .width(400)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Countries in Europe")
        .yAxis().ticks(10);
}

/* ------ show_year_accession --------*/

function show_year_accession(ndx) {
    var dim = ndx.dimension(dc.pluck('Accession_Year'));
    var group = dim.group();

    dc.barChart("#year_accession")
        .width(400)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Countries in Europe")
        .yAxis().ticks(5);
}

/* ----- show_council_votes ------------*/

function show_council_votes(ndx) {
    var dim = ndx.dimension(d => d.country);
    var group = dim.group().reduceSum(d => d.council_votes);

    dc.pieChart("#council_votes")
        .height(400)
        .width(400)
        .radius(150)
        .slicesCap(37)
        .innerRadius(50)
        .dimension(dim)
        .group(group)
        .renderLabel(true)
        .drawPaths(false)
        .externalLabels(-2)
        .on('pretransition', function(chart) {
            chart.selectAll('text.pie-slice').text(function(d) {
                if (d.data.value > 13) {
                    return d.data.key + ': ' + d.data.value;
                }
                return "";
            });
        });
}


/* ------- show_parliament_seats -------*/

function show_parliament_seats(ndx) {
    var dim = ndx.dimension(d => d.country);
    var group = dim.group().reduceSum(d => d.parliament_seats);

    dc.pieChart("#parliament-seats")
        .height(400)
        .width(400)
        .radius(150)
        .slicesCap(37)
        .innerRadius(80)
        .dimension(dim)
        .group(group)
        .renderLabel(true)
        .drawPaths(false)
        .externalLabels(-10)
        .on('pretransition', function(chart) {
            chart.selectAll('text.pie-slice').text(function(d) {
                if (d.data.value > 20) {
                    return d.data.key + ': ' + d.data.value;
                }
                return "";
            });
        });
}

/* ----------------- show_gdp_per_country -----------------------*/


function show_gdp_per_country() {
    // append the svg object to the body of the page
    
    var width = 460
    var height = 460
    
    var svg = d3.select("#gdp-per-country")
        .append("svg")
        .attr("width", width)
        .attr("height", height)


// Read data
d3.csv("https://raw.githubusercontent.com/pjachimowski/renewable/master/data/states.csv", function(data) {
        // Filter a bit the data -> more than 1 million inhabitants
        //data = data.filter(function(d) { return d.GDP_eur > 9000 })
        var data = data.filter(function(d) { return d.GDP_eur > 9000 });

        // Color palette for continents?
        var color = d3.scale.ordinal()
            .domain(["Candidate", "Member", "Non member"])
            .range(d3.schemeSet1);

        // Size scale for countries
        var size = d3.scale.linear()
            .domain([0, 1400000000])
            .range([7, 55]) // circle will be between 7 and 55 px wide

        // create a tooltip
        var Tooltip = d3.select("#gdp-per-country")
            .append("div")
            .style("opacity", 0)
            .attr("class", "tooltip")
            .style("background-color", "white")
            .style("border", "solid")
            .style("border-width", "2px")
            .style("border-radius", "5px")
            .style("padding", "5px")

        // Three function that change the tooltip when user hover / move / leave a cell
        var mouseover = function(d) {
            Tooltip
                .style("opacity", 1)
        }
        var mousemove = function(d) {
            Tooltip
                .html('<u>' + d.key + '</u>' + "<br>" + d.GDP_eur + "GDP")
                .style("left", (d3.mouse(this)[0] + 20) + "px")
                .style("top", (d3.mouse(this)[1]) + "px")
        }
        var mouseleave = function(d) {
            Tooltip
                .style("opacity", 0)
        }

        // Initialize the circle: all located at the center of the svg area
        var node = svg.append("g")
            .selectAll("circle")
            .data(data)
            .enter()
            .append("circle")
            .attr("class", "node")
            .attr("r", function(d) { return size(d.GDP_eur) })
            .attr("cx", width / 2)
            .attr("cy", height / 2)
            .style("fill", function(d) { return color(d.European_Union) })
            .style("fill-opacity", 0.8)
            .attr("stroke", "black")
            .style("stroke-width", 1)
            .on("mouseover", mouseover) // What to do when hovered
            .on("mousemove", mousemove)
            .on("mouseleave", mouseleave)
/*
            //.call(d3.drag() // call specific function when circle is dragged
            //   .on("start", dragstarted)
            //   .on("drag", dragged)
            //    .on("end", dragended));

        // Features of the forces applied to the nodes:
        var simulation = d3.forceSimulation()
            .force("center", d3.forceCenter().x(width / 2).y(height / 2)) // Attraction to the center of the svg area
            .force("charge", d3.forceManyBody().strength(.1)) // Nodes are attracted one each other of value is > 0
            .force("collide", d3.forceCollide().strength(.2).radius(function(d) { return (size(d.GDP_eur) + 3) }).iterations(1)) // Force that avoids circle overlapping

        // Apply these forces to the nodes and update their positions.
        // Once the force algorithm is happy with positions ('alpha' value is low enough), simulations will stop.
        simulation
            .nodes(data)
            .on("tick", function(d) {
                node
                    .attr("cx", function(d) { return d.x; })
                    .attr("cy", function(d) { return d.y; })
            });

        // What happens when a circle is dragged?
        function dragstarted(d) {
            if (!d3.event.active) simulation.alphaTarget(.03).restart();
            d.fx = d.x;
            d.fy = d.y;
        }

        function dragged(d) {
            d.fx = d3.event.x;
            d.fy = d3.event.y;
        }

        function dragended(d) {
            if (!d3.event.active) simulation.alphaTarget(.03);
            d.fx = null;
            d.fy = null;
        }
        
        */
        
        
    });
}