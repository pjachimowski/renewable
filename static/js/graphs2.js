queue()
    .defer(d3.csv, "data/states.csv")
    .await(makeGraphs);

function makeGraphs(error, statesData) {
    var ndx = crossfilter(statesData);

    // bar charts

    show_members_balance(ndx);
    show_year_accession(ndx);
    
    // selector
    
    show_selector(ndx);

    // pie charts

    show_council_votes(ndx);
    show_parliament_seats(ndx);
    
    show_population_chart(ndx);
    show_population_density_chart(ndx);
    show_area_chart(ndx);

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

/* ------- show_population_chart -------*/

function  show_population_chart(ndx) {
    var dim = ndx.dimension(d => d.country);
    var group = dim.group().reduceSum(d => d.Population);

    dc.barChart("#population-chart")
        .width(900)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 80, left: 80 })
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        //.elasticY(true)
        .xAxisLabel("Countries in Europe")
        .yAxis().ticks(15)
}

/* ------- show_population_chart -------*/

function  show_population_chart(ndx) {
    var dim = ndx.dimension(d => d.country);
    var group = dim.group().reduceSum(d => d.Population);

    dc.barChart("#population-chart")
        .width(900)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 80, left: 80 })
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Countries in Europe")
         .yAxisLabel("Population")
        .yAxis().ticks(15)
}
/* ------- show_Population_Density_chart -------*/

function  show_population_density_chart(ndx) {
    var dim = ndx.dimension(d => d.country);
    var group = dim.group().reduceSum(d => d.Population_Density);

    dc.barChart("#population-density-chart")
        .width(900)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 80, left: 80 })
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Countries in Europe")
        .yAxisLabel("people per square mile")
        .yAxis().ticks(15)
}


/* ------- show_Area_(km²)_chart -------*/

function  show_area_chart(ndx) {
    var dim = ndx.dimension(d => d.country);
    var group = dim.group().reduceSum(d => d.area_km);

    dc.barChart("#area-chart")
        .width(900)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 80, left: 80 })
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Countries in Europe")
        .yAxisLabel("Area in km² ")
        .yAxis().ticks(15)
}

/* -------- eu / non eu / condidate SELECTOR ---------- */

function show_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('European_Union'));
    var group = dim.group();
    
    dc.selectMenu("#selector")
        .dimension(dim)
        .group(group);
}