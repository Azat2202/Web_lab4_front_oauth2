import React, {FormEvent, useContext, useEffect} from "react";
import SelectInput from "../SelectInput";
import {DotsFormContext} from "./InputFieldContext";
import toast from "react-hot-toast";
import {getLogin} from "../../redux/login";
import {AuthorizationStore} from "../../redux/authorizationStore";
import {getPassword} from "../../redux/password";
import Dots from "../../views/Dots";
import {useNavigate} from "react-router-dom";
import {isNumber} from "util";


function InputFields() {
    const context = useContext(DotsFormContext)

    useEffect(() => {
        fetch("/api/dots", {
            method: "GET",
            headers: {
                "Authorization": "Basic " + btoa(getLogin(AuthorizationStore.getState()) + ":"
                    + getPassword(AuthorizationStore.getState()))
            }
        })
            .then(r => r.json())
            .then(r => context?.setDots(r))
    }, [])

    let validateX = (x: number) => x <= 2 && x >= -2;
    let validateY = (y: string) => parseFloat(y) <= 5 && parseFloat(y) >= -5;
    let validateR = (r: number) => r <= 2 && r >= 0;


    function parseFormSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (!context || context.getX == null || context.getY == null || !context.getR == null){
            toast.error("Fill all boxes with coordinates!")
            return
        }
        if(!validateX(context.getX) || !validateY(context.getY as string) || !validateR(context.getR)){
            toast.error("Coordinates are not valid!")
            return
        }
        let formData = new FormData();
        formData.append("x", context.getX.toString())
        formData.append("y", context.getY.toString())
        formData.append("r", context.getR.toString())
        fetch("/api/dots", {
            method: "POST",
            headers: {"Authorization": "Basic " + btoa(getLogin(AuthorizationStore.getState()) + ":" + getPassword(AuthorizationStore.getState()))},
            body: formData
        })
            .then(r => {
                if (r.ok) return r
                else throw new Error(r.statusText)
            })
            .then(r => r.json())
            .then(r => {
                context.addDot(r)
            })
            .catch(e => toast.error(e.message));
    }

    function sendClear(){
        fetch("/api/dots", {
            method: "DELETE",
            headers: {"Authorization": "Basic " + btoa(getLogin(AuthorizationStore.getState()) + ":" + getPassword(AuthorizationStore.getState()))},
        })
            .then(r => {
                if (r.ok) {
                    context?.setDots([])
                }
            })
    }

    if (!context) return (<></>);
    return (
        <form onSubmit={e=> parseFormSubmit(e)}>
            <SelectInput name={"X"}
                         value={context.getX}
                         value_setter={context.setX}
                         labels={[-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2]}/>
            <input
                type={"text"}
                value={context.getY}
                onChange={e => context.setY(e.target.value)}
            />
            <SelectInput name={"R"}
                         value={context.getR}
                         value_setter={context.setR}
                         labels={[-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2]}/>
            <button type={"submit"}>SUBMIT</button>
            <button type={"button"} onClick={sendClear}>CLEAR</button>
        </form>
    )
}

export default InputFields;