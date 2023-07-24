import "./Mathematics.css"
import Mathematics_image from "../../../../img/Mathematics_image.png"
import { AiOutlineSearch } from "react-icons/ai"
import { SectioOne, SectioTwo } from "./Utils"

export const Mathematics = () => {
  return (
    <div className='Mathematics-App'>
      <div className="Mathematics_image" >
        <img src={Mathematics_image} />
        <div className="Courses_title">
          <h2>Մաթեմատիկա</h2>
        </div>
        <div className="Mathematics_div_items">
          <div></div>
          <p>Ուսումնասիրված 40%</p>
        </div>
        <form onSubmit={(e) => e.preventDefault()} >
          <input type="text" placeholder="Որոնել նախընտրելի թեման․․․" />
          <AiOutlineSearch type="submit" />
        </form>
      </div>

      <div className="Mathematics_Main_div">
        <div className="Mathematics_Main_Section-one">
          <h3>Բաժին 1․ Բնական թվեր և զրո</h3>
        </div>
        {
          SectioOne.map((item, i) => {
            return (
              <div key={item.id} className="Mathematics_Main_Section-Items">
                <div style={{ backgroundColor: i % 2 === 0 ? "#00DF67" : "#00823C" }} ></div>
                <h3 style={{ color: i % 2 === 0 ? "#108948" : "#00823C" }} >{item.title} <span>{item.text}</span> </h3>
              </div>
            )
          })
        }

        <div className="Mathematics_Main_Section-Two">
          <h3>Բաժին 2․ Գործողություններ բնական թվերով</h3>
        </div>
        {
          SectioTwo.map((item, i) => {
            return (
              <div key={item.id} className="Mathematics_Main_Section-Items">
                <div style={{ backgroundColor: i % 2 === 1 ? "#00DF67" : "#00823C" }} ></div>
                <h3 style={{ color: i % 2 === 1 ? "#108948" : "#00823C" }} >{item.title} <span>{item.text}</span> </h3>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

