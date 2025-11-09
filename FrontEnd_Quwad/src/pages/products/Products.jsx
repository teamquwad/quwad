import { Link } from "react-router-dom";

function Products() {
    return(
        <div className="grid gap-[20px]">
            <h2 className="text-[24px] font-medium">Products</h2>

            <div className="grid xl:grid-cols-6 gap-[20px]">

                <Link>
                    <div className="p-[20px] bg-[#C2B0FF] rounded-[10px] grid items-center">
                        <h3>DocEditorPro</h3>
                        <p>Licenses: 008</p>
                    </div>
                </Link>

                <Link>
                    <div className="p-[20px] bg-[#80B2F5] rounded-[10px] grid items-center">
                        <h3>Apporama</h3>
                        <p>Licenses: 1158</p>
                    </div>
                </Link>

                <Link className="p-[20px] bg-[#fff] border border-[#000] rounded-[10px] grid items-center">
                    <p>+ New product</p>
                </Link>
            </div>

        </div>
    );
}

export default Products