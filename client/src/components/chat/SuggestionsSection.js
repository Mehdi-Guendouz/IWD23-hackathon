import { useState } from "react"
import { ReactComponent as PlusIcon } from "../../icons/plus.svg"
export const SuggestionsSection = ({fct,msgs}) => {
    const handleClick = (e,msg) => {
        fct(msgs.concat([["send",msg]]))
    }
    const handleReset = (e) => {
        fct([])
    }
    const [suggestions,setSuggestions] = useState(["High Body Temperature.","Asthema, Pain in the heart","Discomfert","Anxiety","Skin peeling"])
  return (
    <div className="bg-[#66CA98] rounded-tr-2xl w-1/3 pt-24 flex flex-col items-center">
        <button href="" onClick={(e)=>handleReset(e)} className=""><PlusIcon className="p-6 rounded-full w-20 h-20 bg-white transition-all hover:rotate-45"/></button>
        <div className="list py-10 space-y-3 flex flex-col w-full items-center">
            {suggestions.map((el,index)=>{
                return (
                    <button key={index} onClick={(e)=>handleClick(e,el)} className="hover:bg-[#89f7c0] text-md py-4 w-5/6 bg-[#8EDAB4] transition-all text-white font-medium rounded-2xl">{el}</button>
                );
            })}
        </div>
    </div>
  )
}
