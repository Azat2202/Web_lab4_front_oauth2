import React from "react";
import Header from "../../components/Header";
import InputFileds from "../../containers/InputFileds/InputFileds";
import Graph from "../../components/Graph";
import {CoordinatesProvider} from "../../containers/InputFileds/InputFieldContext";

function Dots(){
    return (
        <CoordinatesProvider>
            <Header/>
            <Graph width={300} height={300}/>
            <InputFileds/>
        </CoordinatesProvider>
    )
}

export default Dots;
