import { useRef, useState } from "react";
import { Map } from "./Map";
import { HueSlider } from "./HueSlider";

export function App() {
    return (
        <>
            <Map hue={100} />
        </>
    )
}