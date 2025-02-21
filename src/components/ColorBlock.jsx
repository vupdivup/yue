import { useContext } from "react";
import { ColorContext } from "../contexts/ColorContext";
import styles from "../styles/ColorBlock.module.css";

export function ColorBlock() {
    const color = useContext(ColorContext);

    return (
        <div style={{
            background: `rgb(${color.rgb.r} ${color.rgb.g} ${color.rgb.b})`,
        }}
            className={`widget ${styles.block}`}
        >   
        </div>
    )
}