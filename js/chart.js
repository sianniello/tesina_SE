/**
 * Created by Stefano on 06/06/2017.
 */

google.charts.load('current', {packages:['corechart']});

google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = new google.visualization.DataTable();

    data.addColumn('datetime', 'Time');
    data.addColumn('number', 'People');

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.responseType = '';
    xmlHttp.overrideMimeType('text/xml');
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
            var xml = xmlHttp.responseXML;
            var values = xml.getElementsByTagName('value');
            for (var i = 0; i < values.length; i++) {
                var val = Number(values[i].innerHTML);
                var ts = values[i].getAttribute('timestamp');
                data.addRows([
                    [new Date(ts*1000), val]
                ]);
            }
            chart.draw(data, options);
        }
    };
    xmlHttp.open("GET", "http://localhost:3000/cams", true); // true for asynchronous
    xmlHttp.send(null);

    var options = {
        title: 'Cam1',
        curveType: 'function',
        legend: { position: 'bottom' }
    };
    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
}

//function drawChartLocal() {
//    var data = google.visualization.arrayToDataTable([
//        ['Year', 'Sales', 'Expenses'],
//        ['2004',  1000,      400],
//        ['2005',  1170,      460],
//        ['2006',  660,       1120],
//        ['2007',  1030,      540]
//    ]);
//
//    var options = {
//        title: 'Company Performance',
//        curveType: 'function',
//        legend: { position: 'bottom' }
//    };
//
//    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
//
//    chart.draw(data, options);
//
//}
