import { useEffect, useState } from "react";

export const useCharts = () => {
    const [chartData, setChartData] = useState([]);
    useEffect(() => {
        fetch('rechart-data.json')
            .then(res => res.json())
            .then(data => setChartData(data))

    }, [])

    return [chartData, setChartData];
}