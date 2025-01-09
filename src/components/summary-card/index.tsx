import TrendDownIcon from "../../assets/trend-down.svg";
import TrendUpIcon from "../../assets/trend-up.svg";

interface Props {
    title: string;
    color: "blue" | "purple";
    trend: "trend-up" | "trend-down";
    number: string;
    percentage: string;
}

function SummaryCard(props: Props) {
    return (
        <>
            <div
                className={
                    "flex w-52 flex-grow flex-col items-start justify-start gap-2 rounded-2xl p-6 " +
                    `${props.color === "purple" ? "bg-purple" : "bg-blue"}`
                }
            >
                <p className="text-xs">{props.title}</p>
                <div className="flex w-full items-center justify-start gap-4">
                    <p className="text-2xl font-semibold tracking-widest">{props.number}</p>
                    <div className="flex w-max items-center justify-start gap-1">
                        <p className="text-xs">
                            {props.trend === "trend-up" ? "+" : "-"}
                            {props.percentage}%
                        </p>
                        <img src={props.trend === "trend-up" ? TrendUpIcon : TrendDownIcon} alt="uptrend" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default SummaryCard;
