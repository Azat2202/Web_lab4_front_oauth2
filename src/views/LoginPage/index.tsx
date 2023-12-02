import React, {useEffect, useRef, useState} from "react";
import VerticalSplitContainer from "../../containers/VerticalSplitContainter/VerticalSplitContainer";
import VerticalSplitPart from "../../containers/VerticalSplitContainter/VerticalSplitPart";
import Header from "../../components/Header";
import Clock from "../../components/Clock";
import LoginForm from "../../components/LoginForm";

function LoginPage(){
    return (
        <VerticalSplitContainer>

            <VerticalSplitPart position={"leftPane"} width={60}>
                <Header/>
                <Clock updateInterval={1000}/>
            </VerticalSplitPart>

            <VerticalSplitPart position={"rightPane"}>
                <LoginForm/>
            </VerticalSplitPart>

        </VerticalSplitContainer>
    )
}

export default LoginPage;