import { useColorPicker } from "../hooks/useColorPicker";
import "../styles/style.css";
import { ColorPicker } from "./ColorPicker";

export function App() {
    const [hex, rgb, cmyk, hsv, hsl, props] = useColorPicker();

    return (
        <>
            <ColorPicker {...props} />
            R{rgb.r} G{rgb.g} B{rgb.b}
            H{hsv.h} S{hsv.s} V{hsv.v}
        </>
    )
}