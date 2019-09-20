queue()
    .defer(d3.csv, "data/states.csv")
    .await(makeGraphs);

function makeGraphs(error, statesData) {
    var ndx = crossfilter(statesData);

    show_members_balance(ndx);
    show_year_accession(ndx);

    // pie charts

    show_council_votes(ndx);
    // show_parliament_seats(ndx);

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
        .yAxis().ticks(20);
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
    var dim = ndx.dimension(dc.pluck('council_votes'));
    var group = dim.group();

    dc.pieChart("#council_votes")
        .width(200)
        .height(200)
        .slicesCap(37)
        .innerRadius(10)
        .dimension(dim)
        .group(group)
        .renderLabel(true);
}





/*

var pieChart = dc.pieChart('#council_votes');
// d3.csv("data/.csv", function(errors, people) {
// console.log(people);
// var mycrossfilter = crossfilter(people);

var councilDimension = mycrossfilter.dimension(function(data) {
    return data.council_votes;
});
var councilGroup = councilDimension.group().reduceCount();

pieChart
    .width(800)
    .height(300)
    .dimension(councilDimension)
    .group(councilGroup)
    .on('renderlet', function(chart) {
        chart.selectAll('rect').on('click', function(d) {
            console.log('click!', d);
        });
    });
    
    
*/
/* ----- show_parliament_seats ------------*/
