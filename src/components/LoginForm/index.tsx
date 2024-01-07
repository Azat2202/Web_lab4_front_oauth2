import React from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "react-oidc-context";


function LoginForm() {
    const auth = useAuth()
    const navigate = useNavigate()
    const login = () => {
        navigate("/dots")
    }


    return (
        <form className="space-y-8">
            <div>
                <button onClick={login}
                        className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none
                        focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">
                    Login
                </button>
            </div>
        </form>
    )
}

export default LoginForm;
