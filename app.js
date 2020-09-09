// var trace1 = {
//     x: [country.year],
//     y: [country.score],
//     type: "scatter"
// };

// var data = [trace1];

// Plotly.newPlot("plot", data);


// d3.json("/test", function(data) {
//     console.log(data);
// }); 

var url = "/"

d3.json(url,function(data){
    console.log(data);
});