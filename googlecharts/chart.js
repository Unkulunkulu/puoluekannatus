google.load('visualization', '1', {packages: ['corechart']});
google.setOnLoadCallback(drawChart);
function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Vuosi');
    data.addColumn({type: 'number', role: 'tooltip'});
    data.addColumn('number', 'Vasemmistoliitto (SKDL, STPV, SSTP)');
    data.addColumn('number', 'SDP, STP');
    data.addColumn('number', 'Vihreät');
    data.addColumn('number', 'Muut');
    data.addColumn('number', 'RKP');
    data.addColumn('number', 'Keskusta (KePu, ML, SML)');
    data.addColumn('number', 'Perussuomalaiset (SMP, SPP)');
    data.addColumn('number', 'KD (SKL)');
    data.addColumn('number', 'Kokoomus (SP)');
    data.addColumn('number', 'Liberaalit (KP, Ed., NSP)');
    data.addRows(rawData);

    var options = {
        title: 'Puolueiden historiallinen kannatus',
        hAxis: {format: '####', textStyle: {color: '#000'}},
        vAxis: {viewWindowMode: 'pretty', textStyle: {color: '#000'}},
        isStacked: true,
        series: [
            {areaOpacity: 1, color: '#B92329'},
            {areaOpacity: 1, color: '#e21933'},
            {areaOpacity: 1, color: '#61BF1A'},
            {areaOpacity: 1, color: '#cccccc'},
            {areaOpacity: 1, color: '#FED375'},
            {areaOpacity: 1, color: '#1A5D2F'},
            {areaOpacity: 1, color: '#00229C'},
            {areaOpacity: 1, color: '#0C74B7'},
            {areaOpacity: 1, color: '#003a54'},
            {areaOpacity: 1, color: '#FFFF00'}
        ],
        legend: {position: 'top', maxLines: 4, textStyle: {fontSize: 12, color: '#000'}},
        interpolateNulls: true,
        chartArea: {width: '90%', height: '80%'},
        tooltip: {isHtml: true}
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart'));
    chart.draw(data, options);
}

window.onresize = drawChart;
