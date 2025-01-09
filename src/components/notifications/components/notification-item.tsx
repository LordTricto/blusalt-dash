interface Props {
    image: string;
    title: string;
    imageAlt: string;
    subTitle?: string;
    isTextOnly?: boolean;
    isWithTrail?: boolean;
}

function NotificationItem(props: Props) {
    return (
        <>
            <div className={"flex w-full items-center justify-center px-2 " + `${props.isTextOnly ? "h-10" : "h-[54px]"}`}>
                <div className="flex w-full gap-2">
                    <div className="relative min-w-6 max-w-6">
                        <img src={props.image} className="min-w-6 max-w-6" alt={props.imageAlt} />
                        {props.isWithTrail && (
                            <div className="absolute -bottom-3.5 flex w-full items-center justify-center">
                                <div className="h-[18.25px] w-[1px] bg-black bg-opacity-10"></div>
                            </div>
                        )}
                    </div>
                    <div className={"flex w-full flex-col truncate " + `${props.isTextOnly ? "items-center justify-center" : ""}`}>
                        <p className="w-full truncate text-sm text-black">{props.title}</p>
                        {props.subTitle && <p className="text-xs text-black text-opacity-40">{props.subTitle}</p>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default NotificationItem;
