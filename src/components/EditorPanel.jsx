import { useContext, useState } from "react";
import { ColorContext } from "../contexts/ColorContext";
import { CMYKToHSV, HEXToHSV, HSLToHSV, RGBToHSV } from "../utils/colors";
import { ColorModeEditor } from "./ColorModeEditor";
import { RadioGroup } from "./RadioGroup";

export function EditorPanel({setHSV}) {
    const {hex, rgb, cmyk, hsv, hsl} = useContext(ColorContext);

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
            value: hex,
            pattern: /^\s*#[a-fA-F0-9]{6}\s*/,
            set: setHEX
        }
    ]

    const RGBParams = [
        {
            name: "r",
            value: rgb.r,
            pattern: /^\s*0*\d{1,3}\s*$/,
            bounds: {min: 0, max: 255},
            set: r => setRGB({...rgb, r: r})
        },
        {
            name: "g",
            value: rgb.g,
            pattern: /^\s*0*\d{1,3}\s*$/,
            bounds: {min: 0, max: 255},
            set: g => setRGB({...rgb, g: g})
        },
        {
            name: "b",
            value: rgb.b,
            pattern: /^\s*0*\d{1,3}\s*$/,
            bounds: {min: 0, max: 255},
            set: b => setRGB({...rgb, b: b})
        }
    ]

    const CMYKParams = [
        {
            name: "c",
            value: cmyk.c,
            pattern: /^\s*0*\d{1,3}\s*$/,
            bounds: {min: 0, max: 100},
            set: c => setCMYK({...cmyk, c: c})
        },
        {
            name: "m",
            value: cmyk.m,
            pattern: /^\s*0*\d{1,3}\s*$/,
            bounds: {min: 0, max: 100},
            set: m => setCMYK({...cmyk, m: m})
        },
        {
            name: "y",
            value: cmyk.y,
            pattern: /^\s*0*\d{1,3}\s*$/,
            bounds: {min: 0, max: 100},
            set: y => setCMYK({...cmyk, y: y})
        },
        {
            name: "k",
            value: cmyk.k,
            pattern: /^\s*0*\d{1,3}\s*$/,
            bounds: {min: 0, max: 100},
            set: k => setCMYK({...cmyk, k: k})
        }
    ]

    const HSVParams = [
        {
            name: "h",
            value: hsv.h,
            pattern: /^\s*0*\d{1,3}\s*$/,
            bounds: {min: 0, max: 360},
            set: h => setHSV({...hsv, h: h})
        },
        {
            name: "s",
            value: hsv.s,
            pattern: /^\s*0*\d{1,3}\s*$/,
            bounds: {min: 0, max: 100},
            set: s => setHSV({...hsv, s: s})
        },
        {
            name: "v",
            value: hsv.v,
            pattern: /^\s*0*\d{1,3}\s*$/,
            bounds: {min: 0, max: 100},
            set: v => setHSV({...hsv, v: v})
        }
    ]

    const HSLParams = [
        {
            name: "h",
            value: hsl.h,
            pattern: /^\s*0*\d{1,3}\s*$/,
            bounds: {min: 0, max: 360},
            set: h => setHSL({...hsl, h: h})
        },
        {
            name: "s",
            value: hsl.s,
            pattern: /^\s*0*\d{1,3}\s*$/,
            bounds: {min: 0, max: 100},
            set: s => setHSL({...hsl, s: s})
        },
        {
            name: "l",
            value: hsl.l,
            pattern: /^\s*0*\d{1,3}\s*$/,
            bounds: {min: 0, max: 100},
            set: l => setHSL({...hsl, l: l})
        }
    ]

    const modes = [
        {name: "hex", type: "string", params: HEXParams},
        {name: "rgb", type: "numeric", params: RGBParams},
        {name: "cmyk", type: "numeric", params: CMYKParams},
        {name: "hsv", type: "numeric", params: HSVParams},
        {name: "hsl", type: "numeric", params: HSLParams}
    ]

    const [modeIdx, setModeIdx] = useState(0);
    const mode = modes[modeIdx];

    return (
        <>
            <RadioGroup
                choices={modes}
                idx={modeIdx}
                setIdx={setModeIdx}
            />
            <ColorModeEditor
                mode={mode.name}
                type={mode.type}
                params={mode.params}
            />
        </>
    )
}