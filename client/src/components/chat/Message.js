
import { ReactComponent as SeenIcon } from "../../icons/arrows.svg"

export const Message = ({type,msg}) => {
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
