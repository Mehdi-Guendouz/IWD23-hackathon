import { useState } from "react"
import { LiveChat } from "../components/chat/LiveChat"
import { SuggestionsSection } from "../components/chat/SuggestionsSection"
import Navbar from "../components/navbar/Navbar"
import {motion} from "framer-motion"
export const ChatPage = () => {
    const [msgs,setMsgs]=useState([["rec","Hello, how can I help you ?"]])
   // const [msgs,setMsgs] = useState([["send","Hello, Yes, I feel a high body temperture."],["ext","Heres a list of doctors",[]]])
    //setMsgs(msgs.concat([["rec","Error...."]]))
    return (
    <div className="overflow-y-hidden h-screen">
    <Navbar/>
    <motion.div
      initial={{opacity:0,height:"0vh",bottom:0}}
      animate={{opacity:1,height:"100vh"}}
      transition={{duration:0.5}}
    className="bg-[#F4F6F5] font-poppins h-full flex flex-row overflow-y-hidden">
        <SuggestionsSection fct={setMsgs} msgs={msgs}/>
        <LiveChat msgs={msgs} fct={setMsgs}/>
    </motion.div>
    </div>
    
  )
}
