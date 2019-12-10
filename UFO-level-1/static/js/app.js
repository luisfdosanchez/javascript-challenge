// from data.js
var tableData = data;

let date=tableData.map(item=>item.datetime);
let city=tableData.map(item=>item.city);
let state=tableData.map(item=>item.state);
let country=tableData.map(item=>item.country);
let shape=tableData.map(item=>item.shape);
let duration=tableData.map(item=>item.durationMinutes);
let comments=tableData.map(item=>item.comments);

function buildTable(date, city, state, country, shape, duration, comments) {
    var table = d3.select("#ufo-table");
    var tbody = table.select("tbody");
    var trow;
    for (var i = 0; i < tableData.length; i++) {
      trow = tbody.append("tr");
      trow.append("td").text(date[i]);
      trow.append("td").text(city[i]);
      trow.append("td").text(state[i]);
      trow.append("td").text(country[i]);
      trow.append("td").text(shape[i]);
      trow.append("td").text(duration[i]);
      trow.append("td").text(comments[i]);
    };
};

buildTable(date, city, state, country, shape, duration, comments);