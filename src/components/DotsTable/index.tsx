import React, {useContext} from "react";
import {DotsFormContext} from "../InputFileds/InputFieldContext";

function DotsTable(){
    const context = useContext(DotsFormContext);

    return (
        <table>
            <thead>
            <tr>
                <th>X</th>
                <th>Y</th>
                <th>R</th>
                <th>Result</th>
                <th>Script time</th>
                <th>Current time</th>
            </tr>
            </thead>
            <tbody>
            {context && context.getDots.length > 0 && context?.getDots.map((dot, index) => (
                <tr key={index}>
                    <td>{dot.x}</td>
                    <td>{dot.y}</td>
                    <td>{dot.r}</td>
                    <td>{dot.status ? "hit" : "miss"}</td>
                    <td>{dot.scriptTime}</td>
                    <td>{dot.time}</td>
                </tr>
            ))}
            </tbody>
        </table>);
}

export default DotsTable;
