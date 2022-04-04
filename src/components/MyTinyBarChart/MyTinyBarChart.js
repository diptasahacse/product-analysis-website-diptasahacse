import React from 'react';
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useCharts } from '../../hooks/useCharts';

const MyTinyBarChart = () => {
    const [chartData, setChartData] = useCharts();
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={500} height={300} data={chartData}>
                <Bar dataKey="sell" fill="#8884d8" />
                <Tooltip></Tooltip>
                <XAxis dataKey="revenue" />
                <YAxis />
                <Legend></Legend>
            </BarChart>

        </ResponsiveContainer>

    );
};

export default MyTinyBarChart;