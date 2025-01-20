import React,{useState} from "react";

const Login = () => {
// const [count, setCount] = useState(0)


const [name,setName]=useState("");
const [lastname,setLastname]=useState("");
const [password,setPassword]=useState(""); 
const [confirmPassword,setConfirmPassword]=useState("");
const [email,setEmail]=useState("");


// const setCountEvent = () => {
//     setCount((count) => count + 1);
// }

// const LoginEvent = () => {
//     const x ={firstname:document.getElementById("myfirst").value,lastname:document.getElementById("mylast").value};
//     document.getElementById("first").innerHTML = x.firstname;
//     document.getElementById("last").innerHTML = x.lastname;
// }
 

function changeName(e){
    setName(e.target.value);
}
function changeLastname(e){
    setLastname(e.target.value);
}
function changePassword(e){
    setPassword(e.target.value);
}
function changeConfirmPassword(e){
    setConfirmPassword(e.target.value);
}
function changeEmail(e){
    setEmail(e.target.value);
}



    return (
        <>
        <br/>
        <label>First Name:</label>
        <input type="text" value={name} onChange={changeName} />
        <br/>
        <label>Last Name:</label>
        <input type="text" value={lastname}  onChange={changeLastname}/>
        <br/>
        <label>Email:</label>
        <input type="text" value={email} onChange={changeEmail} />
        <br/>
        <label>Password:</label>
        <input type="password" placeholder="password"  value={password} onChange={changePassword}/>
        <br/>
        <label>Confirm Password:</label>
        <input type="password" placeholder="confirm password" value={confirmPassword} onChange={changeConfirmPassword} />
        <br/>
        

        <br /><button onClick={LoginEvent}>Submit</button> <br /><br />
        <button onClick={setCountEvent}>
            count is {count}
        </button>

        <p>firstname :<span id="first"></span></p>
        <p>lastname :<span id="last"></span></p>
        <p>{name}</p>
        <p>{lastname}</p>
        <p>{password}</p>
        <p>{confirmPassword}</p>
        <p>{email}</p>
        </>

    )
}
export default Login;