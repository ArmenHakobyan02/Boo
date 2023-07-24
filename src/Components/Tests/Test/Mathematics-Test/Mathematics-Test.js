import "./Mathematics-Test.css"
import { AiOutlineSearch } from "react-icons/ai"
import Mathematics_image from "../../../../img/Mathematics_image.png"
import Math from "../../../../img/math.jpg"
import Maths1 from "../../../../img/maths (1).png"
import Maths from "../../../../img/maths.jpg"

export const Mathematics_Test = () => {

    const MathematicsTestsArray = [
        {
            id: 1,
            title: "Բնական թվեր և զրո",
            img: Math
        },
        {
            id: 2,
            title: "Գործողություններ բնական թվերով",
            img: Maths1
        },
        {
            id: 3,
            title: "Բնական թվերի բաժանելիությունը",
            img: Maths
        }
    ]

    return (
        <div className='Mathematics_Test-App'>
            <div className="Mathematics_Test_image" >
                <img src={Mathematics_image} />
                <div className="Mathematics_Test_title"><h2>Մաթեմատիկա</h2></div>
                <div className="Mathematics_Test_div_items">
                    <div></div>
                    <p>ԱՆցած 40%</p>
                </div>
                <form onSubmit={(e) => e.preventDefault()} >
                    <input type="text" placeholder="Որոնել նախընտրելի թեման․․․" />
                    <AiOutlineSearch type="submit" />
                </form>
            </div>
            <div className="Mathematics_Test_Main">
                <div className="container">
                    {
                        MathematicsTestsArray.map(item => {
                            return (
                                <div className="Mathematics_Test_Main_Item" key={item.id}>
                                    <img src={item.img} alt="" />
                                    <div className="Mathematics_Test_Main_Items ShowColorOne">
                                        <h4>{item.title}</h4>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

