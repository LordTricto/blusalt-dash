interface Props {
    icon: string;
    text: string;
    isActive?: boolean;
}

function SideMenu(props: Props) {
    return (
        <div className="font-IBM-Plex flex w-full items-center justify-start gap-2 px-5 py-4">
            <img src={props.icon} />
            <p className={"text-sm " + `${props.isActive ? "font-medium" : ""}`}>{props.text}</p>
        </div>
    );
}

export default SideMenu;
