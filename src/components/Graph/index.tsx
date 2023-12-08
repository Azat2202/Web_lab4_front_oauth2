import React, {useEffect, useRef} from "react";
import GraphPrinter from "./GraphPrinter";



function Graph({width, height}: {width: number, height: number}){
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    useEffect(() => {
        if (!canvasRef?.current?.getContext('2d')) return
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        if(context === null) return
        const graphPrinter = new GraphPrinter(canvas, context);
        graphPrinter.drawStartImage();
    }, );
    return (
        <canvas ref={canvasRef} width={width} height={height}/>
    );
}

export default Graph;
