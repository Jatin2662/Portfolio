

import react, { useEffect } from "react";

function MessageBox({text, showMessage, setShowMessage}){

    useEffect(()=>{
        if(showMessage){
            const timer = setTimeout(()=>{
                setShowMessage(!showMessage)
            }, 2900)
            return () => clearTimeout(timer);
        }
    },[])

    return(
        <div className="message-box flex">{text}</div>
    );
}

export default MessageBox;