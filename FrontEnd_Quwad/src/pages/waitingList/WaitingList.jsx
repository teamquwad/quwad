import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import { getWaitingList } from "../../api/marketing/waitingList.js";
import { useState } from "react";
import {useDispatch} from "react-redux";
import { setLoading } from "../../store/reducer/loadingSlice.js";
import LoadingScreen from "../../components/loading/LoadingScreen.jsx";
import { setAlertMessage } from "../../store/reducer/alertSlice.js";
import AlertMessage from "../../components/alertMessage/AlertMessage.jsx";

function WaitingList() {

    let [userInput, setUserInput] = useState({});
    let dispatch = useDispatch();

    function handleChange(e){
        e.preventDefault();
        setUserInput({
            ...userInput,
            [e.target.name]: e.target.value,
        })
    }

    async function handleJoinWaitingList(e) {
        e.preventDefault();
        
        if(userInput.emailId){
            // console.log(userInput.emailId);
            try {
                dispatch(setLoading(1));
                let data = await getWaitingList(userInput);
                // console.log(data);
                if(data){
                    dispatch(setAlertMessage(data.msg));
                    setUserInput({});
                }
            } catch (e) {
                console.log(e);
            } finally {
                dispatch(setLoading(0));
            }
        }else{
            dispatch(setAlertMessage("Enter an email id to join the waiting lists."))
        }
    }

    return(
        <div className="p-[50px] grid gap-[100px]">

            <Header/>
            <LoadingScreen/>
            <AlertMessage/>

            <div className="md:grid gap-[50px] grid-cols-3">

                <div className="col-start-2 grid gap-[50px]">
                    <h1 className="text-[32px] font-medium text-center">Join the waiting list.</h1>

                    {/* Join waiting list form */}

                    <div className="w-full">
                        <form className="grid gap-[20px]" onSubmit={handleJoinWaitingList}>
                            <div className="border rounded-[10px] w-full">
                                <input className="py-[15px] text-center w-full" type="email" placeholder="Enter email id"
                                    name="emailId" value={userInput.emailId || ""} onChange={handleChange}
                                />
                            </div>
                            <Link
                                className="w-full flex gap-[10px] justify-center items-center py-[10px] rounded-[10px] bg-[#713DEC] text-[#fff]"
                                onClick={handleJoinWaitingList}
                            >
                                <div className="w-[24px]">
                                    <img className="w-full" src="/icons/rocket-icon.png" alt="rocket icon" />
                                </div>
                                <p>Join</p>
                            </Link>
                        </form>
                    </div>

                    <div className="p-[20px] grid gap-[20px] border rounded-[10px]">
                        <h2 className="text-center text-[24px] font-medium" >About Quwad</h2>
                        <p className="text-center">A licenses and subscriptions management application.</p>
                        <div className="flex justify-center">
                            <ul className="grid gap-[10px]">
                                <li>Create and validate licenses and subscriptions easily.</li>
                                <li>Avoid revenue loss and get a clear view of who is using you products.</li>
                                <li>Flat monthly rates and predictable bill.</li>
                                <li>Unlike other providers, no need to share revenue and pay higher bills.</li>
                                <li>We scale-up our infrastructure before taking more users to avoid throttling and over selling.</li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>

            {/* Footer */}

            <section>
                <div className="flex justify-center">
                    © 2025 Quwad — All rights reserved.
                </div>
            </section>

        </div>
    )
};

export default WaitingList
