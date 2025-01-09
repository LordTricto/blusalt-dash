import "chartjs-adapter-date-fns";

import {
    BarElement,
    CategoryScale,
    ChartArea,
    Chart as ChartJS,
    Filler,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    TimeScale,
    Tooltip,
} from "chart.js";
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

// import { ChartJSOrUndefined } from "react-chartjs-2/dist/";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, LineElement, TimeScale, Filler, Tooltip, Legend);

export type MultipleChartItem<T extends number> = {
    value: T;
    title: string;
    valueTwo: T;
};

interface Props<T extends number> {
    data: Array<MultipleChartItem<T>>;
}

function createGradient(ctx: CanvasRenderingContext2D, area: ChartArea, setGradientMix: Dispatch<SetStateAction<CanvasGradient | string>>) {
    const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
    gradient.addColorStop(1, "rgba(255, 12, 12, 0.1)"); // light black at the top
    // gradient.addColorStop(1, "rgba(0, 0, 0, 0.1)"); // light black at the top
    gradient.addColorStop(0.2, "rgba(0, 0, 0, 0.01)"); // Lighter black/grayish at the middle
    gradient.addColorStop(0, "rgba(0, 0, 0, 0)"); // Transparent at the bottom

    return setGradientMix(gradient);
}

function LineChart<T extends number>(props: Props<T>): React.JSX.Element {
    const chartRef = useRef<ChartJS<"line", number[], string>>(null);

    const [titleArray, setTitleArray] = useState<string[]>([]);
    const [valueArray, setValueArray] = useState<number[]>([]);
    // const [colorArray, setColorArray] = useState<string[]>([]);
    const [gradientMix, setGradientMix] = useState<CanvasGradient | string>("");
    const [valueTwoArray, setValueTwoArray] = useState<number[]>([]);

    useEffect(() => {
        const endIndex = props.data.length;
        const sliceData = props.data.slice(0, endIndex);
        setTitleArray(sliceData.map((item) => item.title));
        setValueArray(sliceData.map((item) => item.value));
        setValueTwoArray(sliceData.map((item) => item.valueTwo));
        // setColorArray(sliceData.map((item) => item.color));
    }, [props.data]);

    useEffect(() => {
        const chart: ChartJS<"line", number[], string> | null = chartRef.current;
        if (!chart) {
            return;
        }
        createGradient(chart.ctx, chart.chartArea, setGradientMix);
    }, []);

    return (
        <>
            <Line
                data={{
                    labels: titleArray,
                    datasets: [
                        {
                            label: "",
                            data: valueArray,
                            tension: 0.4,
                            borderColor: "rgb(0,0,0, 1)",
                            borderWidth: 1,
                            backgroundColor: gradientMix,
                            pointRadius: 0,
                            pointHoverRadius: 0,
                        },
                        {
                            label: "",
                            fill: false,
                            borderDash: [5, 5],
                            borderColor: "rgba(168, 197, 218, 1)",
                            data: valueTwoArray,
                            tension: 0.4,
                            borderWidth: 1,
                            backgroundColor: gradientMix,
                            pointRadius: 0,
                            pointHoverRadius: 0,
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
                                padding: 5,
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

export default LineChart;
