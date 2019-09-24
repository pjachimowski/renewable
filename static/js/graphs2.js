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

/* -------- show_gdp_per_year -------------------------- */


function show_gdp_per_year(ndx) {
    var year_dim = ndx.dimension(dc.pluck('date'));
    function gdp_per_country(country) {
            return function(d) {
                if (d.country === country) {
                    return 1; // something is wrong with "1"
                } else {
                    return 0;
                }
            }
        }
    var albania_gdp = year_dim.group().reduceSum(gdp_per_country('Albania'));
    var austria_gdp = year_dim.group().reduceSum(gdp_per_country('Austria'));
    var belgium_gdp = year_dim.group().reduceSum(gdp_per_country('Belgium'));

    var compositeChart = dc.compositeChart("#gdp-per-year");

    compositeChart
        .width(990)
        .height(200)
        .dimension(year_dim)
        .x(d3.time.scale().domain())
        .yAxisLabel("year")
        .legend(dc.legend().x(80).y(20).itemHeight(13).gap(5))
        .renderHorizontalGridLines(true)
        .compose([
            dc.lineChart(compositeChart)
            .colors('green')
            .group(albania_gdp, 'Albania'),
            dc.lineChart(compositeChart)
            .colors('red')
            .group(austria_gdp, 'Austria'),
            dc.lineChart(compositeChart)
            .colors('blue')
            .group(belgium_gdp, 'Belgium')
        ])
        .brushOn(false)
        .render();
}
