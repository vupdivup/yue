import { useContext } from "react";
import { Thumb } from "./Thumb";
import { DragAdjuster } from "./DragAdjuster";
import { ColorContext } from "../contexts/ColorContext";
import { useDragAdjuster } from "../hooks/useDragAdjuster";
import styles from "../styles/HueSlider.module.css";

export function HueSlider({setHSV}) {
    const [dragging, props] = useDragAdjuster(handleAdjust);
    const values = useContext(ColorContext);

    function handleAdjust(x, y) {
        setHSV(hsv => {
            return {...hsv, h: Math.round(x * 360)}
        });
    }

    return (
        <DragAdjuster {...props}>
            <div className={`widget ${styles.track}`}></div>
            <Thumb
                x={values.hsv.h / 360}
                y={.5}
                fill={`hsl(${values.hsv.h}deg 100% 50%)`}
            />
        </DragAdjuster>
    )
}