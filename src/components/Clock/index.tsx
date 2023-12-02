import React, {ReactNode, useEffect, useState} from "react";
import "./clock.css"

function Clock({updateInterval}: {updateInterval: number}){
        const [value, setValue] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => setValue(new Date()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    const deg = 6;
    const day = value;
    const hh = day.getHours() * 30;
    const mm = day.getMinutes() * deg;
    const ss = day.getSeconds() * deg;

    return (
        <div className="clock">
            <div className="hour" style={{transform: `rotateZ(${hh + mm / 12}deg)`}}/>
            <div className="min" style={{transform: `rotateZ(${mm}deg)`}}/>
            <div className="sec" style={{transform: `rotateZ(${ss}deg)`}}/>
        </div>
    )
}

export default Clock;
