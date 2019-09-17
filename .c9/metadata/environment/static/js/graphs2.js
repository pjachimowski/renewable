{"filter":false,"title":"graphs2.js","tooltip":"/static/js/graphs2.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":40,"column":0},"end":{"row":67,"column":1},"action":"insert","lines":["function show_average_salaries(ndx) {","    var dim = ndx.dimension(dc.pluck('sex'));","","    function add_item(p, v) {","        p.count++;","        p.total += y.salary;","        p.average = p.total;","        return p;","    }","","    function remove_item(p, v) {","        p.count--;","        if (p.count == 0) {","            p.total = 0;","            p.average = 0;","        } else {","            p.total -= v.salary;","            p.average = p.total / p.count;","        }","        return p;","    }","","    function initialise () {","        return {count: 0, total: 0, average: 0};","    }","","    var averageSalaryByGender = dim.group().reduce(add_item, remove_item, initialise);","}"],"id":47}],[{"start":{"row":40,"column":29},"end":{"row":40,"column":30},"action":"remove","lines":["s"],"id":48},{"start":{"row":40,"column":28},"end":{"row":40,"column":29},"action":"remove","lines":["e"]},{"start":{"row":40,"column":27},"end":{"row":40,"column":28},"action":"remove","lines":["i"]},{"start":{"row":40,"column":26},"end":{"row":40,"column":27},"action":"remove","lines":["r"]},{"start":{"row":40,"column":25},"end":{"row":40,"column":26},"action":"remove","lines":["a"]},{"start":{"row":40,"column":24},"end":{"row":40,"column":25},"action":"remove","lines":["l"]},{"start":{"row":40,"column":23},"end":{"row":40,"column":24},"action":"remove","lines":["a"]},{"start":{"row":40,"column":22},"end":{"row":40,"column":23},"action":"remove","lines":["s"]}],[{"start":{"row":40,"column":22},"end":{"row":40,"column":23},"action":"insert","lines":["r"],"id":49}],[{"start":{"row":40,"column":9},"end":{"row":40,"column":23},"action":"remove","lines":["show_average_r"],"id":50},{"start":{"row":40,"column":9},"end":{"row":40,"column":31},"action":"insert","lines":["show_average_renewable"]}],[{"start":{"row":41,"column":38},"end":{"row":41,"column":41},"action":"remove","lines":["sex"],"id":51},{"start":{"row":41,"column":38},"end":{"row":41,"column":39},"action":"insert","lines":["c"]},{"start":{"row":41,"column":39},"end":{"row":41,"column":40},"action":"insert","lines":["o"]},{"start":{"row":41,"column":40},"end":{"row":41,"column":41},"action":"insert","lines":["n"]},{"start":{"row":41,"column":41},"end":{"row":41,"column":42},"action":"insert","lines":["t"]},{"start":{"row":41,"column":42},"end":{"row":41,"column":43},"action":"insert","lines":["i"]},{"start":{"row":41,"column":43},"end":{"row":41,"column":44},"action":"insert","lines":["n"]},{"start":{"row":41,"column":44},"end":{"row":41,"column":45},"action":"insert","lines":["e"]},{"start":{"row":41,"column":45},"end":{"row":41,"column":46},"action":"insert","lines":["n"]},{"start":{"row":41,"column":46},"end":{"row":41,"column":47},"action":"insert","lines":["t"]}],[{"start":{"row":45,"column":21},"end":{"row":45,"column":27},"action":"remove","lines":["salary"],"id":52},{"start":{"row":45,"column":21},"end":{"row":45,"column":36},"action":"insert","lines":["renewable.total"]}],[{"start":{"row":56,"column":25},"end":{"row":56,"column":31},"action":"remove","lines":["salary"],"id":53},{"start":{"row":56,"column":25},"end":{"row":56,"column":40},"action":"insert","lines":["renewable.total"]}],[{"start":{"row":66,"column":15},"end":{"row":66,"column":21},"action":"remove","lines":["Salary"],"id":54},{"start":{"row":66,"column":15},"end":{"row":66,"column":16},"action":"insert","lines":["R"]},{"start":{"row":66,"column":16},"end":{"row":66,"column":17},"action":"insert","lines":["e"]},{"start":{"row":66,"column":17},"end":{"row":66,"column":18},"action":"insert","lines":["n"]},{"start":{"row":66,"column":18},"end":{"row":66,"column":19},"action":"insert","lines":["e"]},{"start":{"row":66,"column":19},"end":{"row":66,"column":20},"action":"insert","lines":["w"]},{"start":{"row":66,"column":20},"end":{"row":66,"column":21},"action":"insert","lines":["a"]},{"start":{"row":66,"column":21},"end":{"row":66,"column":22},"action":"insert","lines":["b"]},{"start":{"row":66,"column":22},"end":{"row":66,"column":23},"action":"insert","lines":["l"]}],[{"start":{"row":66,"column":23},"end":{"row":66,"column":24},"action":"insert","lines":["e"],"id":55}],[{"start":{"row":66,"column":26},"end":{"row":66,"column":32},"action":"remove","lines":["Gender"],"id":56},{"start":{"row":66,"column":26},"end":{"row":66,"column":27},"action":"insert","lines":["C"]},{"start":{"row":66,"column":27},"end":{"row":66,"column":28},"action":"insert","lines":["o"]},{"start":{"row":66,"column":28},"end":{"row":66,"column":29},"action":"insert","lines":["n"]},{"start":{"row":66,"column":29},"end":{"row":66,"column":30},"action":"insert","lines":["t"]},{"start":{"row":66,"column":30},"end":{"row":66,"column":31},"action":"insert","lines":["i"]},{"start":{"row":66,"column":31},"end":{"row":66,"column":32},"action":"insert","lines":["n"]}],[{"start":{"row":66,"column":32},"end":{"row":66,"column":33},"action":"insert","lines":["e"],"id":57},{"start":{"row":66,"column":33},"end":{"row":66,"column":34},"action":"insert","lines":["n"]},{"start":{"row":66,"column":34},"end":{"row":66,"column":35},"action":"insert","lines":["t"]}],[{"start":{"row":66,"column":4},"end":{"row":67,"column":1},"action":"remove","lines":["var averageRenewableByContinent = dim.group().reduce(add_item, remove_item, initialise);","}"],"id":58},{"start":{"row":66,"column":4},"end":{"row":84,"column":19},"action":"insert","lines":["var averageSalaryByGender = dim.group().reduce(add_item, remove_item, initialise);","","    dc.barChart(\"#average-salary\")","        .width(400)","        .height(300)","        .margins({top: 10, right: 50, bottom: 30, left: 50})","        .dimension(dim)","        .group(averageSalaryByGender)","        .valueAccessor(function(d){","            return d.value.average.toFixed(2);","        })","        .transitionDuration(500)","        .x(d3.scale.ordinal())","        .xUnits(dc.units.ordinal)","        .elasticY(true)","        .xAxisLabel(\"Gender\")","        .yAxis().ticks(4);   ","}","© 2019 GitHub, Inc."]}],[{"start":{"row":68,"column":18},"end":{"row":68,"column":32},"action":"remove","lines":["average-salary"],"id":59},{"start":{"row":68,"column":18},"end":{"row":68,"column":35},"action":"insert","lines":["average-renewable"]}],[{"start":{"row":66,"column":15},"end":{"row":66,"column":21},"action":"remove","lines":["Salary"],"id":60},{"start":{"row":66,"column":15},"end":{"row":66,"column":16},"action":"insert","lines":["R"]},{"start":{"row":66,"column":16},"end":{"row":66,"column":17},"action":"insert","lines":["e"]},{"start":{"row":66,"column":17},"end":{"row":66,"column":18},"action":"insert","lines":["n"]},{"start":{"row":66,"column":18},"end":{"row":66,"column":19},"action":"insert","lines":["e"]},{"start":{"row":66,"column":19},"end":{"row":66,"column":20},"action":"insert","lines":["w"]},{"start":{"row":66,"column":20},"end":{"row":66,"column":21},"action":"insert","lines":["a"]},{"start":{"row":66,"column":21},"end":{"row":66,"column":22},"action":"insert","lines":["b"]},{"start":{"row":66,"column":22},"end":{"row":66,"column":23},"action":"insert","lines":["l"]}],[{"start":{"row":66,"column":23},"end":{"row":66,"column":24},"action":"insert","lines":["e"],"id":61}],[{"start":{"row":66,"column":31},"end":{"row":66,"column":32},"action":"remove","lines":["r"],"id":62},{"start":{"row":66,"column":30},"end":{"row":66,"column":31},"action":"remove","lines":["e"]},{"start":{"row":66,"column":29},"end":{"row":66,"column":30},"action":"remove","lines":["d"]},{"start":{"row":66,"column":28},"end":{"row":66,"column":29},"action":"remove","lines":["n"]},{"start":{"row":66,"column":27},"end":{"row":66,"column":28},"action":"remove","lines":["e"]},{"start":{"row":66,"column":26},"end":{"row":66,"column":27},"action":"remove","lines":["G"]}],[{"start":{"row":66,"column":26},"end":{"row":66,"column":27},"action":"insert","lines":["C"],"id":63},{"start":{"row":66,"column":27},"end":{"row":66,"column":28},"action":"insert","lines":["o"]},{"start":{"row":66,"column":28},"end":{"row":66,"column":29},"action":"insert","lines":["n"]},{"start":{"row":66,"column":29},"end":{"row":66,"column":30},"action":"insert","lines":["t"]},{"start":{"row":66,"column":30},"end":{"row":66,"column":31},"action":"insert","lines":["i"]},{"start":{"row":66,"column":31},"end":{"row":66,"column":32},"action":"insert","lines":["n"]},{"start":{"row":66,"column":32},"end":{"row":66,"column":33},"action":"insert","lines":["e"]},{"start":{"row":66,"column":33},"end":{"row":66,"column":34},"action":"insert","lines":["n"]}],[{"start":{"row":66,"column":34},"end":{"row":66,"column":35},"action":"insert","lines":["t"],"id":64}],[{"start":{"row":73,"column":15},"end":{"row":73,"column":36},"action":"remove","lines":["averageSalaryByGender"],"id":65},{"start":{"row":73,"column":15},"end":{"row":73,"column":42},"action":"insert","lines":["averageRenewableByContinent"]}],[{"start":{"row":81,"column":21},"end":{"row":81,"column":27},"action":"remove","lines":["Gender"],"id":66},{"start":{"row":81,"column":21},"end":{"row":81,"column":22},"action":"insert","lines":["c"]},{"start":{"row":81,"column":22},"end":{"row":81,"column":23},"action":"insert","lines":["o"]},{"start":{"row":81,"column":23},"end":{"row":81,"column":24},"action":"insert","lines":["n"]},{"start":{"row":81,"column":24},"end":{"row":81,"column":25},"action":"insert","lines":["t"]},{"start":{"row":81,"column":25},"end":{"row":81,"column":26},"action":"insert","lines":["i"]},{"start":{"row":81,"column":26},"end":{"row":81,"column":27},"action":"insert","lines":["n"]},{"start":{"row":81,"column":27},"end":{"row":81,"column":28},"action":"insert","lines":["e"]},{"start":{"row":81,"column":28},"end":{"row":81,"column":29},"action":"insert","lines":["n"]}],[{"start":{"row":81,"column":29},"end":{"row":81,"column":30},"action":"insert","lines":["t"],"id":67}],[{"start":{"row":81,"column":21},"end":{"row":81,"column":22},"action":"remove","lines":["c"],"id":68}],[{"start":{"row":81,"column":21},"end":{"row":81,"column":22},"action":"insert","lines":["C"],"id":69}],[{"start":{"row":84,"column":0},"end":{"row":84,"column":19},"action":"remove","lines":["© 2019 GitHub, Inc."],"id":70}],[{"start":{"row":82,"column":23},"end":{"row":82,"column":24},"action":"remove","lines":["4"],"id":71}],[{"start":{"row":82,"column":23},"end":{"row":82,"column":24},"action":"insert","lines":["1"],"id":72},{"start":{"row":82,"column":24},"end":{"row":82,"column":25},"action":"insert","lines":["9"]}],[{"start":{"row":82,"column":24},"end":{"row":82,"column":25},"action":"remove","lines":["9"],"id":73}],[{"start":{"row":82,"column":24},"end":{"row":82,"column":25},"action":"insert","lines":["0"],"id":74}],[{"start":{"row":6,"column":4},"end":{"row":7,"column":0},"action":"insert","lines":["",""],"id":75},{"start":{"row":7,"column":0},"end":{"row":7,"column":4},"action":"insert","lines":["    "]},{"start":{"row":7,"column":4},"end":{"row":8,"column":0},"action":"insert","lines":["",""]},{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":7,"column":4},"end":{"row":9,"column":6},"action":"insert","lines":["salaryData.forEach(function(d){","        d.salary = parseInt(d.salary);","    })"],"id":76}],[{"start":{"row":8,"column":10},"end":{"row":8,"column":16},"action":"remove","lines":["salary"],"id":77},{"start":{"row":8,"column":10},"end":{"row":8,"column":25},"action":"insert","lines":["renewable.total"]}],[{"start":{"row":8,"column":39},"end":{"row":8,"column":45},"action":"remove","lines":["salary"],"id":78},{"start":{"row":8,"column":39},"end":{"row":8,"column":54},"action":"insert","lines":["renewable.total"]}],[{"start":{"row":7,"column":4},"end":{"row":7,"column":14},"action":"remove","lines":["salaryData"],"id":79},{"start":{"row":7,"column":4},"end":{"row":7,"column":17},"action":"insert","lines":["renewableData"]}],[{"start":{"row":6,"column":1},"end":{"row":7,"column":0},"action":"insert","lines":["",""],"id":80},{"start":{"row":7,"column":0},"end":{"row":7,"column":1},"action":"insert","lines":[" "]},{"start":{"row":7,"column":1},"end":{"row":7,"column":2},"action":"insert","lines":["/"]},{"start":{"row":7,"column":2},"end":{"row":7,"column":3},"action":"insert","lines":["/"]}],[{"start":{"row":7,"column":3},"end":{"row":7,"column":4},"action":"insert","lines":[" "],"id":81}],[{"start":{"row":11,"column":4},"end":{"row":11,"column":5},"action":"insert","lines":["/"],"id":82},{"start":{"row":11,"column":5},"end":{"row":11,"column":6},"action":"insert","lines":["/"]}],[{"start":{"row":7,"column":4},"end":{"row":7,"column":5},"action":"remove","lines":[" "],"id":83},{"start":{"row":7,"column":3},"end":{"row":7,"column":4},"action":"remove","lines":[" "]},{"start":{"row":7,"column":2},"end":{"row":7,"column":3},"action":"remove","lines":["/"]}],[{"start":{"row":7,"column":2},"end":{"row":7,"column":3},"action":"insert","lines":["*"],"id":84}],[{"start":{"row":11,"column":4},"end":{"row":11,"column":5},"action":"remove","lines":["/"],"id":85}],[{"start":{"row":11,"column":4},"end":{"row":11,"column":5},"action":"insert","lines":["*"],"id":86}],[{"start":{"row":11,"column":6},"end":{"row":12,"column":0},"action":"insert","lines":["",""],"id":87},{"start":{"row":12,"column":0},"end":{"row":12,"column":4},"action":"insert","lines":["    "]},{"start":{"row":12,"column":4},"end":{"row":13,"column":0},"action":"insert","lines":["",""]},{"start":{"row":13,"column":0},"end":{"row":13,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":10,"column":6},"end":{"row":11,"column":0},"action":"insert","lines":["",""],"id":88},{"start":{"row":11,"column":0},"end":{"row":11,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":75,"column":0},"end":{"row":75,"column":1},"action":"insert","lines":["/"],"id":89},{"start":{"row":75,"column":1},"end":{"row":75,"column":2},"action":"insert","lines":["*"]}],[{"start":{"row":91,"column":1},"end":{"row":92,"column":0},"action":"insert","lines":["",""],"id":90},{"start":{"row":92,"column":0},"end":{"row":92,"column":1},"action":"insert","lines":["*"]},{"start":{"row":92,"column":1},"end":{"row":92,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":75,"column":0},"end":{"row":75,"column":2},"action":"remove","lines":["/*"],"id":91}],[{"start":{"row":73,"column":0},"end":{"row":73,"column":2},"action":"insert","lines":["/*"],"id":92}],[{"start":{"row":73,"column":0},"end":{"row":73,"column":2},"action":"remove","lines":["/*"],"id":93}],[{"start":{"row":47,"column":0},"end":{"row":47,"column":2},"action":"insert","lines":["/*"],"id":94}],[{"start":{"row":46,"column":1},"end":{"row":47,"column":0},"action":"insert","lines":["",""],"id":95}],[{"start":{"row":48,"column":0},"end":{"row":48,"column":2},"action":"remove","lines":["/*"],"id":96}],[{"start":{"row":93,"column":0},"end":{"row":93,"column":2},"action":"remove","lines":["*/"],"id":97},{"start":{"row":92,"column":1},"end":{"row":93,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":7,"column":0},"end":{"row":7,"column":4},"action":"remove","lines":[" /* "],"id":98}],[{"start":{"row":11,"column":0},"end":{"row":11,"column":4},"action":"remove","lines":["    "],"id":99}],[{"start":{"row":12,"column":5},"end":{"row":12,"column":6},"action":"remove","lines":["/"],"id":100},{"start":{"row":12,"column":4},"end":{"row":12,"column":5},"action":"remove","lines":["*"]},{"start":{"row":12,"column":0},"end":{"row":12,"column":4},"action":"remove","lines":["    "]},{"start":{"row":11,"column":0},"end":{"row":12,"column":0},"action":"remove","lines":["",""]},{"start":{"row":10,"column":6},"end":{"row":11,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":75,"column":19},"end":{"row":75,"column":35},"action":"remove","lines":["verage-renewable"],"id":101},{"start":{"row":75,"column":19},"end":{"row":75,"column":36},"action":"insert","lines":["average-renewable"]}],[{"start":{"row":75,"column":19},"end":{"row":75,"column":20},"action":"remove","lines":["a"],"id":102}],[{"start":{"row":80,"column":15},"end":{"row":80,"column":42},"action":"remove","lines":["averageRenewableByContinent"],"id":104},{"start":{"row":80,"column":15},"end":{"row":80,"column":42},"action":"insert","lines":["averageRenewableByContinent"]}],[{"start":{"row":91,"column":0},"end":{"row":92,"column":0},"action":"insert","lines":["",""],"id":105},{"start":{"row":92,"column":0},"end":{"row":92,"column":1},"action":"insert","lines":["?"]}],[{"start":{"row":92,"column":0},"end":{"row":92,"column":1},"action":"remove","lines":["?"],"id":106}],[{"start":{"row":92,"column":0},"end":{"row":92,"column":1},"action":"insert","lines":["/"],"id":107},{"start":{"row":92,"column":1},"end":{"row":92,"column":2},"action":"insert","lines":["*"]}],[{"start":{"row":92,"column":2},"end":{"row":92,"column":3},"action":"insert","lines":[" "],"id":108},{"start":{"row":92,"column":3},"end":{"row":92,"column":4},"action":"insert","lines":["a"]},{"start":{"row":92,"column":4},"end":{"row":92,"column":5},"action":"insert","lines":["d"]},{"start":{"row":92,"column":5},"end":{"row":92,"column":6},"action":"insert","lines":["d"]},{"start":{"row":92,"column":6},"end":{"row":92,"column":7},"action":"insert","lines":["e"]},{"start":{"row":92,"column":7},"end":{"row":92,"column":8},"action":"insert","lines":["d"]}],[{"start":{"row":92,"column":8},"end":{"row":92,"column":9},"action":"insert","lines":[" "],"id":109},{"start":{"row":92,"column":9},"end":{"row":92,"column":10},"action":"insert","lines":["c"]},{"start":{"row":92,"column":10},"end":{"row":92,"column":11},"action":"insert","lines":["h"]},{"start":{"row":92,"column":11},"end":{"row":92,"column":12},"action":"insert","lines":["a"]},{"start":{"row":92,"column":12},"end":{"row":92,"column":13},"action":"insert","lines":["n"]},{"start":{"row":92,"column":13},"end":{"row":92,"column":14},"action":"insert","lines":["g"]},{"start":{"row":92,"column":14},"end":{"row":92,"column":15},"action":"insert","lines":["e"]},{"start":{"row":92,"column":15},"end":{"row":92,"column":16},"action":"insert","lines":["s"]}],[{"start":{"row":92,"column":16},"end":{"row":92,"column":17},"action":"insert","lines":[" "],"id":110}],[{"start":{"row":92,"column":17},"end":{"row":92,"column":18},"action":"insert","lines":["*"],"id":111},{"start":{"row":92,"column":18},"end":{"row":92,"column":19},"action":"insert","lines":["/"]}],[{"start":{"row":52,"column":19},"end":{"row":52,"column":20},"action":"remove","lines":["y"],"id":112}],[{"start":{"row":52,"column":19},"end":{"row":52,"column":20},"action":"insert","lines":["v"],"id":113}],[{"start":{"row":92,"column":0},"end":{"row":92,"column":19},"action":"remove","lines":["/* added changes */"],"id":114},{"start":{"row":91,"column":0},"end":{"row":92,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":9,"column":48},"end":{"row":9,"column":49},"action":"remove","lines":["."],"id":115}],[{"start":{"row":9,"column":48},"end":{"row":9,"column":49},"action":"insert","lines":["_"],"id":116}],[{"start":{"row":9,"column":19},"end":{"row":9,"column":20},"action":"remove","lines":["."],"id":117}],[{"start":{"row":9,"column":19},"end":{"row":9,"column":20},"action":"insert","lines":["_"],"id":118}],[{"start":{"row":30,"column":42},"end":{"row":30,"column":43},"action":"remove","lines":["."],"id":119}],[{"start":{"row":30,"column":42},"end":{"row":30,"column":43},"action":"insert","lines":["_"],"id":120}],[{"start":{"row":52,"column":30},"end":{"row":52,"column":31},"action":"remove","lines":["."],"id":121}],[{"start":{"row":52,"column":30},"end":{"row":52,"column":31},"action":"insert","lines":["_"],"id":122}],[{"start":{"row":63,"column":34},"end":{"row":63,"column":35},"action":"remove","lines":["."],"id":123}],[{"start":{"row":63,"column":34},"end":{"row":63,"column":35},"action":"insert","lines":["_"],"id":124}],[{"start":{"row":9,"column":56},"end":{"row":10,"column":0},"action":"insert","lines":["",""],"id":125},{"start":{"row":10,"column":0},"end":{"row":10,"column":8},"action":"insert","lines":["        "]},{"start":{"row":10,"column":8},"end":{"row":10,"column":9},"action":"insert","lines":["c"]},{"start":{"row":10,"column":9},"end":{"row":10,"column":10},"action":"insert","lines":["o"]},{"start":{"row":10,"column":10},"end":{"row":10,"column":11},"action":"insert","lines":["n"]}],[{"start":{"row":10,"column":8},"end":{"row":10,"column":11},"action":"remove","lines":["con"],"id":126},{"start":{"row":10,"column":8},"end":{"row":10,"column":15},"action":"insert","lines":["console"]}],[{"start":{"row":10,"column":15},"end":{"row":10,"column":16},"action":"insert","lines":["."],"id":127},{"start":{"row":10,"column":16},"end":{"row":10,"column":17},"action":"insert","lines":["l"]},{"start":{"row":10,"column":17},"end":{"row":10,"column":18},"action":"insert","lines":["o"]},{"start":{"row":10,"column":18},"end":{"row":10,"column":19},"action":"insert","lines":["g"]}],[{"start":{"row":10,"column":19},"end":{"row":10,"column":21},"action":"insert","lines":["()"],"id":128}],[{"start":{"row":10,"column":20},"end":{"row":10,"column":21},"action":"insert","lines":["d"],"id":129},{"start":{"row":10,"column":21},"end":{"row":10,"column":22},"action":"insert","lines":["."]}],[{"start":{"row":10,"column":22},"end":{"row":10,"column":37},"action":"insert","lines":["renewable_total"],"id":130}],[{"start":{"row":10,"column":38},"end":{"row":10,"column":39},"action":"insert","lines":[";"],"id":131}],[{"start":{"row":10,"column":8},"end":{"row":10,"column":39},"action":"remove","lines":["console.log(d.renewable_total);"],"id":132},{"start":{"row":10,"column":4},"end":{"row":10,"column":8},"action":"remove","lines":["    "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":4},"action":"remove","lines":["    "]},{"start":{"row":9,"column":56},"end":{"row":10,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":8,"column":1},"end":{"row":10,"column":6},"action":"remove","lines":["   renewableData.forEach(function(d){","        d.renewable_total = parseInt(d.renewable_total);","    })"],"id":133}],[{"start":{"row":8,"column":0},"end":{"row":8,"column":1},"action":"remove","lines":[" "],"id":134},{"start":{"row":7,"column":1},"end":{"row":8,"column":0},"action":"remove","lines":["",""]},{"start":{"row":7,"column":0},"end":{"row":7,"column":1},"action":"remove","lines":[" "]},{"start":{"row":6,"column":1},"end":{"row":7,"column":0},"action":"remove","lines":["",""]},{"start":{"row":6,"column":0},"end":{"row":6,"column":1},"action":"remove","lines":[" "]},{"start":{"row":5,"column":41},"end":{"row":6,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":3,"column":4},"end":{"row":5,"column":6},"action":"insert","lines":["   renewableData.forEach(function(d){","        d.renewable_total = parseInt(d.renewable_total);","    })"],"id":135}],[{"start":{"row":2,"column":23},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":136},{"start":{"row":3,"column":0},"end":{"row":3,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":4,"column":3},"end":{"row":6,"column":6},"action":"remove","lines":["    renewableData.forEach(function(d){","        d.renewable_total = parseInt(d.renewable_total);","    })"],"id":137}],[{"start":{"row":7,"column":4},"end":{"row":8,"column":0},"action":"insert","lines":["",""],"id":138},{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":8,"column":4},"end":{"row":10,"column":6},"action":"insert","lines":["    renewableData.forEach(function(d){","        d.renewable_total = parseInt(d.renewable_total);","    })"],"id":139}],[{"start":{"row":8,"column":3},"end":{"row":10,"column":6},"action":"remove","lines":["     renewableData.forEach(function(d){","        d.renewable_total = parseInt(d.renewable_total);","    })"],"id":140}],[{"start":{"row":3,"column":4},"end":{"row":4,"column":0},"action":"insert","lines":["",""],"id":141},{"start":{"row":4,"column":0},"end":{"row":4,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":4,"column":4},"end":{"row":6,"column":6},"action":"insert","lines":["     renewableData.forEach(function(d){","        d.renewable_total = parseInt(d.renewable_total);","    })"],"id":142}],[{"start":{"row":4,"column":8},"end":{"row":4,"column":9},"action":"remove","lines":[" "],"id":143}],[{"start":{"row":4,"column":8},"end":{"row":6,"column":6},"action":"remove","lines":["renewableData.forEach(function(d){","        d.renewable_total = parseInt(d.renewable_total);","    })"],"id":144}],[{"start":{"row":4,"column":4},"end":{"row":4,"column":8},"action":"remove","lines":["    "],"id":145},{"start":{"row":4,"column":0},"end":{"row":4,"column":4},"action":"remove","lines":["    "]},{"start":{"row":3,"column":4},"end":{"row":4,"column":0},"action":"remove","lines":["",""]},{"start":{"row":3,"column":0},"end":{"row":3,"column":4},"action":"remove","lines":["    "]}],[{"start":{"row":2,"column":23},"end":{"row":3,"column":0},"action":"remove","lines":["",""],"id":146}],[{"start":{"row":4,"column":43},"end":{"row":5,"column":0},"action":"insert","lines":["",""],"id":147},{"start":{"row":5,"column":0},"end":{"row":5,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":5,"column":4},"end":{"row":7,"column":6},"action":"insert","lines":["renewableData.forEach(function(d){","        d.renewable_total = parseInt(d.renewable_total);","    })"],"id":148}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":7,"column":6},"end":{"row":7,"column":6},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":true,"wrapToView":false},"firstLineState":0},"timestamp":1568741292182,"hash":"c9a97faef711716efc65230c893a9ad93ab16525"}