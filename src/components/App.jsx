import { useColorPicker } from "../hooks/useColorPicker";
import "../styles/style.css";
import { ColorPicker } from "./ColorPicker";

export function App() {
    const [hex, rgb, cmyk, hsv, hsl, props] = useColorPicker();

    return (
        <>
            <ColorPicker {...props} />
        </>
    )
}