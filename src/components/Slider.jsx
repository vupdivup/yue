import { useEffect, useRef, useState } from "react";
import "../styles/slider.css";
import { useAdjust } from "../hooks/useAdjust";
import { Cursor } from "./Cursor";

export function Slider({setHue}) {
    const slider = useRef(null);

    const [coords, adjusting] = useAdjust({ref: slider});

    useEffect(() => {
        setHue(coords.relX * 360);
    }, [coords]);

    return (
        <div className="slider" ref={slider}>
            <div className="track"></div>
            <Cursor coords={coords}/>
        </div>
    )
}