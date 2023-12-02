import React, {ReactNode} from "react";
import  "./VerticalSplitContainer.css";



function VerticalSplitContainer({children}: {children: ReactNode}){
    return (
        <div className="splitScreen">
            {children}
        </div>
    );
}

export default VerticalSplitContainer;
