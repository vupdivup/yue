import { useState } from "react";
import { Map } from "./Map";
import { Slider } from "./Slider";

export function Picker() {
    const [hue, setHue] = useState(0);
    const [s, setS]  = useState(0);
    const [v, setV] = useState(0);

    return (
        <div className="picker">
            <Map hue={hue} setS={setS} setV={setV} />
            <Slider setHue={setHue} />
            S {s}
            <br />
            V {v}
        </div>
    )
}