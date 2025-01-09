import "chartjs-adapter-date-fns";

import { ArcElement, CategoryScale, Chart as ChartJS, Filler, Legend, LineElement, LinearScale, PointElement, TimeScale, Tooltip } from "chart.js";
import React, { useEffect, useState } from "react";

import { ChartItem } from "./BarChart";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, ArcElement, LineElement, TimeScale, Filler, Tooltip, Legend);

interface Props<T extends number> {
    data: Array<ChartItem<T>>;
}
function DonutChart<T extends number>(props: Props<T>): React.JSX.Element {
    const [labelsArray, setLabelsArray] = useState<string[]>([]);
    const [valueArray, setValueArray] = useState<number[]>([]);
    const [colorArray, setColorArray] = useState<string[]>([]);

    useEffect(() => {
        const endIndex = props.data.length;
        const sliceData = props.data.slice(0, endIndex);
        setLabelsArray(sliceData.map((item) => item.title));
        setValueArray(sliceData.map((item) => item.value));
        setColorArray(sliceData.map((item) => item.color));
    }, [props.data]);

    return (
        <>
            <Doughnut
                data={{
                    labels: labelsArray,
                    datasets: [
                        {
                            label: "chart",
                            data: valueArray,
                            backgroundColor: colorArray,
                            borderRadius: 6,
                        },
                    ],
                }}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },
                }}
            />
        </>
    );
}

export default DonutChart;
