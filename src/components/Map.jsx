import { useEffect, useRef, useState } from "react";
import "../styles/map.css";
import { HSVToHSL } from "../utils/colors";
import { Cursor } from "./Cursor";
import { clamp } from "../utils/math";

export function Map({hue, handleChange}) {
    // TODO: have it as rgb or hex instead
    const hsl = HSVToHSL(hue, 100, 100);

    const [s, setS] = useState(0);
    const [v, setV] = useState(0);
    const [coords, setCoords] = useState({});

    const map = useRef(null);
    const isMouseDown = useRef(false);

    useEffect(() => {
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mousemove", handleMouseMove)

        return () => {
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, []);

    function handleMouseDown(e) {
        isMouseDown.current = true;
    }

    function handleMouseUp(e) {
        isMouseDown.current = false;
    }

    function handleMouseMove(e) {
        if (!isMouseDown.current) return;

        const rect = map.current.getBoundingClientRect();

        // TODO: hide cursor when dragging

        const x = clamp(e.clientX - rect.x, 0, rect.width);
        const y = clamp(e.clientY - rect.y, 0, rect.height);

        setS(x / rect.width);
        setV(y / rect.height);

        setCoords({x: x, y: y});

        //handleChange();
    }

    return (
        <div
            className="map"
            ref={map}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
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