import React,{useState} from "react";


const Login = () => {
const [usernames,setUsernames] = useState("");
const [userNameError,setUserNameError] = useState("");

const [email,setEmail] = useState("");
const [emailError,setEmailError] = useState("");

const [password,setPassword] = useState("");
const [passwordError,setPasswordError] = useState("");

const [hasBeenSubmitted,setHasBeenSubmitted] = useState(false);

const validateUsernames = (e) => {
    setUsernames(e.target.value);
    if(e.target.value.length < 2) {
        setUserNameError("Username must be at least 2 characters");
    } else {
        setUserNameError("Error");
    }
}

const validateEmail = (e) => {
    setEmail(e.target.value);
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    if(!emailRegex.test(e.target.value)) {
        setEmailError("Email must be at least 5 characters");
    } else {
        setEmailError("Error");
    }
}

const validatePassword = (e) => {
    setPassword(e.target.value);
    if(e.target.value.length < 8) {
        setPasswordError("Password must be at least 8 characters");
    } else {
        setPasswordError("Error");
    }
}

const creatUser = (e) => {
    e.preventDefault();
    if(usernames.length < 2) {
        setUserNameError("Username must be at least 2 characters");
    }
    if(email.length < 5) {
        setEmailError("Email must be at least 5 characters");
    }
    if(password.length < 8) {
        setPasswordError("Password must be at least 8 characters");
    }

    const user = {usernames,email,password};
    console.log("welcome",user);

    console.log("welcome",user);
    

    setUsernames("");
    setEmail("");
    setPassword("");
    setHasBeenSubmitted(true);

   
}

// const message = () => {
//     if(hasBeenSubmitted){
//         return "Thank you for submitting the form!";
//     } else {
//         return "Welcome, please submit the form";
//     }
// };



    return (
        
        <>
        <form onSubmit={creatUser}>
            {
            hasBeenSubmitted ?
            <h3>Thank you for submitting the form!</h3>:
            <h3>Welcome, please submit the form</h3>
            }


            {/* <h3>{message()}</h3> */}
            <div>
                <label>Username</label>
                <input type="text" value={usernames} onChange={(e) => setUsernames(e.target.value)} />
                {userNameError ? <p style={{color:'red'}}>{userNameError}</p> : ""}

            </div>
            <div>
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                {emailError ? <p style={{color:'red'}}>{emailError}</p> : ""}
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                {passwordError ? <p style={{color:'red'}}>{passwordError}</p> : ""}
            </div>
            <input type="submit" value="Create User" disabled={!!(userNameError || emailError || passwordError)} />
        </form>
        <p>{usernames}</p>
        <p>{email}</p>
        <p>{password}</p>

        </>

    )
}
export default Login;