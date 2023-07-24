import "./learn.css"
import calendar from "../../../img/Illustration Calendar.jpg"



export const Learn = ()=>{
    return(
        <div className="Learn-App">
            <section>
                <h3>Սովորի՛ր քեզ հարմար պահի</h3>
            </section>
            <div className="Learn_Center">
                <div className="Learn_img_div">
                    <img src={calendar} alt="" />
                </div>
                <div className="Learn_text-div">
                    <h4>Որոշի՛ր և նշի՛ր սովորելու համար նախընտրելի ժամերն
                         ու օրերը օրացույցի վրա, կազմի՛ր քո գրաֆիկը, շարժվի՛ր
                          քո արագությամբ․ դու ազատ ես քո ընտրության մեջ</h4>
                </div>
            </div>
        </div>
    )
}