import { useState } from "react";
import { ColorContext } from "../contexts/ColorContext";
import { CMYKToHSV, CMYKToRGB, HEXToHSV, HEXToRGB, HSLToHSV, HSVToRGB, RGBToHSV } from "../utils/colors";
import { ColorModeEditor } from "./ColorModeEditor";
import { RadioGroup } from "./RadioGroup";
import { HueSlider } from "./HueSlider";
import { ColorPickerMap } from "./ColorPickerMap";

export function ColorPicker({hsv, rgb, hsl, hex, cmyk, setHSV}) {
    function setHEX(hex) {
        setHSV(HEXToHSV(hex));
    }
    
    function setRGB(rgb) {
        setHSV(RGBToHSV(rgb));
    }

    function setCMYK(cmyk) {
        setHSV(CMYKToHSV(cmyk));
    }

    function setHSL(hsl) {
        setHSV(HSLToHSV(hsl));
    }

    const HEXParams = [
        {
            name: "hex",
            type: "string",
            value: hex,
            pattern: /^\s*#[a-fA-F0-9]{6}\s*/,
            set: setHEX
        }
    ]

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
    ]

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

    const HSVParams = [
        {
            name: "h",
            type: "number",
            value: hsv.h,
            pattern: /^\s*0*\d{1,3}\s*$/,
            bounds: {min: 0, max: 360},
            set: h => setHSV({...hsv, h: h})
        },
        {
            name: "s",
            type: "number",
            value: hsv.s,
            pattern: /^\s*0*\d{1,3}\s*$/,
            bounds: {min: 0, max: 100},
            set: s => setHSV({...hsv, s: s})
        },
        {
            name: "v",
            type: "number",
            value: hsv.v,
            pattern: /^\s*0*\d{1,3}\s*$/,
            bounds: {min: 0, max: 100},
            set: v => setHSV({...hsv, v: v})
        }
    ]

    const HSLParams = [
        {
            name: "h",
            type: "number",
            value: hsl.h,
            pattern: /^\s*0*\d{1,3}\s*$/,
            bounds: {min: 0, max: 360},
            set: h => setHSL({...hsl, h: h})
        },
        {
            name: "s",
            type: "number",
            value: hsl.s,
            pattern: /^\s*0*\d{1,3}\s*$/,
            bounds: {min: 0, max: 100},
            set: s => setHSL({...hsl, s: s})
        },
        {
            name: "l",
            type: "number",
            value: hsl.l,
            pattern: /^\s*0*\d{1,3}\s*$/,
            bounds: {min: 0, max: 100},
            set: l => setHSL({...hsl, l: l})
        }
    ]

    const modes = [
        {name: "hex", params: HEXParams},
        {name: "rgb", params: RGBParams},
        {name: "cmyk", params: CMYKParams},
        {name: "hsv", params: HSVParams},
        {name: "hsl", params: HSLParams}
    ]

    const [modeIdx, setModeIdx] = useState(0);

    const mode = modes[modeIdx];

    return (
        // context value is only temporary
        <ColorContext.Provider value={{
            rgb: rgb, hsl: hsl, hex: hex, cmyk: cmyk, hsv: hsv
        }}>
            <div className="picker">
                <RadioGroup
                    choices={modes}
                    idx={modeIdx}
                    setIdx={setModeIdx}
                />
                <ColorModeEditor name={mode.name} params={mode.params} />
                <ColorPickerMap setHSV={setHSV} />
                <HueSlider setHSV={setHSV} />
            </div>
        </ColorContext.Provider>
    )
}