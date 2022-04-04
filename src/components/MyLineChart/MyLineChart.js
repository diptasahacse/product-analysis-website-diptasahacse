import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { useCharts } from '../../hooks/useCharts';

const MyLineChart = () => {
    const [chartData, setChartData] = useCharts();
    return (
        <LineChart
            width={500}
            height={300}
            data={chartData}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="investment" stroke="#82ca9d" />
        </LineChart>

    );
};

export default MyLineChart;