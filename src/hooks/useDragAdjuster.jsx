import { useState } from "react";

export function useDragAdjuster(handleAdjust) {
    const [dragging, setDragging] = useState(false);

    const props = {
        handleAdjust: handleAdjust,
        dragging: dragging,
        setDragging: setDragging
    };

    return [
        dragging,
        props
    ];
}