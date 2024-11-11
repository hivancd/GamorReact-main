import AuthTemplate from "./AuthT";

// function check() {
//     const usernameElement = document.getElementById("user_name") as HTMLInputElement;
//     usernameElement.value = usernameElement.innerHTML
//     const username = usernameElement.value;
//     // const username = usernameElement.value;
//     const pwElement = document.getElementById("pw") as HTMLInputElement;
//     const pw = pwElement.value;
//     const pwans = localStorage.getItem(username);
//     if (pwans == pw) {
//         alert("Succesfully logged in");
//     }
//     else {
//         alert("Wrong username or password");
//     }
// }

function check() {
    const usernameElement = document.getElementById("user_name") as HTMLInputElement;
    usernameElement.value = usernameElement.innerHTML
    const username = usernameElement.value;
    const pwElement = document.getElementById("pw") as HTMLInputElement;
    const pw = pwElement.value;
    const pwans = localStorage.getItem(username);
    if (pwans == pw) {
        alert("Succesfully logged in");
    }
    else {
        alert("Wrong username or password");
    }
}

function Login() {

    return (
        <AuthTemplate header="Login" message="Don't have an account?" link="CreateAccount" AuthFunc={check}></AuthTemplate>
    )

}

export default Login

