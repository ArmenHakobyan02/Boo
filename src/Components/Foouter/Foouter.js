import "./Foouter.css"
import Footer_Logo from "../../img/Group.png"
import instagram_icon from "../../img/instagram.png"
import facebook_icon from "../../img/facebook.png"

export const Foouter = () => {
    return (
        <div className="Foouter-App">
            <div className="container">
                <div className="Footer-logo" >
                    <img src={Footer_Logo} alt="Logo_Footer" />
                </div>
                <div className="Footer-Form">
                    <div className="Footer_Form_items">
                        <h6>Մուտքագրի՛ր էլ․փոստդ և սկսի՛ր</h6>
                        <input type="email" placeholder="Ձեր էլ․փոստը" id="Email" />
                        <button>Մուտք</button>
                        <button>Գրանցում</button>
                    </div>
                </div>
                <div className="Footer-Social" >
                    <div className="container">
                        <h6>Հետևե՛ք մեզ այստեղ</h6>
                        <a href=""><img src={instagram_icon} alt="instagram" /></a>
                        <a href=""><img src={facebook_icon} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}