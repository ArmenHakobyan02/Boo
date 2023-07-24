import { useRef, useState } from "react"
import "./Registr.css"
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"

export const Registr = () => {
    const [ShowPassword, SetShowPassword] = useState(false)
    const [avatar, setAvatar] = useState("https://images.unsplash.com/photo-1473861646675-0252edc45daa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80");

    const [ChangeRadio, SetChangeRadio] = useState({
        name: "",
        lastName : "",
        password: "",
        email : "",
        gendre : "",
        role : "",
        institution : "",
        country : ""
    })

    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = event => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setAvatar(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    }

    const OnChnageHandler = (event) => {
        SetChangeRadio({
            ...ChangeRadio,
            [event.target.name] : event.target.value
        })
    }

    return (
        <div className='Registr-App'>
            <div className="container">
                <div className="Registr-top">
                    <h2>Գրանցում</h2>
                    <p>ՈԻշադրություն, գրանցվելու համար պետք է լրացնել բոլոր տողերը։ Կայքում գրանցվելն անվճար է</p>
                </div>
                <div className="Registr-Form">
                    <h3>Սեռ</h3>
                    <form >
                        <div className="Registr-gender">
                            <input
                                type="Radio"
                                name="gendre"
                                value={"Արական"}
                                onChange={OnChnageHandler}
                                id="Արական" required />
                            <label htmlFor="Արական">Արական</label>
                            <input
                                type="Radio"
                                name="gendre"
                                value={"Իգական"}
                                onChange={OnChnageHandler}
                                id="Իգական" required />
                            <label htmlFor="Իգական">Իգական</label>
                        </div>
                        <h3>Դերը պորտալում</h3>
                        <div className="Registr-role">
                            <div className="Registr-role-item">
                                <label htmlFor="Նաղադպրոցական">
                                    <input
                                        type="Radio"
                                        name="role"
                                        value={"Նաղադպրոցական"}
                                        onChange={OnChnageHandler}
                                        id="Նաղադպրոցական" required />
                                    Նաղադպրոցական
                                </label>
                                <label htmlFor="Դպրոցական">
                                    <input
                                        type="Radio"
                                        name="role"
                                        value={"Դպրոցական"}
                                        onChange={OnChnageHandler}
                                        id="Դպրոցական" required />
                                    Դպրոցական
                                </label>
                                <label htmlFor="ՈՒսանող">
                                    <input
                                        type="Radio"
                                        name="role"
                                        value={"ՈՒսանող"}
                                        onChange={OnChnageHandler}
                                        id="ՈՒսանող" required />
                                    ՈՒսանող
                                </label>
                            </div>
                            <div className="Registr-role-item">
                                <label htmlFor="Դասախոս">
                                    <input
                                        type="Radio"
                                        name="role"
                                        value={"Դասախոս"}
                                        onChange={OnChnageHandler}
                                        id="Դասախոս" required />
                                    Դասախոս
                                </label>
                                <label htmlFor="Ծնող">
                                    <input
                                        type="Radio"
                                        name="role"
                                        value={"Ծնող"}
                                        onChange={OnChnageHandler}
                                        id="Ծնող" required />
                                    Ծնող
                                </label>
                                <label htmlFor="Հյուր">
                                    <input
                                        type="Radio"
                                        name="role"
                                        value={"Հյուր"}
                                        onChange={OnChnageHandler}
                                        id="Հյուր" 
                                        required />
                                    Հյուր
                                </label>
                            </div>
                            <div className="Registr-role-item">
                                <input
                                    type="file"
                                    style={{ display: "none" }}
                                    onChange={handleFileChange}
                                    ref={fileInputRef}
                                />
                                <div id="preview">
                                    <button id="upload-button" onClick={handleButtonClick}>🙂</button>
                                    <div style={{ backgroundImage: `url(${avatar})` }} id="avatar"></div>
                                </div>
                            </div>
                        </div>
                        <div className="Regsitr-Inputs-item" >
                            <div className="flex-colum">
                                <label>Էլ-փոստ</label>
                                <br />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={ChangeRadio.email}
                                    onChange={OnChnageHandler}
                                    placeholder="Մուտկագրեք Ձեր Էլ փոստի հասցեն"
                                    required />
                                <label>Գաղտնաբառը</label>
                                <input
                                    type={ShowPassword ? "text" : "password"}
                                    id="password"
                                    onChange={OnChnageHandler}
                                    value={ChangeRadio.password}
                                    name="password" 
                                    placeholder="Մուտկագրեք Ձեր գաղտնաբառը" 
                                    required />
                                {ShowPassword ?
                                    <AiFillEye onClick={() => SetShowPassword(!ShowPassword)} /> :
                                    <AiFillEyeInvisible onClick={() => SetShowPassword(!ShowPassword)} />
                                }
                            </div>
                            <div className="flex-colum">
                                <label>Անուն</label>
                                <br />
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name"
                                    value={ChangeRadio.name}
                                    onChange={OnChnageHandler} 
                                    placeholder="Մուտկագրեք Ձեր Անունը"
                                    required />
                                <br />
                                <label>Ազգանունը</label>
                                <br />
                                <input 
                                    type="text" 
                                    id="lastName" 
                                    name="lastName"
                                    value={ChangeRadio.lastName}
                                    onChange={OnChnageHandler} 
                                    placeholder="Մուտկագրեք Ձեր ազգանունը"
                                    required />
                            </div>
                        </div>
                        <div className="Registr-bottom">
                            <section>
                                <h4>ՈՒսումնական հաստատություն</h4>
                            </section>
                            <div className="Registr-bottom-item">
                                <div className="flex-colum">
                                    <label>Երկիր</label>
                                    <select className="country" name="country" onChange={OnChnageHandler}>
                                        <option>Հայաստան</option>
                                        <option>Ռուսաստան</option>
                                        <option>Ամերիկա</option>
                                    </select>
                                    <br />
                                    <Link to={"/"}>New Error</Link>
                                </div>
                                <div className="flex-colum">
                                    <label>ՈՒսումանակն հաստատության որոնում</label>
                                    <input 
                                        type="text" 
                                        id="institution" 
                                        name="institution" 
                                        value={ChangeRadio.institution} 
                                        onChange={OnChnageHandler}  
                                        required
                                    />
                                </div>
                                <button type="submit" >Clcik Me</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

