import "./using.css"
import One_img from "../../../img/Illustration 1.jpg"
import Two_img from "../../../img/Illustration 2.jpg"
import Tree_img from "../../../img/Illustration 3.jpg"

export const Using = () => {
    return (
        <div className="Using-App">
            <section >
                <h3>Ինչպես ենք օգտվում</h3>
            </section>
            <div className="container">
                <div className="using-description">
                    <h4>Քայլ 1 Ընտրում ենք դասընթացը և սկսում ուսումնասիրել նյութը</h4>
                    <img src={One_img} alt="" />
                </div>
                <div className="using-description">
                    <img src={Two_img} alt="" />
                    <h4>Քայլ 2 Այնուհետև անցնում թեստերը  գիտելիքներն ստուգելու համար</h4>
                </div>
                <div className="using-description">
                    <h4>Քայլ 3 Նայում ենք վարկանիշը և քննարկում արդյունքները</h4>
                    <img src={Tree_img} alt="" />
                </div>
            </div>


        </div>
    )
}