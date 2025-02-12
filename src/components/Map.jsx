import { useEffect, useRef, useState } from "react";
import "../styles/map.css";
import { HSVToHSL } from "../utils/colors";
import { Cursor } from "./Cursor";
import { clamp } from "../utils/math";
import { useAdjust } from "../hooks/useAdjust";

export function Map({hue, handleChange}) {
    // TODO: have it as rgb or hex instead
    const hsl = HSVToHSL(hue, 100, 100);

    const [s, setS] = useState(0);
    const [v, setV] = useState(0);

    const map = useRef(null);

    const [coords, adjusting] = useAdjust({ref: map});

    return (
        <div
            className="map"
            ref={map}
        >
            <div
                className="map-hue"
                style={
                    {background: `hsl(${hsl.h} ${hsl.s} ${hsl.l})`}
                }
            />
            <div className="map-gradient saturation" />
            <div className="map-gradient value" />
            <Cursor coords={coords}/>
        </div>
    );
}