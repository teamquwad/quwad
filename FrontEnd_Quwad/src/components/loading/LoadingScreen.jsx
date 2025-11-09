import {useSelector} from "react-redux";

function LoadingScreen() {

  let display = useSelector((state)=>state.loadingReducer.display)
//   console.log(display);
  

  if(!display) return null;

    return(
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-[#fff]/50">
            <div className="px-[10px] py-[5px] rounded-[10px] bg-indigo-700 text-[#fff]">
                <p>Loading ...</p>
            </div>
        </div>
    )
}

export default LoadingScreen
