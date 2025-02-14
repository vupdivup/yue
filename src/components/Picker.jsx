import { useState } from "react";
import { Map } from "./Map";
import { Slider } from "./Slider";
import { ColorContext } from "../contexts/ColorContext";
import { HSVToHSL } from "../utils/colors";

export function Picker() {
    const [hue, setHue] = useState(0);
    const [s, setS]  = useState(0);
    const [v, setV] = useState(0);

    return (
        <ColorContext.Provider value={HSVToHSL(hue, s, v)}>
            <div className="picker">
                <Map hue={hue} setS={setS} setV={setV} />
                <Slider setHue={setHue} hue={hue} />
                S {s}
                <br />
                V {v}
            </div>
        </ColorContext.Provider>
    )
}