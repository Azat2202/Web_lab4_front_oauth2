import React, {useCallback, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useKeycloak} from "@react-keycloak/web";


function LoginForm() {
    const {keycloak} = useKeycloak()
    useNavigate();
    const login = useCallback(() => {
        keycloak?.login()
    }, [keycloak])


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
