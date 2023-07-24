import "./Header.css"
import img from "../../../img/gril.jpg"
import { BsArrowUpRight } from "react-icons/bs"

export const Header = ()=>{
    return (
        <div className="Header-App">
           <div className="container">
                <div className="Header-Left-div">
                    <h3>Այստեղ դու կգտնես ցանկացած ոլորտ որով հետաքրքրված ես, բայց սկզբի համար․․․</h3>
                    <button>Անցնենք IQ թեստը <BsArrowUpRight /></button>
                </div>
                <div className="Header-Right-div">
                    <img src={img} alt="" />
                </div>
           </div>
        </div>
    )
}