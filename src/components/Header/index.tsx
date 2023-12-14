import React from "react"
import {Link} from "react-router-dom";
import {useAppDispatch} from "../../redux/hooks";
import {setLogin} from "../../redux/login";
import {setPassword} from "../../redux/password";

interface HeaderInterface {
    loginButton?: Boolean
}

function Header(props: HeaderInterface){
    const dispatch = useAppDispatch()
    function logOut(){
        dispatch(setLogin(""))
        dispatch(setPassword(""))
    }
    return (
        <div>
            <h1 className="text-3xl font-semibold mb-6 text-black text-center">Лабораторная работа 4</h1>
            <h1 className="text-xs font-semibold mb-6 text-center">Сиразетдинов Азат Ниязович 1234</h1>
            {props.loginButton
            ? <Link to={"/"} onClick={logOut}>LOG OUT</Link>
            : <></>}
        </div>
    )
}

export default Header;
