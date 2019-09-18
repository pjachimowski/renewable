queue()
    .defer(d3.csv, "data/js-project.csv")
    .await(makeGraphs);
   
function makeGraphs(error, renewableData) {
    renewableData.forEach(function(d){
        d.renewable_total = parseInt(d.renewable_total);
    })
    var ndx = crossfilter(renewableData);
    
    show_continent_selector(ndx);
    
   /*  show_percent_resources(ndx);  */
    
    show_sources_balance(ndx);
    show_average_renewable(ndx);
    show_source_distribution(ndx);
    
    dc.renderAll();
}
/* ----------------------------  continent_selector  ------------------- */


function show_continent_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('continent'));
    var group = dim.group();
    
    dc.selectMenu("#continent-selector")
        .dimension(dim)
        .group(group);
}

/* --------------------------- percent_of_resources ------------------*/
/*
function show_percent_resources(ndx, continent, element) {
    var percentageRenewableSource = ndx.groupAll().reduce(
        function(p, v) {
            if (v.sex === gender) {
                p.count++;
                if(v.rank === "Prof") {
                    p.are_prof++;
                }
            }
            return p;
        },
        function(p, v) {
            if (v.sex === gender) {
                p.count--;
                if(v.rank === "Prof") {
                    p.are_prof--;
                }
            }
            return p;
        },
        function() {
            return {count: 0, are_prof: 0};    
        },
    );
    
    dc.numberDisplay(element)
        .formatNumber(d3.format(".1%"))
        .valueAccessor(function (d) {
            if (d.count == 0) {
                return 0;
            } else {
                return (d.are_prof / d.count);
            }
        })
        .group(percentageRenewableSource)
}    */

/* ----------------------------  sources_balance  ------------------- */


function show_sources_balance(ndx) {
    var dim2 = ndx.dimension(dc.pluck('main_renewable'));
    var group = dim2.group();
    
    dc.barChart("#source-balance")
        .width(400)
        .height(300)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(dim2)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Major source of energy (no. of countries)")
        .yAxis().ticks(10);
}

/* ----------------------------  average_renewable  ------------------- */


function show_average_renewable(ndx) {
    var dim3 = ndx.dimension(dc.pluck('continent'));

    function add_item(p, v) {
        p.count++;
        p.total += v.renewable_total;
        p.average = p.total / p.count;
        return p;
    }

    function remove_item(p, v) {
        p.count--;
        if (p.count == 0) {
            p.total = 0;
            p.average = 0;
        } else {
            p.total -= v.renewable_total;
            p.average = p.total / p.count;
        }
        return p;
    }

    function initialise () {
        return {count: 0, total: 0, average: 0};
    }

    var averageRenewableByContinent = dim3.group().reduce(add_item, remove_item, initialise);

    dc.barChart("#average-renewable")
        .width(400)
        .height(300)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(dim3)
        .group(averageRenewableByContinent)
        .valueAccessor(function(d){
            return d.value.average.toFixed(2);
        })
        .y(d3.scale.linear().domain([0,100]))
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("% of renewable resources per Continent")
        .yAxis().ticks(10);
}


/* ----------------------------  source_distribution  ------------------- */ 


function show_source_distribution(ndx) {
    var  dim = ndx.dimension(dc.pluck('continent'));

    function sourceByContinent (dimension, main_renewable) {
        return dimension.group().reduce(
            function (p, v) {
                p.total++;
                if(v.main_renewable == main_renewable) {
                    p.match++;
                }
                return p;
            },
            function (p, v) {
                p.total--;
                if(v.main_renewable == main_renewable) {
                    p.match--;
                }
                return p;
            },
            function () {
                return {total: 0, match: 0};
            }
        );
    }
    
    var dim = ndx.dimension(dc.pluck("continent"));
    var hydroByContinent = sourceByContinent(dim, "hydro");
    var solarByContinent = sourceByContinent(dim, "solar");
    var windByContinent = sourceByContinent(dim, "wind");
    var biomassByContinent = sourceByContinent(dim, "biomass");
    
    dc.barChart("#source-distribution")
        .width(400)
        .height(300)
        .dimension(dim)
        .group(hydroByContinent, "hydro")
        .stack(solarByContinent, "solar")
        .stack(windByContinent, "wind")
        .stack(biomassByContinent, "biomass")
        .valueAccessor(function(d) {
            if(d.value.total > 0) {
                return (d.value.match / d.value.total) * 100;
            } else {
                return 0;
            }
        })
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .legend(dc.legend().x(320).y(20).itemHeight(15).gap(5))
        .margins({top: 10, right: 100, bottom: 30, left: 30})
        .xAxisLabel("% of renewable resources per Continent");
}