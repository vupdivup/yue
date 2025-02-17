import { useState } from "react";
import { Map } from "./Map";
import { Slider } from "./Slider";
import { ColorContext } from "../contexts/ColorContext";
import { CMYKToRGB, HEXToRGB, HSVToHSL, RGBToCMYK, RGBToHEX } from "../utils/colors";
import { ColorModeEditor } from "./ColorModeEditor";

export function Picker() {
    // rgb holds state
    const [rgb, setRGB] = useState({r: 0, g: 10, b: 20});

    // all other color modes are derived from rgb state
    const hex = RGBToHEX(rgb.r, rgb.g, rgb.b);
    const cmyk = RGBToCMYK(rgb);

    function setHEX(hex) {
        setRGB(HEXToRGB(hex));
    }

    function setCMYK(cmyk) {
        setRGB(CMYKToRGB(cmyk));
    }

    const RGBParams = [
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
    ];

    const CMYKParams = [
        {
            name: "c",
            type: "number",
            value: cmyk.c,
            pattern: /^\s*0*\d{1,3}\s*$/,
            bounds: {min: 0, max: 100},
            set: c => setCMYK({...cmyk, c: c})
        },
        {
            name: "m",
            type: "number",
            value: cmyk.m,
            pattern: /^\s*0*\d{1,3}\s*$/,
            bounds: {min: 0, max: 100},
            set: m => setCMYK({...cmyk, m: m})
        },
        {
            name: "y",
            type: "number",
            value: cmyk.y,
            pattern: /^\s*0*\d{1,3}\s*$/,
            bounds: {min: 0, max: 100},
            set: y => setCMYK({...cmyk, y: y})
        },
        {
            name: "k",
            type: "number",
            value: cmyk.k,
            pattern: /^\s*0*\d{1,3}\s*$/,
            bounds: {min: 0, max: 100},
            set: k => setCMYK({...cmyk, k: k})
        }
    ]



    return (
        <ColorContext.Provider value={null}>
            <div className="picker">
                <ColorModeEditor params={RGBParams} />
                <ColorModeEditor params={HEXParams} />
                <ColorModeEditor params={CMYKParams} />
                R{rgb.r} G{rgb.g} B{rgb.b}
                <br />
                HEX{hex}
                <br />
                C{cmyk.c} M{cmyk.m} Y{cmyk.y} K{cmyk.k}
            </div>
        </ColorContext.Provider>
    )
}