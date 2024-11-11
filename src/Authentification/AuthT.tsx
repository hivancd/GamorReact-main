import LoginBackground from "./login_background"
import { useNavigate } from "react-router-dom"

function AuthTemplate(props: { header: string, message: string,link:string, AuthFunc: VoidFunction}) {
    const navigate = useNavigate();
    return (
        <>
            <LoginBackground />
            <div className="container">
                <form className="login_form">
                    <h1>{props.header}</h1>
                    <label htmlFor="user_name">Username</label>
                    <br />
                    <input type="text" id="user_name" />
                    <br />
                    <label htmlFor="pw">Password</label>
                    <br />
                    <input type="password" id="pw" />
                    <input className="submit" type="submit" onClick={props.AuthFunc}></input>
                    <p>{props.message}<a onClick={()=>navigate("/"+ props.link)}>Click Here</a> </p>
                    <a onClick={()=>navigate("/")} >Main Page</a>
                </form>
            </div>
        </>
    )
}

export default AuthTemplate