import React from "react";

interface SelectInputProps{
    name: string,
    value: number | undefined,
    value_setter: (x: number) => void
    labels: number[]
}

function SelectInput(props: SelectInputProps) {
    return (
        <select name={props.name}
                key={props.value}
                value={props.value}
                onChange={event => {
                    props.value_setter(parseFloat(event.target.value))
                }}>
            {props.labels.map((value, index) => (
                <option value={value} key={value}>
                    {props.labels.map(String)[index]}
                </option>
            ))}
        </select>
    )
}

export default SelectInput;