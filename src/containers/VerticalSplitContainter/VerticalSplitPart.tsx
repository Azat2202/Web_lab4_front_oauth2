import React, {ReactNode} from "react";
import "./VerticalSplitContainer.css";

interface SplitContainerProps{
    children: ReactNode,
    position: "leftPane" | "rightPane"
    width?: number
}

function VerticalSplitPart(props: SplitContainerProps){
    return (
        <div style={{width: props.width + '%'}} className={props.position}>
            {props.children}
        </div>
    );
}

export default VerticalSplitPart;