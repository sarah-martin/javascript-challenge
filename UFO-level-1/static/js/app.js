// Assign data to a variable
var sightings = data;

// Select the button and create event handle
var button = d3.select("#filter-btn");
button.on("click", runEnter);

// Complete the event handler function
function runEnter() {

    // Reference the table body
    tbody = d3.select("tbody");

    // Prevent page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    
    // Filter the data using the input value
    filteredData = sightings.filter(sighting => sighting.datetime === inputValue);

    // Append the filtered data to a table
    filteredData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};