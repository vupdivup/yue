import { useEffect, useRef } from "react";
import styles from "../styles/DragAdjuster.module.css";
import { clamp } from "../utils/math";

export function DragAdjuster({
    className="",
    handleAdjust,
    dragging,
    setDragging,
    children
}) {
    const self = useRef(null);

    // sync dragging for async window handler
    const draggingRef = useRef(dragging);

    useEffect(() => {
        draggingRef.current = dragging;
    }, [dragging]);

    // mouse events are scoped to window
    // so users aren't confined to the element's bounds when adjusting
    useEffect(() => {
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mousemove", handleMouseMove);
        }
    }, []);

    // set coords based on mouse position within element
    function updateCoords(mouseX, mouseY) {
        const rect = self.current.getBoundingClientRect();

        const x = clamp(mouseX - rect.x, 0, rect.width);
        const y = clamp(mouseY - rect.y, 0, rect.height);

        // coordinates are of range [0, 1]
        // relative to element dimensions
        handleAdjust(x / rect.width, y / rect.height);
    }

    function handleMouseDown(e) {
        // needed to prevent arbitrary element dragging
        e.preventDefault();
        
        setDragging(true);
        document.body.style.cursor = "pointer";
    }
    
    function handleMouseUp(e) {
        setDragging(false);
        document.body.style.cursor = "";
    }

    function handleMouseMove(e) {
        if (draggingRef.current) {
            updateCoords(e.clientX, e.clientY);
        }
    }

    function handleClick(e) {
        updateCoords(e.clientX, e.clientY);
    }

    return (
        <div
            ref={self}
            className={`${styles.adjuster} ${className}`}
            onClick={handleClick}
            onMouseDown={handleMouseDown}
            onDragStart={e => console.log(e)}
        >
            {children}
        </div>
    );
}