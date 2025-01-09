import "chartjs-adapter-date-fns";

import { BarElement, CategoryScale, Chart as ChartJS, Filler, Legend, LineElement, LinearScale, PointElement, TimeScale, Tooltip } from "chart.js";
import React, { useEffect, useState } from "react";

import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, LineElement, TimeScale, Filler, Tooltip, Legend);

export type ChartItem<T extends number> = {
    value: T;
    title: string;
    color: string;
};

interface Props<T extends number> {
    data: Array<ChartItem<T>>;
}

function BarChartCanvas<T extends number>(props: Props<T>): React.JSX.Element {
    const [titleArray, setTitleArray] = useState<string[]>([]);
    const [valueArray, setValueArray] = useState<number[]>([]);
    const [colorArray, setColorArray] = useState<string[]>([]);

    useEffect(() => {
        const endIndex = props.data.length;
        const sliceData = props.data.slice(0, endIndex);
        setTitleArray(sliceData.map((item) => item.title));
        setValueArray(sliceData.map((item) => item.value));
        setColorArray(sliceData.map((item) => item.color));
    }, [props.data]);

    return (
        <>
            <Bar
                data={{
                    labels: titleArray,
                    datasets: [
                        {
                            label: "",
                            data: valueArray,
                            backgroundColor: colorArray,
                            borderRadius: 6,
                            barPercentage: 0.6,
                        },
                    ],
                }}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    interaction: {
                        intersect: false,
                        mode: "index",
                    },
                    scales: {
                        y: {
                            ticks: {
                                callback: function (value) {
                                    if (isNaN(value as number)) return;
                                    return Number(((value as number) / 1000).toString()) + "K"; //pass tick values as a string into Number function
                                },
                                color: "rgba(28, 28, 28, 0.4)",
                                stepSize: 10000,
                            },
                            border: {
                                display: false,
                            },
                            beginAtZero: true,
                            grid: {
                                color: "#F2F2F2",
                                drawTicks: false,
                                offset: false,
                                lineWidth: 0,
                            },
                        },
                        x: {
                            ticks: {
                                // display: false,
                                color: "rgba(28, 28, 28, 0.4)",
                                crossAlign: "center",
                                align: "center",
                                maxRotation: 0,
                                minRotation: 0,
                            },
                            border: {
                                display: false,
                            },
                            grid: {
                                display: false,
                            },
                        },
                    },
                    plugins: {
                        // datalabels: {
                        // 	borderRadius: 4,
                        // 	anchor: "start",
                        // 	color: "white",
                        // 	display: function (context) {
                        // 		return `${context.dataset.data[context.dataIndex]}%`;
                        // 	},
                        // 	font: {
                        // 		weight: "bold",
                        // 	},
                        // 	offset: -20,
                        // 	textAlign: "center",
                        // 	align: "bottom",
                        // },
                        legend: {
                            display: false,
                        },
                    },
                }}
            />
        </>
    );
}

export default BarChartCanvas;
