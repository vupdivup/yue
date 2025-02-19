import { useContext } from "react";
import { ColorContext } from "../contexts/ColorContext";
import { useDragAdjuster } from "../hooks/useDragAdjuster";
import { Thumb } from "./Thumb";
import { DragAdjuster } from "./DragAdjuster";
import styles from "../styles/ColorPickerMap.module.css";

export function ColorPickerMap({setHSV}) {
    const [dragging, props] = useDragAdjuster(handleAdjust);
    
    const color = useContext(ColorContext);

    function handleAdjust(x, y) {
        const s = x * 100;
        const v = (1 - y) * 100;
        setHSV(hsv => {
            return {...hsv, s: s, v: v}
        });
    }

    return (
        <DragAdjuster {...props} className={styles.map}>
            <div
                className={styles.hue}
                style={{
                    background: `hsl(${color.hsl.h}deg 100% 50%)`
                }}
            />
            <div className={`${styles.gradient} ${styles.saturation}`} />
            <div className={`${styles.gradient} ${styles.value}`} />
            <Thumb
                x={color.hsv.s / 100}
                y={1 - color.hsv.v / 100}
                fill={
                    `rgb(${color.rgb.r} ` +
                    `${color.rgb.g} ` +
                    `${color.rgb.b})`
                }
            />
        </DragAdjuster>
    );
}