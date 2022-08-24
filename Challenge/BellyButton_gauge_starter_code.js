// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

    // Create a variable that holds the samples array.
    //var samples_array = data.samples 

    // Create a variable that filters the samples for the object with the desired sample number.
    var filteredSamples = samples_array.filter(sample_number => sample_number.id==sample);
    //console.log(filteredSamples);

    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var filteredArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = filteredArray[0];

    // Create a variable that holds the first sample in the array.
    
  
    // 2. Create a variable that holds the first sample in the metadata array.
    var firstSamples = filteredArray[0];
    

    // Create variables that hold the otu_ids, otu_labels, and sample_values.


    // 3. Create a variable that holds the washing frequency.
    var washingFrequency = parseFloat(firstSamples.wfreq)
   
    // Create the yticks for the bar chart.

    // Use Plotly to plot the bar data and layout.
    Plotly.newPlot();
    
    // Use Plotly to plot the bubble data and layout.
    Plotly.newPlot();
   
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = [{
      domain: { x: [0, 1], y: [0, 1] },
      value: washingFrequency,
      type: "indicator",
      mode: "gauge+number",
      title: { text: "Bellybutton Washing Frequency", font: { size: 20 } },
      gauge: {
        axis: { range: [null, 10] },
        steps: [
          { range: [0, 2], color: "red" },
          { range: [2, 4], color: "orange" },
          { range: [4, 6], color: "yellow" },
          { range: [6, 8], color: "lightgreen" },
          { range: [8, 10], color: "green" }

      
      
        ],
      }
    }
  ];

           
    
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = {
      width: 300,
      height: 200,
      margin: { t: 25, r: 25, l: 25, b: 25 },
      paper_bgcolor: "lavender",
      font: { color: "darkblue", family: "Arial" }
}; 
     
    

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", gaugeData, gaugeLayout);
  });
}
