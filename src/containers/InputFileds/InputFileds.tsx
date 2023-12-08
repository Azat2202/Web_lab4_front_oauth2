import React, {ChangeEvent, useContext, useState} from "react";
import SelectInput from "../../components/SelectInput";
import {StoreContext} from "./InputFieldContext";

function InputFields() {
    const context = useContext(StoreContext)
    if (!context) return <></>


    return (
        <form>
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
        </form>
    )
}

export default InputFields;