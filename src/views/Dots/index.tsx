import React, {useContext, useEffect} from "react";
import Header from "../../components/Header";
import InputFileds from "../../components/InputFileds/InputFileds";
import Graph from "../../components/Graph";
import {CoordinatesProvider, DotsFormContext} from "../../components/InputFileds/InputFieldContext";
import DotsTable from "../../components/DotsTable";
import {AuthorizationStore} from "../../redux/authorizationStore";
import {useNavigate} from "react-router-dom";
import {getLogin} from "../../redux/login";
import dotsTable from "../../components/DotsTable";
import {getPassword} from "../../redux/password";
import toast from "react-hot-toast";

function Dots(){
    const navigate = useNavigate();
    useEffect(() => {
        let state = AuthorizationStore.getState()
        if(getLogin(state).trim() === "" || getPassword(state).trim() === ""){
            navigate("/");
        }
    })

    return (
        <CoordinatesProvider>
            <Header loginButton={true}/>
            <Graph width={300} height={300}/>
            <InputFileds/>
            <DotsTable/>
        </CoordinatesProvider>
    )
}

export default Dots;
