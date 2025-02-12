import { useEffect, useRef, useState } from "react";
import { useAdjust } from "../hooks/useAdjust";
import "../styles/map.css";
import { HSVToHSL } from "../utils/colors";
import { Cursor } from "./Cursor";

export function Map({hue, setS, setV}) {
    // TODO: have it as rgb or hex instead
    const hsl = HSVToHSL(hue, 100, 100);

    const map = useRef(null);

    const [coords, adjusting] = useAdjust({ref: map});

    useEffect(() => {
        setS(coords.relX * 100);
        setV((1 - coords.relY) * 100);
    })

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