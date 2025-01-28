import React,{useState} from "react";

const Login = () => {

// this is the first way to get the value of the input field
// we define a state for each input field

const [firstName,setName]=useState("");
const [firstNameError, setFirstNameError] = useState('');

const [lastname,setLastname]=useState("");
const [lastNameError, setLastNameError] = useState('');

const [password,setPassword]=useState(""); 
const [passwordError, setPasswordError] = useState('');

const [confirmPassword,setConfirmPassword]=useState("");
const [confirmPasswordError, setConfirmPasswordError] = useState('');

const [email,setEmail]=useState("");
const [emailError, setEmailError] = useState('');




// to prevent the page from refreshing
const createUsers = () => {
    e.preventDefault();


    const newUsers = {name,lastname,password,confirmPassword,email};
    console.log(newUsers);
    setName("");
    setLastname("");
    setPassword("");
    setConfirmPassword("");
    setEmail("");
    }


    const handleFirstName = (e) => {
        setName(e.target.value);
        if(e.target.value.length < 3) {
            setFirstNameError("First Name must be at least 3 characters long!");
        } else {
            setFirstNameError('');
        }
    }

    const handleLastname = (e) => {
        setLastname(e.target.value);
        if(e.target.value.length < 3) {
            setLastNameError("Last Name must be at least 3 characters long!");
        } else {
            setLastNameError('');
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 3) {
            setEmailError("Email must be at least 3 characters long!");
        } else {
            setEmailError('');
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters long!");
        } else {
            setPasswordError('');
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value !== password) {
            setConfirmPasswordError("Passwords must match!");
        } else {
            setConfirmPasswordError('');
        }
    }



    return (
        <>
        <form onSubmit={createUsers}>
        <br/>
        <label>First Name:</label>
        <input type="text" value={firstName} onChange={handleFirstName} />
        <p className="error">{firstNameError}</p>
        
        <br/>
        <label>Last Name:</label>
        <input type="text" value={lastname}  onChange={handleLastname}/>
        <p className="error">{lastNameError}</p>

        <br/>
        <label>Email:</label>
        <input type="text" value={email} onChange={handleEmail} />
        <p className="error">{emailError}</p>

        <br/>
        <label>Password:</label>
        <input type="password" placeholder="password"  value={password} onChange={handlePassword}/>
        <p className="error">{passwordError}</p>

        <br/>
        <label>Confirm Password:</label>
        <input type="password" placeholder="confirm password" value={confirmPassword} onChange={handleConfirmPassword} />
        <p className="error">{confirmPasswordError}</p>
        <br/>

        <input type="submit" value="Create User" />
        </form>
        
        
    
        </>

    )
}
export default Login;