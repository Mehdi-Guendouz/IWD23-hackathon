
import { ReactComponent as SeenIcon } from "../../icons/arrows.svg"

export const Message = ({type,msg}) => {
    if (type==="ext") {
        return (
<div className={"flex flex-col items-start w-1/2"}>
                <div className={"flex flex-row-reverse items-end "}>
                    <span className={"py-2 w-full px-3 text-white bg-[#6295E2] rounded-xl rounded-bl-none relative"}>{msg}</span>
                    <img className={"mr-3 w-6 h-6"} src={require("../../icons/K.png")} alt="" />
                </div>
                <div className="flex flex-col p-4 justify-center text-center ml-9 mt-2 w-2/3 bg-white items-center">
                    <span className="font-semibold">Avaible Doctors</span>
                    <span className="text-gray-500">Select a Doctor</span>
                    <div className="flex flex-col space-y-2 pt-4">
                        <div className="flex flex-row justify-start space-x-2">
                            <img className="w-14 h-14 object-cover rounded-full" src={require("../../img/taylor.png")} alt="" />
                            <div className="text-left flex flex-col justify-between py-1.5">
                                <span className="text-gray-900 font-semibold text-sm w-fit">Dr. Taylor Swift</span>
                                <span className="text-gray-400 text-xs">Cardiologist</span>
                            </div>
                        </div>
                        <div className="flex flex-row justify-start space-x-2">
                            <img className="w-14 h-14 object-cover rounded-full" src={require("../../img/doctor.png")} alt="" />
                            <div className="text-left flex flex-col justify-between py-1.5">
                                <span className="text-gray-900 font-semibold text-sm w-fit">Dr. Manel Belguenbour</span>
                                <span className="text-gray-400 text-xs">Cardiologist</span>
                            </div>
                        </div>
                    </div>
                    <button className="bg-[#EBE4FF] hover:bg-violet-200 transition-all mt-8 text-[#9974FF] py-2 px-12 font-semibold rounded-xl">Follow Doctors</button>
                </div>
                <div className={"flex flex-row pl-9 justify-end "}>
                    <span className="text-sm text-[#A7A6A5]">7:24</span>
                    <SeenIcon className="w-5 h-5"/>
                </div>
        </div>
        );

        
    }
    else {
        return (
            <div className={type==="send"?"flex flex-col items-end justify-end":"flex flex-col items-start w-1/2"}>
                <div className={type==="send"?"flex flex-row items-end ":"flex flex-row-reverse items-end "}>
                    <span className={type==="send"?"py-2 px-3 bg-white rounded-xl rounded-br-none relative":"py-2 w-full px-3 text-white bg-[#6295E2] rounded-xl rounded-bl-none relative"}>{msg}</span>
                    <img className={type==="send"?'ml-3 w-6 h-6':"mr-3 w-6 h-6"} src={require("../../icons/K.png")} alt="" />
                </div>
                <div className={type==="send"?"flex flex-row pr-9 justify-end ":"flex flex-row pl-9 justify-end "}>
                    <span className="text-sm text-[#A7A6A5]">7:24</span>
                    <SeenIcon className="w-5 h-5"/>
                </div>
            </div>
          )
    }
  
}
