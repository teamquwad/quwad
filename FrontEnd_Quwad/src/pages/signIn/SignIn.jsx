import { Link } from "react-router-dom"
import QuwadIcon from "../../components/app/quwadIcon/QuwadIcon"
import { useState } from "react"

function SignIn() {

    let [userInput, setUserInput] = useState({});

    function handleChange(e) {
        e.preventDefault();
        setUserInput({
            ...userInput,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(userInput);
        setUserInput({})
    }

    return(
        <div className="min-h-dvh grid grid-cols-2">
            <div className="grid justify-center items-center">
                <div>
                    <QuwadIcon/>
                </div>
            </div>
            <div className="grid justify-center items-center">
                <form className="min-w-[300px] grid gap-[20px]">
                    <input name="developerEmailId" onChange={handleChange} className="p-[5px] border rounded-[5px]" type="text" placeholder="Enter email id" value={userInput.developerEmailId || ""} />
                    <input name="developerPassword" onChange={handleChange} className="p-[5px] border rounded-[5px]" type="password" placeholder="Enter password" value={userInput.developerPassword || ""} />
                    <Link onClick={handleSubmit} className="p-[5px] bg-indigo-500 text-center text-[#fff] rounded-[5px]">Sign In</Link>
                    <p>Don't have an account? <Link to="/signup" className="text-indigo-500">Sign Up</Link>. </p>
                </form>
            </div>
        </div>
    )
};

export default SignIn