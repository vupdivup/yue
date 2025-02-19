import { useState } from "react";
import { HSVToCMYK, HSVToHEX, HSVToHSL, HSVToRGB, RGBToCMYK, RGBToHEX, RGBToHSV } from "../utils/colors";

export function useColorPicker() {
    const [hsv, setHSV] = useState({h: 0, s: 50, v: 50});

    const hex = HSVToHEX(hsv);
    const rgb = HSVToRGB(hsv);
    const cmyk = HSVToCMYK(hsv);
    const hsl = HSVToHSL(hsv);

    // props to pass to picker component
    const props = {
        hex: hex,
        rgb: rgb,
        cmyk: cmyk,
        hsv: hsv,
        hsl: hsl,
        setHSV: setHSV
    }

    return [
        hex,
        rgb,
        cmyk,
        hsv,
        hsl,
        props
    ];
}