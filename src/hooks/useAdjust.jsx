import { useEffect, useRef, useState } from "react";
import { clamp } from "../utils/math.js";

export function useAdjust({ref}) {
    const [adjusting, setAdjusting] = useState(false);
    const [coords, setCoords] = useState({});

    const adjustingRef = useRef(adjusting);

    useEffect(() => {
        adjustingRef.current = adjusting;
    }, [adjusting]);
    
    // TODO: separate window and ref effects
    useEffect(() => {
        ref.current.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            ref.current.removeEventListener(
                "mousedown",
                handleMouseDown
            );
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mousemove", handleMouseMove);
        }
    }, [ref]);

    function handleMouseDown(e) {
        setAdjusting(true);
    }

    function handleMouseUp(e) {
        setAdjusting(false);
    }

    // TODO: adjust on click

    function handleMouseMove(e) {
        if (!adjustingRef.current) return;
    
        updateCoords(e.clientX, e.clientY);
    }

    function updateCoords(mouseX, mouseY) {
        const rect = ref.current.getBoundingClientRect();

        const x = clamp(mouseX - rect.x, 0, rect.width);
        const y = clamp(mouseY - rect.y, 0, rect.height);

        setCoords({
            x: x / rect.width,
            y: y / rect.height
        });
    }

    return [
        coords,
        adjusting
    ]
}