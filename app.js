var trace1 = {
    x: [{{country.year}}],
    y: [{{country.score}}],
    type: "scatter"
};

var data = [trace1];

Plotly.newPlot("plot", data);