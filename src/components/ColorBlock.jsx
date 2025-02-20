import { useContext } from "react";
import { ColorContext } from "../contexts/ColorContext";

export function ColorBlock() {
    const color = useContext(ColorContext);

    return (
        <div style={{
            background: `rgb(${color.rgb.r} ${color.rgb.g} ${color.rgb.b})`,
            height: "48px",
        }}
            className={`widget`}
        >
            color name
        </div>
    )
}