import Avatar1 from "../../assets/notification/avatars/avatar-1.png";
import Avatar10 from "../../assets/notification/avatars/avatar-10.png";
import Avatar11 from "../../assets/notification/avatars/avatar-11.png";
import Avatar2 from "../../assets/notification/avatars/avatar-2.png";
import Avatar3 from "../../assets/notification/avatars/avatar-3.png";
import Avatar4 from "../../assets/notification/avatars/avatar-4.png";
import Avatar5 from "../../assets/notification/avatars/avatar-5.png";
import Avatar6 from "../../assets/notification/avatars/avatar-6.png";
import Avatar7 from "../../assets/notification/avatars/avatar-7.png";
import Avatar8 from "../../assets/notification/avatars/avatar-8.png";
import Avatar9 from "../../assets/notification/avatars/avatar-9.png";
import BugIcon from "../../assets/notification/bug.svg";
import NewUserIcon from "../../assets/notification/new-user.svg";
import NotificationItem from "./components/notification-item";
import SubscribeIcon from "../../assets/notification/subscribe.svg";

interface Props {
    isOpen?: boolean;
}

function NotificationBar(props: Props) {
    return (
        <>
            <div
                className={
                    "fixed right-[30px] flex h-[calc(100vh-132px)] w-[264px] min-w-[264px] flex-grow flex-col gap-4 overflow-y-auto rounded-[30px] bg-warning-backdrop p-4 duration-200 lg:relative lg:right-[unset] lg:mb-[unset] " +
                    `${props.isOpen ? "" : "translate-x-[115%] lg:translate-x-[unset]"}`
                }
            >
                <div className="flex w-full flex-col items-start justify-start gap-1">
                    <div className="flex h-9 w-full items-center justify-start px-1">
                        <h4 className="text-sm text-black">Notifications</h4>
                    </div>
                    <NotificationItem image={BugIcon} imageAlt="bug" title="You fixed a bug." subTitle="Just now" />
                    <NotificationItem image={NewUserIcon} imageAlt="bug" title="New user registered." subTitle="59 minutes ago" />
                    <NotificationItem image={BugIcon} imageAlt="bug" title="You fixed a bug." subTitle="12 hours ago" />
                    <NotificationItem image={SubscribeIcon} imageAlt="bug" title="Andi Lane subscribed to youhjlhjljk." subTitle="Today, 11:59 AM" />
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-1">
                    <div className="flex h-9 w-full items-center justify-start px-1">
                        <h4 className="text-sm text-black">Activities</h4>
                    </div>
                    <NotificationItem image={Avatar1} imageAlt="user 1" title="Changed the style." subTitle="Just now" isWithTrail />
                    <NotificationItem image={Avatar2} imageAlt="user 2" title="Released a new version." subTitle="59 minutes ago" isWithTrail />
                    <NotificationItem image={Avatar3} imageAlt="user 3" title="Submitted a bug." subTitle="12 hours ago" isWithTrail />
                    <NotificationItem image={Avatar4} imageAlt="user 4" title="Modified A data in Page X." subTitle="Today, 11:59 AM" isWithTrail />
                    <NotificationItem image={Avatar5} imageAlt="user 5" title="Deleted a page in Project X." subTitle="Feb 2, 2024" />
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-1">
                    <div className="flex h-9 w-full items-center justify-start px-1">
                        <h4 className="text-sm text-black">Contacts</h4>
                    </div>
                    <NotificationItem image={Avatar6} imageAlt="user 6" title="Natali Craig" isTextOnly />
                    <NotificationItem image={Avatar7} imageAlt="user 7" title="Drew Cano" isTextOnly />
                    <NotificationItem image={Avatar8} imageAlt="user 8" title="Andi Lane" isTextOnly />
                    <NotificationItem image={Avatar9} imageAlt="user 9" title="Koray Okumus" isTextOnly />
                    <NotificationItem image={Avatar10} imageAlt="user 10" title="Kate Morrison" isTextOnly />
                    <NotificationItem image={Avatar11} imageAlt="user 11" title="Melody Macy" isTextOnly />
                </div>
            </div>
        </>
    );
}

export default NotificationBar;
