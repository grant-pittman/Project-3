d3.json("/data").then(function (data) {
    console.log(data);
    latest_year_data = data.filter(data => data.Year == 2019);
    console.log(latest_year_data);
    var countries_score_2019 = []
    latest_year_data.forEach(item => {
        country = item.Country;
        score = item.Score
        countries_score_2019.push({ 'name': country, 'value': score });
    });
    console.log(countries_score_2019);
    anychart.onDocumentReady(function () {
        var tree_data = [
            { name: "Country Happiness", children: countries_score_2019 }
        ];
        console.log(tree_data);
        var chart = anychart.treeMap(tree_data, "as-tree");
        var customColorScale = anychart.scales.ordinalColor();
        customColorScale.ranges([
            { less: 4 },
            { from: 4, to: 5.5 },
            { from: 5.5, to: 7 },
            { greater: 7 }
        ]);
        customColorScale.colors(["lightgray", "#9ED1DE", "#00CCFF", "#FFCC00"]);
        // set the color scale as the color scale of the chart
        chart.colorScale(customColorScale);
        // add a color range
        chart.colorRange().enabled(true);
        chart.colorRange().length("100%");
        chart.container('container');
        chart.draw();
    }
    )
});

// Creating map object
// Creating map object
var myMap = L.map("map", {
    center: [40.7128, -74.0059],
    zoom: 11
  });
  // Adding tile layer
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: "pk.eyJ1IjoiZ3JhbnRwbWFuIiwiYSI6ImNrZWZzN3puZDBwa3cydHBxNGNnbzRtcGYifQ.R1d3p537y4KhE_gVOHh1sg"
  }).addTo(myMap);