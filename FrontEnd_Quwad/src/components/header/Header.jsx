import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

function Header() {
    return(
        <div className="flex justify-between">
                
            <div className="lg:flex gap-[20px] items-center">

                {/* Quwda Icon */}
                <Link to="/">
                    <div className="flex gap-[10px] items-center">
                        <div className="w-[48px]">
                            <img className="w-full" src="icons/quwad-icon-square-background.png" alt="Quwad Icon" />
                        </div>
                        <h1 className="text-[24px]">Quwad</h1>
                    </div>
                </Link>

                {/* Page links */}
                <ul className="flex gap-[10px]">
                    <Link to="/documents">Documents</Link>
                    <HashLink to="/#pricing">Pricing</HashLink>
                </ul>
            </div>

            <div className="hidden lg:flex gap-[20px]">
                <Link to="/waitinglist" className="p-[10px] border border-[#D84315] rounded-[10px]">Sign in</Link>
                <Link to="/waitinglist" className="p-[10px] border border-[#D84315] rounded-[10px] text-[#D84315]">Sign up</Link>
            </div>

        </div>
    )
};

export default Header