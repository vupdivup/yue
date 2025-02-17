import { useState } from "react";
import { Map } from "./Map";
import { Slider } from "./Slider";
import { ColorContext } from "../contexts/ColorContext";
import { HEXToRGB, HSVToHSL, RGBToHEX } from "../utils/colors";
import { ColorEditor } from "./Setter";

export function Picker() {
    const [rgb, setRGB] = useState({r: 0, g: 10, b: 20});
    const hex = RGBToHEX(rgb.r, rgb.g, rgb.b);

    const params = [
        {
            name: "r",
            type: "number",
            value: rgb.r,
            pattern: /^\s*0*\d{1,3}\s*$/,
            bounds: {min: 0, max: 255},
            set: r => setRGB({...rgb, r: r})
        },
        {
            name: "g",
            type: "number",
            value: rgb.g,
            pattern: /^\s*0*\d{1,3}\s*$/,
            bounds: {min: 0, max: 255},
            set: g => setRGB({...rgb, g: g})
        },
        {
            name: "b",
            type: "number",
            value: rgb.b,
            pattern: /^\s*0*\d{1,3}\s*$/,
            bounds: {min: 0, max: 255},
            set: b => setRGB({...rgb, b: b})
        }
    ];

    const HEXParams = [
        {
            name: "hex",
            type: "string",
            value: hex,
            pattern: /^\s*#([A-Fa-f0-9]{6})*\s*$/,
            bounds: null,
            set: setHEX
        }
    ]

    function setHEX(hex) {
        setRGB(HEXToRGB(hex));
    }

    return (
        <ColorContext.Provider value={null}>
            <div className="picker">
                <ColorEditor params={params} />
                <ColorEditor params={HEXParams} />
                R{rgb.r} G{rgb.g} B{rgb.b}
                <br />
                HEX{hex}
            </div>
        </ColorContext.Provider>
    )
}