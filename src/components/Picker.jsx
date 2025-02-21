import { ColorContext } from "../contexts/ColorContext";
import { ColorBlock } from "./ColorBlock";
import { SaturationValueMap } from "./SaturationValueMap";
import { EditorPanel } from "./EditorPanel";
import { HueSlider } from "./HueSlider";
import styles from "../styles/Picker.module.css";

export function Picker({hsv, rgb, hsl, hex, cmyk, setHSV, className=""}) {
    const color = {
        rgb: rgb, hsl: hsl, hex: hex, cmyk: cmyk, hsv: hsv
    }

    return (
        <ColorContext.Provider value={color}>
            <div
                className={
                    `widget ${styles.picker} ${className}`
                }
            >
                <SaturationValueMap setHSV={setHSV} />
                <HueSlider setHSV={setHSV} />
                <ColorBlock />
                <EditorPanel setHSV={setHSV} />
            </div>
        </ColorContext.Provider>
    )
}