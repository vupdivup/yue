import { useColorPicker } from "../hooks/useColorPicker";
import "../styles/style.css";
import { ColorPicker } from "./ColorPicker";

export function App() {
    const [rgb, hex, cmyk, hsv, props] = useColorPicker();

    return (
        <>
            <ColorPicker {...props} />
            R{rgb.r} G{rgb.g} B{rgb.b}
            <br />
            HEX{hex}
            <br />
            C{cmyk.c} M{cmyk.m} Y{cmyk.y} K{cmyk.k}
            <br />
            H{hsv.h} S{hsv.s} V{hsv.v}
        </>
    )
}