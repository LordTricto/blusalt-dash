import "./App.css";

import { MarketingSEO, ReportsGenerated, TotalUsers, TrafficByLocation } from "./constants/graphs";

import BarChartCanvas from "./components/charts/BarChart";
import DarkMode from "./assets/header/dark-mode.svg";
import DonutChart from "./components/charts/DonutChart";
import Drawer from "./assets/header/drawer.svg";
import History from "./assets/header/history.svg";
import LineChart from "./components/charts/LineChart";
import Navigation from "./components/navigation";
import Notification from "./assets/header/notification.svg";
import NotificationBar from "./components/notifications";
import SearchBar from "./components/searchbar";
import StatLevel from "./components/level";
import SummaryCard from "./components/summary-card";
import useDimension from "./hooks/useDimension";
import { useState } from "react";

function App() {
    const { width } = useDimension();

    const [isMobileViewNavOpen, setIsMobileViewNavOpen] = useState(false);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);

    return (
        <>
            <main className="max-w-screen font-inter flex min-h-screen w-screen flex-col">
                <div className="max-w-screen grid h-full w-full grid-cols-1 lg:grid-cols-dash-layout">
                    <Navigation isOpen={isMobileViewNavOpen} />
                    <div className="flex max-h-screen w-full flex-col">
                        <header className="flex w-full items-center justify-between border-b border-grey-tertiary px-[30px] pb-5 pt-[30px]">
                            <p className="font-IBM-Plex text-[22px] font-medium text-black">Dashboard</p>
                            <div className="flex items-center justify-start gap-5">
                                <SearchBar />
                                <div className="flex items-center justify-start gap-2">
                                    <img src={DarkMode} alt="dark mode" />
                                    <img src={History} alt="history" />
                                    <button
                                        className={"outline-none focus:outline-none " + `${width < 1025 ? "cursor-pointer" : "cursor-default"}`}
                                        onClick={() => width < 1025 && setIsNotificationOpen((prev) => !prev)}
                                    >
                                        <img src={Notification} alt="notification" />
                                    </button>
                                    <button
                                        className={"outline-none focus:outline-none " + `${width < 1025 ? "cursor-pointer" : "cursor-default"}`}
                                        onClick={() => width < 1025 && setIsMobileViewNavOpen((prev) => !prev)}
                                    >
                                        <img src={Drawer} alt="drawer" />
                                    </button>
                                </div>
                            </div>
                        </header>
                        <div className="relative flex w-full items-start justify-start gap-4 px-[30px] py-6">
                            <div className="relative flex max-h-[calc(100vh-132px)] w-full flex-col items-center justify-start gap-4 overflow-y-auto">
                                <div className="relative h-28 min-h-28 w-full overflow-x-auto">
                                    <div className="absolute left-0 top-0 flex min-h-max w-full items-center justify-between gap-4">
                                        <SummaryCard number="7,265" percentage="11.02" title="Requests" trend="trend-up" color="blue" />
                                        <SummaryCard number="3,671" percentage="0.03" title="KYC" trend="trend-down" color="purple" />
                                        <SummaryCard number="156" percentage="15.03" title="Tasks" trend="trend-up" color="blue" />
                                        <SummaryCard number="2,318" percentage="6.08" title="Customers" trend="trend-down" color="purple" />
                                    </div>
                                </div>
                                <div className="flex w-full flex-col gap-4 xl:flex-row">
                                    <div className="flex max-h-[330px] w-full flex-col gap-4 rounded-2xl bg-light p-6">
                                        <div className="flex w-full items-center justify-start gap-4 overflow-x-auto">
                                            <div className="flex w-max items-center justify-start gap-4 border-r border-black border-opacity-20 pr-4">
                                                <h6 className="whitespace-nowrap text-sm font-semibold text-black">Total Users</h6>
                                                <p className="whitespace-nowrap text-sm text-black text-opacity-40">Total Projects</p>
                                                <p className="whitespace-nowrap text-sm text-black text-opacity-40">Operating Status</p>
                                            </div>
                                            <div className="flex w-max items-center justify-center gap-4">
                                                <div className="flex items-center justify-center gap-1">
                                                    <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
                                                    <p className="whitespace-nowrap text-xs text-black">This year</p>
                                                </div>
                                                <div className="flex items-center justify-center gap-1">
                                                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-secondary"></div>
                                                    <p className="whitespace-nowrap text-xs text-black">Last year</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative h-full w-full [&>canvas]:!h-full [&>canvas]:!max-h-[212px] [&>canvas]:!min-h-[160px] [&>canvas]:!w-full">
                                            <LineChart data={TotalUsers} />
                                        </div>
                                    </div>
                                    <div className="flex w-full flex-col gap-4 rounded-2xl bg-light p-6 xl:w-fit">
                                        <h6 className="text-sm font-semibold text-black">Traffic by Website</h6>
                                        <div className="flex flex-wrap justify-between gap-2 xl:w-max xl:flex-col">
                                            <StatLevel text="Google" level="low" />
                                            <StatLevel text="YouTube" level="medium" />
                                            <StatLevel text="Instagram" level="low" />
                                            <StatLevel text="Pinterest" level="high" />
                                            <StatLevel text="Facebook" level="low" />
                                            <StatLevel text="Twitter" level="medium" />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid h-full w-full grid-cols-1 gap-4 md:grid-cols-2">
                                    <div className="flex w-full flex-col gap-4 rounded-2xl bg-light p-6">
                                        <h6 className="text-sm font-semibold text-black">Reports Generated</h6>
                                        <div className="relative h-full w-full [&>canvas]:!h-full">
                                            <BarChartCanvas data={ReportsGenerated} />
                                        </div>
                                    </div>
                                    <div className="flex w-full flex-col gap-4 rounded-2xl bg-light p-6">
                                        <div className="flex items-center justify-start gap-4">
                                            <h6 className="text-sm font-semibold text-black">Traffic by Location</h6>
                                        </div>
                                        <div className="flex w-full flex-grow flex-col items-center justify-between gap-10 p-5 sm:flex-row">
                                            <div className="relative h-full w-full max-w-40 [&>canvas]:!w-full">
                                                <DonutChart data={TrafficByLocation} />
                                            </div>
                                            <div className="flex w-full max-w-64 flex-col gap-3">
                                                {TrafficByLocation.map((_, _index) => (
                                                    <div className="flex h-[22px] w-full items-center justify-between gap-4" key={_index}>
                                                        <div className="flex items-center justify-center gap-1">
                                                            <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: _.color }}></div>
                                                            <p className="text-xs text-black">{_.title}</p>
                                                        </div>
                                                        <p className="text-xs text-black">{_.value}%</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex max-h-[280px] min-h-[280px] w-full flex-grow flex-col gap-4 rounded-2xl bg-light p-6">
                                    <h6 className="text-sm font-semibold text-black">Marketing & SEO</h6>
                                    <div className="relative h-full w-full [&>canvas]:!h-full [&>canvas]:!max-h-[212px] [&>canvas]:!min-h-[212px] [&>canvas]:!w-full">
                                        <BarChartCanvas data={MarketingSEO} />
                                    </div>
                                </div>
                            </div>
                            <NotificationBar isOpen={isNotificationOpen} />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default App;
