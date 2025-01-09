import LevelOne from "../../assets/traffic/level-1.svg";
import LevelThree from "../../assets/traffic/level-3.svg";
import LevelTwo from "../../assets/traffic/level-2.svg";

interface Props {
    text: string;
    level: "low" | "medium" | "high";
}

function StatLevel(props: Props) {
    return (
        <>
            <div className="flex w-max items-center justify-start">
                <div className="w-20 min-w-20">
                    <p className="text-xs text-black">{props.text}</p>
                </div>
                <img src={props.level === "low" ? LevelOne : props.level === "medium" ? LevelTwo : LevelThree} alt={props.level + "level"} />
            </div>
        </>
    );
}

export default StatLevel;
