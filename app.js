const { useEffect, useRef } = React;

function BarChart() {
    const ref = useRef();

    useEffect(() => {
        const data = [12, 5, 6, 8, 3, 7];
        const width = 500;
        const height = 300;
        const svg = d3.select(ref.current)
            .attr('width', width)
            .attr('height', height)
            .style('overflow', 'visible')
            .style('margin-top', '50px');

        const xScale = d3.scaleBand()
            .domain(data.map((val, index) => index))
            .range([0, width])
            .padding(0.5);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([height, 0]);

        const xAxis = d3.axisBottom(xScale).ticks(data.length);
        const yAxis = d3.axisLeft(yScale).ticks(5);

        svg.append('g')
            .call(xAxis)
            .attr('transform', `translate(0, ${height})`);

        svg.append('g')
            .call(yAxis);

        svg.selectAll('.bar')
            .data(data)
            .enter()
            .append('rect')
            .attr('x', (d, i) => xScale(i))
            .attr('y', yScale)
            .attr('width', xScale.bandwidth())
            .attr('height', val => height - yScale(val))
            .attr('fill', '#4CAF50');
    }, []);

    return <svg ref={ref}></svg>;
}

ReactDOM.render(<BarChart />, document.getElementById('chart'));
