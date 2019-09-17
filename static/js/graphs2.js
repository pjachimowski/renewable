queue()
    .defer(d3.csv, "data/js-project.csv")
    .await(makeGraphs);
    
function makeGraphs(error, renewableData) {
    var ndx = crossfilter(renewableData);
 
 
    renewableData.forEach(function(d){
        d.renewable.total = parseInt(d.renewable.total);
    })
    
    
    show_continent_selector(ndx);
    show_sources_balance(ndx);
    show_average_renewable(ndx);
    
    dc.renderAll();
}

function show_continent_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('continent'));
    var group = dim.group();
    
    dc.selectMenu("#continent-selector")
        .dimension(dim)
        .group(group);
}

function show_sources_balance(ndx) {
    var dim = ndx.dimension(dc.pluck('main.renewable'));
    var group = dim.group();
    
    dc.barChart("#source-balance")
        .width(400)
        .height(300)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Main Renewable Source")
        .yAxis().ticks(10);
}


function show_average_renewable(ndx) {
    var dim = ndx.dimension(dc.pluck('continent'));

    function add_item(p, v) {
        p.count++;
        p.total += y.renewable.total;
        p.average = p.total;
        return p;
    }

    function remove_item(p, v) {
        p.count--;
        if (p.count == 0) {
            p.total = 0;
            p.average = 0;
        } else {
            p.total -= v.renewable.total;
            p.average = p.total / p.count;
        }
        return p;
    }

    function initialise () {
        return {count: 0, total: 0, average: 0};
    }

    var averageRenewableByContinent = dim.group().reduce(add_item, remove_item, initialise);

    dc.barChart("#average-renewable")
        .width(400)
        .height(300)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(dim)
        .group(averageRenewableByContinent)
        .valueAccessor(function(d){
            return d.value.average.toFixed(2);
        })
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Continent")
        .yAxis().ticks(10);   
}
