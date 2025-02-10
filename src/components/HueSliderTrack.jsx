import { useEffect, useRef } from "react";

export function HueSliderTrack() {
    const canvas = useRef(null);

    useEffect(() => {
        const ctx = canvas.current.getContext("2d");

        const width = canvas.current.offsetWidth;
        const height = canvas.current.offsetHeight;

        // hue increase on each pixel
        const hueStep = 360 / width

        for (let x = 0; x < width; x++) {
            const hue1 = hueStep * x;
            const hue2 = hueStep * (x + 1);

            // use average of the two calculated hues
            // at left and right edges of current px
            const hue = (hue1 + hue2) / 2;
            
            ctx.fillStyle = `hsl(${hue}deg 100% 50%)`
            ctx.fillRect(x, 0, 1, height);
        }
        
    }, []);

    return (
        <canvas
            ref={canvas}
            className="hue-slider-track"
            width="240px"
            height="24px"
        />
    );
}