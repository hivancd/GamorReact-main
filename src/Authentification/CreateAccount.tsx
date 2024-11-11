import AuthTemplate from "./AuthT";

function store() {
    const usernameElement = document.getElementById("user_name") as HTMLInputElement;
    const username = usernameElement.value;
    
    const pwElement = document.getElementById("pw") as HTMLInputElement;
    const pw = pwElement.value;
    localStorage.setItem(username, pw);
    alert("Account created succesfully");
}

function CreateAccount() {
    return (
        <AuthTemplate header="Create Account" message="Already have an account?" AuthFunc={store} link="Login"></AuthTemplate>
    )
}

export default CreateAccount