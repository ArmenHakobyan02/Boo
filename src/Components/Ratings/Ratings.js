import "./Ratings.css"
import { AiOutlineSearch } from "react-icons/ai"
import { CoursesArray } from "../HomePage/Courses/Swiper"
import { useSelector } from "react-redux"

const RatingsArray = [
    {
        id: 1,
        name: "Արամ Հովհաննիսյան",
        count: 27750
    },
    {
        id: 2,
        name: "Արամ Հովհաննիսյան",
        count: 27750
    },
    {
        id: 3,
        name: "Արամ Հովհաննիսյան",
        count: 27750
    },
    {
        id: 4,
        name: "Արամ Հովհաննիսյան",
        count: 27750
    }
]

export const Ratings = () => {

      const { CoursesData } = useSelector(state => state.CoursesReducers)


    return (
        <div className='Ratings-App'>
            <div className="container">
                <div className="Ratings-top">
                    <div className="Rating-top-items">
                        <p>Դասընթաց</p>
                        <select>
                            <option>Ընտրել</option>
                            {
                                CoursesData.map((item) => {
                                    return (
                                        <option key={item.id}>{item.Courses}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="Rating-top-items">
                        <p>Թեստ</p>
                        <select>
                            <option>Ընտրել</option>
                            {
                                CoursesData.map((item) => {
                                    return (
                                        <option key={item.id}>{item.Courses}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="Rating-top-items">
                        <p>Մասնակից</p>
                        <input type="text" placeholder="Որոնել" />
                        <AiOutlineSearch type="submit" />
                    </div>
                </div>
                <div className="Ratings-Center">
                    {
                        RatingsArray.map(item => {
                            return (
                                <div className="Ratings-Center-items" key={item.id}>
                                    <div className="Ratings-Center-items-count">{item.id}</div>
                                    <div className="Ratings-Center-items-Name">
                                        <p>{item.name}</p>
                                    </div>
                                    <div className="Ratings-Center-items-right-div">
                                        <p>{item.count}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div >
    )
}

