import { Message } from "./Message"
import { ReactComponent as SendIcon } from "../../icons/send.svg"
import { useRef, useState } from "react"

export const LiveChat = ({msgs,fct}) => {
    const inp = useRef(null)
    let [msg,setMsg] = useState(null)
    const handleChange = (e) => {
        let input_val = e.target.value
        setMsg(input_val)
    }
    const handleSubmit = (e)=> {
        if (msg){
            fct(msgs.concat([["send",msg]]))
            setMsg(null)
            inp.current.value="";
        }
    }
  return (
    <div className="w-2/3 flex flex-col min-h-[60%] max-h-[90%] overflow-y-hidden">
        <div className="p-2 h-5/6 overflow-y-scroll">
        {msgs.map((msg,index)=>{
            return (
                <Message key={index} type={msg[0]} msg={msg[1]}/>
            );
        })}
        </div>
        <div className="p-2 flex absolute bottom-1 w-2/3">
            <input ref={inp} onChange={handleChange} type="text" className="w-5/6 bg-white rounded-2xl pl-10 py-4"  placeholder="Write a message..." />
            <button>
                <SendIcon onClick={handleSubmit} className="bg-[#66CA98] hover:bg-[#6295E2] p-3 w-14 h-14 rounded-2xl ml-5 hover:rotate-45 transition-all"/>
            </button>
        </div>
    </div>
  )
}
