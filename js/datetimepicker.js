$(function() {
    $('input[name="daterange"]').daterangepicker({
        "timePicker": true,
        "timePickerIncrement": 30,
        "locale": {
            "format": "DD/MM/YYYY",
            "separator": " - ",
            "applyLabel": "Apply",
            "cancelLabel": "Cancel",
            "fromLabel": "From",
            "toLabel": "To",
            "customRangeLabel": "Custom",
            "weekLabel": "W",
            "daysOfWeek": [
                "Su",
                "Mo",
                "Tu",
                "We",
                "Th",
                "Fr",
                "Sa"
            ],
            "monthNames": [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ],
            "firstDay": 1
        },
        "showCustomRangeLabel": false,
        //"startDate": "06/22/2017",
        //"endDate": "06/28/2017",
        "drops": "up"
    });
});

function getAverage() {
    var drp = $('#daterange').data('daterangepicker');
    var start = new Date(drp.startDate).getTime();
    var end = new Date(drp.endDate).getTime();

    alert(start + ' ' + end);

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.responseType = '';
    xmlHttp.overrideMimeType('text/xml');
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
            var xml = xmlHttp.responseXML;
            //TODO
            //var avg = xml.getElementsByTagName('average');
            alert(xml);
        }
        else alert('No response');
    };
    xmlHttp.open("GET", "http://localhost:3000/cams/1/avg", true); // true for asynchronous
    xmlHttp.send(null);
};

//TODO
$(document).ready(function(){
    var socket = io.connect('http://stenomyapp.ddns.net:5000/ws');
    socket.on('response', function() {
        drawChart()
    });
});