import { useContext, useEffect, useRef } from "react";
import { useAdjust } from "../hooks/useAdjust";
import { HSVToHSL } from "../utils/colors";
import { Cursor } from "./Cursor";
import { ColorContext } from "../contexts/ColorContext";

export function Map({hue, setS, setV}) {
    // TODO: have it as rgb or hex instead
    const hsl = HSVToHSL(hue, 100, 100);

    const map = useRef(null);

    const [coords, adjusting] = useAdjust({ref: map});

    const color = useContext(ColorContext);

    useEffect(() => {
        setS(coords.x * 100);
        setV((1 - coords.y) * 100);
    }, [coords]);

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
            <Cursor
                x={coords.x}
                y={coords.y}
                fill={`hsl(${color.h}deg ${color.s}% ${color.l}%)`}
            />
        </div>
    );
}