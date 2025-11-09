import { Outlet } from "react-router-dom";
import TopBar from "../components/app/topBar/TopBar.jsx";
import SideBar from "../components/app/sideBar/SideBar.jsx";
import LoadingScreen from "../components/loading/LoadingScreen.jsx";


function Layout() {
    return(
        <div className="p-[50px] bg-[#000] min-h-dvh">
            <div className="p-[10px] bg-[#fff] min-h-dvh rounded-[10px] grid grid-rows-[auto_1fr] grid-cols-[50px_1fr]">

                <div className="col-span-2">
                    <LoadingScreen/>
                    <TopBar/>
                </div>

                {/* <SideBar/> */}
                <SideBar />

                <div className="p-[20px]">
                    <Outlet/>
                </div>

            </div>
        </div>
    )
};

export default Layout
