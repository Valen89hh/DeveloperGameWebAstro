import { useState } from "react";

const ThemMode = ({
    className = ""
}) => {

    const [imgMode, setImgMode] = useState("/icons/light-mode.svg")

    return ( <div className={"w-7 p-1 border-solid border-slate-700 border-2 rounded-full "+className} onClick={()=>{
        console.log("Click")
        if(imgMode == "/icons/light-mode.svg"){
            setImgMode("/icons/night-mode.svg")
        }else{
            setImgMode("/icons/light-mode.svg")
        }
        document.documentElement.classList.toggle("dark")

    }}>
        <img src={imgMode} alt="img" className="text-white" />
    </div> );
}
 
export default ThemMode;