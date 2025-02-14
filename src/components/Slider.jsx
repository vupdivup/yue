import { useEffect, useRef, useState } from "react";
import { useAdjust } from "../hooks/useAdjust";
import { Cursor } from "./Cursor";

export function Slider({setHue, hue}) {
    const slider = useRef(null);

    const [coords, adjusting] = useAdjust({ref: slider});

    useEffect(() => {
        setHue(coords.x * 360);
    }, [coords]);

    return (
        <div className="slider" ref={slider}>
            <div className="track"></div>
            <Cursor
                x={coords.x}
                y={.5}
                fill={`hsl(${hue}deg 100% 50%)`}
            />
        </div>
    )
}