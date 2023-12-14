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
            <p>Сиразетдинов Азат Ниязович P3216</p>
            <p>Вариант 1234</p>
            {props.loginButton
            ? <Link to={"/"} onClick={logOut}>LOG OUT</Link>
            : <></>}
        </div>
    )
}

export default Header;
