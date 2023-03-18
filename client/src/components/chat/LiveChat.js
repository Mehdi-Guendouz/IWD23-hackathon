import { Message } from "./Message"
import { ReactComponent as SendIcon } from "../../icons/send.svg"
import { useRef, useState } from "react"
import axios from 'axios'
export const LiveChat = ({msgs,fct}) => {
    const inp = useRef(null)
    let [msg,setMsg] = useState(null)
    const handleChange = (e) => {
        let input_val = e.target.value
        setMsg(input_val)
    }
    const handleSubmit = async(e)=> {
        if (msg){

            // const response = await fetch("http://127.0.0.1:8000/predict", {
            //     method: "POST", // *GET, POST, PUT, DELETE, etc.
            //     mode: "no-cors", // no-cors, *cors, same-origin
            //     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            //     credentials: "same-origin", // include, *same-origin, omit
            //     headers: {
            //       "Content-Type": "application/json",
            //       // 'Content-Type': 'application/x-www-form-urlencoded',
            //     },
            //     redirect: "follow", // manual, *follow, error
            //     referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            //     body: JSON.stringify({"text":"msg"}), // body data type must match "Content-Type" header
            //   });

            new Promise((res, rej) => {
    
                
                // cant send data in body with post so i used get
                axios
                  .post('http://127.0.0.1:8000/predict', {
                    
                    headers: {
                  },
                    data:{
                      text: msg,
                
                    },
                    
                  })
                  .then(async (response) => {
                    console.log("resp siuuu");
                    
                    console.log(response.data);
                    if (response.data?.msg){
                    fct(msgs.concat([["send",msg],["rec",response.data.msg]]))} 
                    if (response.data?.prediction){
               
                        const responsee = await axios.post("http://localhost:5000/api/recommend/", 
                            
                            {'speciality':response.data.prediction}) 
                          
                            console.log(responsee.data)

                    }  
                    res([response.data]);
                  })
                  .catch((err) => {
                    console.log("siuu catched");
                    console.log(err);
                    rej(err)
                  });
              });
            //   console.log(response); // parses JSON response into native JavaScript objects
            
           
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
