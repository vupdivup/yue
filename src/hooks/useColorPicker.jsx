import { useState } from "react";
import { RGBToCMYK, RGBToHEX, RGBToHSV } from "../utils/colors";

export function useColorPicker() {
    // rgb holds state
    const [rgb, setRGB] = useState({r: 0, g: 10, b: 20});

    // all other color modes are derived from rgb state
    const hex = RGBToHEX(rgb.r, rgb.g, rgb.b);
    const cmyk = RGBToCMYK(rgb);
    const hsv = RGBToHSV(rgb);

    // props to pass to picker component
    const props = {
        rgb: rgb,
        hex: hex,
        cmyk: cmyk,
        hsv: hsv,
        setRGB: setRGB
    }

    return [
        rgb,
        hex,
        cmyk,
        hsv,
        props
    ];
}