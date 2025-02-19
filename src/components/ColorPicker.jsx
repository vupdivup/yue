import { useState } from "react";
import { ColorContext } from "../contexts/ColorContext";
import { CMYKToRGB, HEXToRGB, HSVToRGB } from "../utils/colors";
import { ColorModeEditor } from "./ColorModeEditor";
import { RadioGroup } from "./RadioGroup";
import { HueSlider } from "./HueSlider";

export function ColorPicker({rgb, hex, cmyk, hsv, setRGB}) {
    function setHEX(hex) {
        setRGB(HEXToRGB(hex));
    }

    function setCMYK(cmyk) {
        setRGB(CMYKToRGB(cmyk));
    }

    function setHSV(hsv) {
        setRGB(HSVToRGB(hsv));
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
            suffix: "%",
            pattern: /^\s*0*\d{1,3}\s*$/,
            bounds: {min: 0, max: 100},
            set: c => setCMYK({...cmyk, c: c})
        },
        {
            name: "m",
            type: "number",
            value: cmyk.m,
            suffix: "%",
            pattern: /^\s*0*\d{1,3}\s*$/,
            bounds: {min: 0, max: 100},
            set: m => setCMYK({...cmyk, m: m})
        },
        {
            name: "y",
            type: "number",
            value: cmyk.y,
            suffix: "%",
            pattern: /^\s*0*\d{1,3}\s*$/,
            bounds: {min: 0, max: 100},
            set: y => setCMYK({...cmyk, y: y})
        },
        {
            name: "k",
            type: "number",
            value: cmyk.k,
            suffix: "%",
            pattern: /^\s*0*\d{1,3}\s*$/,
            bounds: {min: 0, max: 100},
            set: k => setCMYK({...cmyk, k: k})
        }
    ];

    const modes = [
        {name: "rgb", params: RGBParams},
        {name: "hex", params: HEXParams},
        {name: "cmyk", params: CMYKParams}
    ];

    const [modeIdx, setModeIdx] = useState(0);

    const mode = modes[modeIdx];

    return (
        // context value is only temporary
        <ColorContext.Provider value={{
            rgb: rgb, hex: hex, cmyk: cmyk, hsv: hsv
        }}>
            <div className="picker">
                <RadioGroup
                    choices={modes}
                    idx={modeIdx}
                    setIdx={setModeIdx}
                />
                <ColorModeEditor name={mode.name} params={mode.params} />
                <HueSlider setHSV={setHSV} />
            </div>
        </ColorContext.Provider>
    )
}