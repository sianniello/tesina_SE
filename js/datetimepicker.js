$(function() {
    $('input[name="daterange"]').daterangepicker({
        "timePicker": true,
        "timePickerIncrement": 30,
        "timePicker24Hour": true,
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
        "drops": "down"
    });
});

function getAverage() {
    var drp = $('#daterange').data('daterangepicker');
    var start = new Date(drp.startDate/1000).getTime().toString();
    var end = new Date(drp.endDate/1000).getTime().toString();
    var xhr = new XMLHttpRequest();

    xhr.responseType = '';
    xhr.overrideMimeType('text/xml');
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200){
            var xml = xhr.responseXML;
            if (xml)
                alert(xml.getElementsByTagName('avg_value')[0].childNodes[0].nodeValue);
            else
                alert('No values in range');
        }
    };
    xhr.open("GET", "http://localhost:3000/cams/1/avg/start/"+start+"/end/"+end, true); // true for asynchronous
    xhr.send(null);
}


$(document).ready(function(){
    var socket = io.connect('http://stenomyapp.ddns.net:5000');
    socket.on('message', function() {
        //alert('update');
        drawChart()
        $('#myImage').attr("src","http://stenomyapp.ddns.net:5000/cams/1/get_image?type=1");
    });
});