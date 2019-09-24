queue()
    .defer(d3.csv, "data/states.csv")
    .await(makeGraphs);

function makeGraphs(error, statesData) {
    var ndx = crossfilter(statesData);

    show_members_balance(ndx);
    show_year_accession(ndx);

    // pie charts

    show_council_votes(ndx);
    show_parliament_seats(ndx);

    show_gdp_per_year(ndx);

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

/* -----------------show_gdp_per_year -----------------------*/

function show_gdp_per_year(ndx) {
    var dim = ndx.dimension(dc.pluck("country"));
    var group2010 = dim.group().reduceSum(dc.pluck("2010"));
    var group2011 = dim.group().reduceSum(dc.pluck("2011"));
    var group2012 = dim.group().reduceSum(dc.pluck("2012"));
    var group2013 = dim.group().reduceSum(dc.pluck("2013"));
    var group2014 = dim.group().reduceSum(dc.pluck("2014"));

    var gdpChart = dc.lineChart("#gdp-per-year");

        gdpChart
                .width(990)
                .height(400)
                .renderArea(true)
                .dimension(dim)
                .group(2011)
                .stack(2012)
                .stack(2013)
                .x(d3.scale.ordinal());
}

