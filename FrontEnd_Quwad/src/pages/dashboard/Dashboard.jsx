import { Link } from "react-router-dom"

function Dashboard() {
    return(
        <div className="grid gap-[50px] grid-cols-3">
            
            <div className="col-span-3">
                <h1>Dashboard</h1>
                <h2 className="text-[24px] font-medium">Hi Mariappan!</h2>
                <p>Welcome to Quwad dasboard.</p>
            </div>

            <div className="row-span-2 ">

                <div className="grid gap-[20px]">
                    <h3 className="text-[24px] font-medium" >Licence</h3>
                    <div className="h-[200px] bg-[lightblue]">
                        <p>Graph</p>
                    </div>
                    <Link to="/products">
                        <div className="p-[10px] flex gap-[20px] items-center">
                            <div className="w-[32px] h-[32px] bg-[#EEB372] rounded-[16px] flex items-center justify-center">
                                <img className="w-[24px] h-[24px]" src="/icons/products-icon.png" alt="product icon" /></div>
                            <p>Create license plans</p>
                        </div>
                    </Link>
                    <Link to="/documents" target="_blank">
                        <div className="p-[10px] flex gap-[20px] items-center">
                            <div className="w-[32px] h-[32px] bg-[#5CD3ED] rounded-[16px] flex items-center justify-center">
                                <img className="w-[24px] h-[24px]" src="/icons/documents-icon.png" alt="documents icon" /></div>
                            <p>View documents</p>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-[20px]">
                <h3 className="text-[24px] font-medium col-span-2">Overview</h3>
                <div className="p-[20px] rounded-[10px] bg-[#F7E2C9]">
                    <p>Total licenses</p>
                    <p>2568</p>
                </div>
                <div className="p-[20px] rounded-[10px] bg-[#E3C9F9]">
                    <p>Active licenses</p>
                    <p>1166</p>
                </div>
                <div className="p-[20px] rounded-[10px] bg-[#CAF8F6]">
                    <p>Expired licenses</p>
                    <p>107</p>
                </div>
                <div className="p-[20px] rounded-[10px] bg-[#DEF8C9]">
                    <p>Total Api calls today</p>
                    <p>2687</p>
                </div>
            </div>

            {/* Usage report */}
            <div className="grid gap-[20px]">
                <h3 className="text-[24px] font-medium">Usage</h3>
                <div className="p-[20px] rounded-[10px] bg-[#000] text-[#fff] grid gap-[20px]">
                    <div>
                        <p>2687 Api calls this month.</p>
                        <p>$5 per 1000 API call.</p>
                    </div>
                    <h1 className="text-[32px] text-center">$15</h1>
                    <div className="flex align-center justify-center">
                        <Link>
                            <div className="p-[15px] max-w-[150px] rounded-[10px] bg-[#031C2C] text-center">
                                <p>Pay now</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Activites report */}
            <div className="col-span-2">
                <h3 className="text-[24px] font-medium">Activities</h3>

                <table className="min-w-full">
                    <thead className="border-y border-[#D9D9D9]">
                        <tr className="p-[20px] text-left grid grid-cols-3">
                            <th className="font-medium">Product name</th>
                            <th className="font-medium">Active licenses</th>
                            <th className="font-medium">No of API calls</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="p-[20px] text-left grid grid-cols-3">
                            <td>DocEditorPro</td>
                            <td>08</td>
                            <td>86</td>
                        </tr>
                        <tr className="p-[20px] text-left grid grid-cols-3">
                            <td>Apporama</td>
                            <td>1158</td>
                            <td>2601</td>
                        </tr>
                    </tbody>
                </table>
                
            </div>

        </div>
    )
};

export default Dashboard