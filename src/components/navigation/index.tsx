import AdministrationIcon from "../../assets/side-menu/administration-icon.svg";
import AuditTrailIcon from "../../assets/side-menu/audit-trail-icon.svg";
import CustomersIcon from "../../assets/side-menu/customers-icon.svg";
import DashboardIcon from "../../assets/side-menu/dashboard-icon.svg";
import KycIcon from "../../assets/side-menu/kyc-icon.svg";
import Logo from "../../assets/logo.svg";
import ReportsIcon from "../../assets/side-menu/reports-icon.svg";
import RequestsIcon from "../../assets/side-menu/requests-icon.svg";
import SettingsIcon from "../../assets/side-menu/settings-icon.svg";
import SideMenu from "../side-menu";
import TasksIcon from "../../assets/side-menu/tasks-icon.svg";
import UserAvatar from "../../assets/side-menu/user-avatar.svg";
import UsersIcon from "../../assets/side-menu/users-icon.svg";
import useDimension from "../../hooks/useDimension";

interface Props {
    isOpen?: boolean;
}

function Navigation(props: Props) {
    const { width } = useDimension();

    return (
        <>
            <aside
                className={
                    "fixed z-50 flex h-screen max-h-screen w-full max-w-56 flex-grow flex-col items-center justify-start gap-8 border-r border-grey-tertiary bg-white px-5 py-8 duration-150 lg:relative " +
                    `${props.isOpen && width < 1025 ? "" : "-translate-x-full lg:translate-x-[unset]"}`
                }
            >
                <div className="flex w-full items-center justify-center">
                    <img src={Logo} />
                </div>
                <div className="flex w-full flex-grow flex-col items-start justify-between overflow-hidden">
                    <div className="flex w-full flex-col gap-2 overflow-y-auto">
                        <div className="flex w-full flex-col items-center justify-start border-b border-grey-tertiary pb-2">
                            <SideMenu icon={DashboardIcon} text="Dashboard" isActive />
                            <SideMenu icon={RequestsIcon} text="Requests" />
                        </div>
                        <div className="flex w-full flex-col items-center justify-start border-b border-grey-tertiary pb-2">
                            <SideMenu icon={KycIcon} text="KYC" />
                            <SideMenu icon={ReportsIcon} text="Reports" />
                            <SideMenu icon={TasksIcon} text="Tasks" />
                        </div>
                        <div className="flex w-full flex-col items-center justify-start border-b border-grey-tertiary pb-2">
                            <SideMenu icon={AuditTrailIcon} text="Audit Trail" />
                            <SideMenu icon={CustomersIcon} text="Customers" />
                        </div>
                        <div className="flex w-full flex-col items-center justify-start pb-2">
                            <SideMenu icon={UsersIcon} text="Users" />
                            <SideMenu icon={SettingsIcon} text="Settings" />
                            <SideMenu icon={AdministrationIcon} text="Administration" />
                        </div>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                        <img src={UserAvatar} alt="current user" />
                        <p className="text-sm text-black">ByeWind</p>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default Navigation;
