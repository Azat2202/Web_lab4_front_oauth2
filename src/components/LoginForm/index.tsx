import React, {useState} from "react";
import toast from "react-hot-toast";
import {useAppDispatch} from "../../redux/hooks";
import {setLogin} from "../../redux/login";
import {setPassword} from "../../redux/password";
import {useNavigate} from "react-router-dom";


function LoginForm() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [newLogin, setNewLogin] = useState("");
    const [newPassword, setNewPassword] = useState("");

    function loginRequest(event: React.MouseEvent<HTMLButtonElement>, login: String, password: String){
        event.preventDefault()
        login = encodeURI(login.trim())
        password = encodeURI(password.trim())
        if(login === "" || password === "") {
            toast.error("Fields must be non empty");
            return;
        }
        // lol lets work with promises in strange way
        fetch("/api/login", {
            method: 'POST',
            headers: {"Authorization": "Basic " + btoa(login + ":" + password)}
        })
            .then(response => {
                if(response.status === 200){
                    throw Error('Navigate to dots')
                }
                return response
            })
            .then(response => response.json())
            .then(response => toast.error(response.message))
            .catch(error => {
                dispatch(setLogin(newLogin))
                dispatch(setPassword(newPassword))
                navigate("/dots")
            })
    }

    function registerRequest(event: React.MouseEvent<HTMLButtonElement>, login: String, password: String){
        event.preventDefault()
        login = encodeURI(login.trim())
        password = encodeURI(password.trim())
        if(login === "" || password === "") {
            toast.error("Fields must be non empty")
            return;
        }
        let formData = new FormData();
        formData.append('login', login.toString());
        formData.append('password', password.toString());
        fetch("/api/register",{
            method: 'POST',
            body: formData
        })
            .then(response => {
                if(response.status === 200){
                    throw Error('Navigate to dots')
                }
                return response
            })
            .then(response => response.json())
            .then(response => toast.error(response.message))
            .catch(error => {
                dispatch(setLogin(newLogin))
                dispatch(setPassword(newPassword))
                navigate("/dots")
            })
    }

    return (
        <form>
            <div>
                <input type={"text"}
                       placeholder={"Login"}
                       onChange={event => setNewLogin(event.target.value)}/>
                <input type={"password"}
                       placeholder={"Password"}
                       onChange={event => setNewPassword(event.target.value)}/>
            </div>
            <div>
                <button onClick={event => loginRequest(event, newLogin, newPassword)}
                        value={newLogin}>
                    Login
                </button>
                <button onClick={event => registerRequest(event, newLogin, newPassword)}
                        value={newPassword}>
                    Register
                </button>
            </div>
        </form>
    )
}

export default LoginForm;
