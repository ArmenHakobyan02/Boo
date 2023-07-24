import "./About_Courses.css"
import img from "../../../img/Illustration Course.jpg"

export const About_Courses = () => {
    const AboutCoursesArray = [
        {
            id: Math.random(),
            title: "Դասընթացները կազմված են լավագույն մասնագետների կողմից"
        },
        {
            id: Math.random(),
            title: "Ուսուցման նյութերի ինֆորմացիան վստահելի աղբյուրներից է"
        },
        {
            id: Math.random(),
            title: "Ընտրված դասընթացները հիմնված են լսարանի կարիքների վրա"
        },
        {
            id: Math.random(),
            title: "Յուրաքանչյուր դասընթացին հաջորդող թեստի լրացումը պարտադիր է"
        }
    ]

    return (
        <div className="About_Courses-App">
            <section>
                <h3>Դասընթացների մասին</h3>
            </section>
            <div className="container">
                <div className="About_Courses_Left_div">
                {
                    AboutCoursesArray.map(item => {
                        return (
                            <div className="About_Courses_Left_item" key={item.id}>
                                <div className="About_Courses_Left_div_items_square"></div>
                                <div className="About_Courses_title">
                                    <h3>{item.title}</h3>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
                <div className="About_Courses_Right_div">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    )
}