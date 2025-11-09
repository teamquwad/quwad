import { Link } from "react-router-dom"

function EditProduct() {
    return(
        <div className="grid gap-[20px]">

            <h2 className="text-[24px] font-medium">Edit Products</h2>

            <form action="">

                <div>

                    <div>
                        <div className="flex gap-[20px] items-center">
                            <div className="w-[24px]">
                                <img className="w-[full]" src="/icons/title-tag.png" alt="Title tag" />
                            </div>
                            <input className="w-full text-[24px] font-medium" placeholder="Enter product name"/>
                        </div>
                        <div className="p-[20px]">
                            <p>www.quwad.com/api/yourproductname</p>
                            <p>Description: </p><input className="w-full" type="text" placeholder="Description about the product" />
                        </div>
                    </div>

                    <div>
                        <div className="flex gap-[20px] items-center">
                            <div className="w-[24px]">
                                <img className="w-[full]" src="/icons/products-icon.png" alt="Plans icon" />
                            </div>
                            <h2 className="w-full text-[24px] font-medium">Plans</h2>
                        </div>
                        <div className="p-[20px]">
                            <table className="w-full">
                                <thead className="border-y border-[#D9D9D9]">
                                    <tr className="px-[20px] py-[10px] text-left grid grid-cols-[1fr_1fr_3fr]">
                                        <th className="font-medium">Plan type</th>
                                        <th className="font-medium">Price</th>
                                        <th className="font-medium">Description</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr className="px-[20px] py-[10px] text-left grid grid-cols-[1fr_1fr_3fr]">
                                        <td><input className="w-full" type="text" placeholder="Trial" /></td>
                                        <td><input className="w-full" type="text" placeholder="$00/Month" /></td>
                                        <td><input className="w-full" type="text" placeholder="All features for 7 days. Post trial period limited reviews and AI features." /></td>
                                    </tr>

                                    <tr className="px-[20px] py-[10px] text-left grid grid-cols-[1fr_1fr_3fr]">
                                        <td><input className="w-full" type="text" placeholder="Business" /></td>
                                        <td><input className="w-full" type="text" placeholder="$20/Month" /></td>
                                        <td><input className="w-full" type="text" placeholder="100 review per month and 100 AI credits." /></td>
                                    </tr>

                                    <tr className="px-[20px] py-[10px] text-left grid grid-cols-[1fr_1fr_3fr]">
                                        <td><input className="w-full" type="text" placeholder="Enterprise" /></td>
                                        <td><input className="w-full" type="text" placeholder="$190/Month" /></td>
                                        <td><input className="w-full" type="text" placeholder="Unlimited review and 2500 AI credits." /></td>
                                    </tr>
                                    <tr className="px-[20px] py-[10px] text-left grid grid-cols-[1fr_1fr_3fr]">
                                        <td>
                                            <Link>+ Add new license type</Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </form>

            <div>
                <div>

                    <div className="flex gap-[20px] items-center">
                        <div className="w-[24px]">
                            <img className="w-[full]" src="/icons/hashtag-icon.png" alt="Hastag icon" />
                        </div>
                        <h2 className="w-full text-[24px] font-medium">Licenses</h2>
                    </div>

                    <div>

                        {/* Table header */}
                        <div className="px-[20px] py-[10px] grid grid-cols-[1fr_1fr_1fr_1fr_2fr] gap-[20px] border-b border-[#D9D9D9]">

                            <p>Status</p>
                            <p>Plan type</p>
                            <p>Renewed on</p>
                            <p>Renewal date</p>
                            <p>Email Id</p>

                        </div>

                        {/* Table rows */}
                        <div className="px-[20px] py-[10px] grid grid-cols-[1fr_1fr_1fr_1fr_2fr] gap-[20px]">

                            <p>Active</p>
                            <p>Business</p>
                            <p>30-12-2025</p>
                            <p>28-02-2026</p>
                            <p>admin@waspp.com</p>

                        </div>

                    </div>

                </div>
            </div>


        </div>
    )
};

export default EditProduct