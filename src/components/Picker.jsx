import { useState } from "react";
import { Map } from "./Map";
import { Slider } from "./Slider";
import { ColorContext } from "../contexts/ColorContext";
import { HEXToRGB, HSVToHSL, RGBToHEX } from "../utils/colors";
import { Setter } from "./Setter";

export function Picker() {
    const [rgb, setRGB] = useState({r: 0, g: 10, b: 20});
    const hex = RGBToHEX(rgb.r, rgb.g, rgb.b);

    const params = [
        {
            name: "r",
            value: rgb.r,
            pattern: /^\s*\d{1,3}\s*$/,
            set: r => setRGB({...rgb, r: r})
        },
        {
            name: "g",
            value: rgb.g,
            pattern: /^\s*\d{1,3}\s*$/,
            set: g => setRGB({...rgb, g: g})
        },
        {
            name: "b",
            value: rgb.b,
            pattern: /^\s*\d{1,3}\s*$/,
            set: b => setRGB({...rgb, b: b})
        }
    ];

    function setHEX(hex) {
        setRGB(HEXToRGB(hex));
    }

    return (
        <ColorContext.Provider value={null}>
            <div className="picker">
                <Setter params={params} />
                R{rgb.r} G{rgb.g} B{rgb.b}
            </div>
        </ColorContext.Provider>
    )
}