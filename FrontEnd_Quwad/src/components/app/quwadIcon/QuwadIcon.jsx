import { Link } from "react-router-dom"

function QuwadIcon() {
    return(
        <Link to="/dashboard">
            <div className="flex gap-[10px] items-center">
                <div className="w-[48px]">
                    <img className="w-full" src="icons/quwad-icon-square-background.png" alt="Quwad Icon" />
                </div>
                <h1 className="text-[24px]">Quwad</h1>
            </div>
        </Link>
    )
}

export default QuwadIcon