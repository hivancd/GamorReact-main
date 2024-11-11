import changeMode from "../change_theme"
// import { useNavigate } from "react-router-dom"

function Header(){
    // const navigate = useNavigate();
    return(
        <div id="header">
        <ul id="nav_page_l">
            <li><button>Home</button></li>
            <li><button>Streams</button></li>
            <li><button>Party</button></li>
            <li><button>Premium</button></li>
        </ul>
        <h1 id="name">Gamor</h1>
        <ul id="account_option_l">
            <li><button id="mode" value="light" onClick={changeMode}>Change to light Mode</button></li>
            <li><a /*onClick={()=>navigate("/Login")}*/>Sign in</a></li>
            <li><a /*onClick={()=>navigate("/CreateAccount")}*/>Create account</a></li>
        </ul>
    </div>
    )
}

export default Header
