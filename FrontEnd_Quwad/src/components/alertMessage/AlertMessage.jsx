
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setAlertMessage } from "../../store/reducer/alertSlice.js";

function AlertMessage() {

    let message = useSelector((state)=> state.alertReducer.message)
    let dispatch = useDispatch();

    useEffect(() => {
        let timer;

        if (message) {
            // Set timeout to clear message after 5 seconds
            timer = setTimeout(() => {
                dispatch(setAlertMessage(""));
            }, 5000);
        }

        // Cleanup the timer on component unmount or message change
        return () => clearTimeout(timer);

    }, [message]); 

    if(!message) return null;

    return(
        <div className="p-[5px] bg-yellow-700 text-[#fff] text-end">
            <p>{message}</p>
        </div>
    )
}

export default AlertMessage