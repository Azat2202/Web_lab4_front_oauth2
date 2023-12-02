import React from "react";

function LoginForm(){
    return (
        <form>
            <div>
                <input type={"text"} placeholder={"Login"}/>
                <input type={"password"} placeholder={"Password"}/>
            </div>
            <div>
                <button>Login</button>
                <button>Register</button>
            </div>
        </form>
    )
}

export default LoginForm;
