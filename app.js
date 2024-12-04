// Import necessary libraries
import React, { useEffect } from 'react';
import * as d3 from 'd3';

// Define the App component
const App = () => {
    // Define the data for the bar chart
    const data = [12, 25, 6, 30, 18, 24, 15];

    // Use useEffect to run D3 code after the component mounts
    useEffect(() => {
        // Select the chart element and set up the SVG
        const svg = d3.select('#chart')
            .append('svg')
            .attr('width', 500)
            .attr('height', 300);

        // Set up the scales for the x and y axes
        const xScale = d3.scaleBand()
            .domain(data.map((d, i) => i))
            .range([0, 500])
            .padding(0.1);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([300, 0]);

        // Append rectangles for the bar chart
        svg.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('x', (d, i) => xScale(i))
            .attr('y', d => yScale(d))
            .attr('width', xScale.bandwidth())
            .attr('height', d => 300 - yScale(d))
            .attr('fill', '#4CAF50');
    }, []); // Empty dependency array ensures this runs once when the component mounts

    return (
        <div>
            <h1>React and D3.js Bar Chart</h1>
            <div id="chart"></div>
        </div>
    );
}

export default App;
