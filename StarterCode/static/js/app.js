// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(tableData)

var tbody = d3.select("tbody");
function tableLoop(data){

tbody.html("");

data.forEach((dataReport) => {
    var row = tbody.append("tr");
    Object.entries(dataReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

tableLoop(tableData);

