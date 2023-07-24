import "./Nav.css"
import logo from "../../img/Boo.png"
import { CoursesArray } from "../HomePage/Courses/Swiper"
import { Link, NavLink } from "react-router-dom"
import { AiFillCaretDown } from "react-icons/ai"
import { Registr } from "../Registration/Registr"
import { useSelector } from "react-redux"

export const Nav = () => {

  const { CoursesData } = useSelector(state => state.CoursesReducers)


    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link className="navbar-brand Logo" to={"/"}> <img src={logo} alt="Logo" /> </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ "--bs-scroll-height": "40px" }}>
                        <li className="nav-item">
                            <NavLink className="nav-link first" aria-current="page" to={"/"}>Գլխավոր</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link" to={"Courses"} >
                                Դասընթացներ
                            </NavLink>
                            <AiFillCaretDown role="button" data-bs-toggle="dropdown" aria-expanded="false" />
                            <ul className="dropdown-menu" >
                                {CoursesData.map(item => {
                                    return (
                                        <li key={item.id}><NavLink className="dropdown-item" to={`Courses/${item.link}`}>{item.Courses}</NavLink></li>
                                    )
                                })}
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink to={"/tests"} className="nav-link">Թեսթեր</NavLink>
                            <AiFillCaretDown role="button" data-bs-toggle="dropdown" aria-expanded="false" />
                            <ul className="dropdown-menu" >
                                {CoursesData.map(item => {
                                    return (
                                        <li key={item.id}><NavLink className="dropdown-item" to={`tests/${item.link}`}>{item.Courses}</NavLink></li>
                                    )
                                })}
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/Ratings"} className="nav-link">Վարկանիշ</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/hamayq"} className="nav-link">Համայք</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/oracuyc"} className="nav-link">Օրացույց</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/mermasin"} className="nav-link">Մեր Մասին</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn" type="submit" onClick={(e) => e.preventDefault()} >
                            <Link>Մուտք</Link>
                        </button>
                        <button className="btn" type="submit" onClick={(e) => e.preventDefault()} >
                            <Link to={"/Registr"}>Գրանցում</Link>
                        </button>  
                    </form>
                </div>
            </div>
        </nav>
    )
}