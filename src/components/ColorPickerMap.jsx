import { useEffect, useRef } from "react";

export function ColorPickerMap({hue}) {
    const canvas = useRef(null);

    useEffect(() => {
        const ctx = canvas.current.getContext("2d");

        const width = canvas.current.offsetWidth;
        const height = canvas.current.offsetHeight;

        const satStep = 100 / width;
        const lightStep = 100 / height;

        for (let x = 0; x < width; x++) {
            const sat1 = satStep * x;
            const sat2 = satStep * (x + 1);
            const sat = (sat1 + sat2) / 2;
            
            for (let y = 0; y < height; y++) {
                const light1 = lightStep * y;
                const light2 = lightStep * (y + 1);
                const light = (light1 + light2) / 2;

                ctx.fillStyle = `hsl(${hue}deg ${sat}% ${light}%)`
                ctx.fillRect(x, y, 1, 1);
            }
        }
    }, []);

    return (
        <canvas
            ref={canvas}
            className="color-picker"
            width="400px"
            height="400px"
        />
    );
}