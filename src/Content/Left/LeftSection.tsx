import { useNavigate } from "react-router-dom" 

function Left() {
    const navigate = useNavigate();
    return (
        <div id="left">
            <p id="big_font_text">start <br></br><b>streaming</b><br></br> games <br></br> diferently <br></br></p>
            <p id="small_font_text">gamor now has <b>stream party</b> platform</p>
            <div id="create_account_container">
                <a onClick={()=>navigate("/CreateAccount")}>Create account</a>
            </div>
            <a onClick={()=>navigate("/Login")}>Log in</a>
        </div>
    )
}

export default Left