import axios from "axios";
import { useEffect, useState } from "react";

export const useCharts = () => {
    const [chartData, setChartData] = useState([]);
    useEffect(() => {
        axios.get('rechart-data.json')
        .then(data => setChartData(data.data))

    }, [])

    return [chartData, setChartData];
}