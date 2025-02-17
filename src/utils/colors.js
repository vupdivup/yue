export function HSVToHSL(h, s, v) {
    const hsl = {}

    hsl.h = h;
    hsl.l = v * (1 - s / 200);

    if (hsl.l === 0 || hsl.l === 100) {
        hsl.s = 0;
    } else {
        hsl.s = (v - hsl.l) / Math.min(hsl.l, 100 - hsl.l) * 100;
    }

    return hsl;
}

export function HEXToRGB(hex) {
    const r = hex.substring(1, 3);
    const g = hex.substring(3, 5);
    const b = hex.substring(5);

    return {
        r: parseInt(r, 16),
        g: parseInt(g, 16),
        b: parseInt(b, 16)
    }
}

export function RGBToHEX(r, g, b) {
    return (
        "#" +
        r.toString(16).padStart(2, "0") +
        g.toString(16).padStart(2, "0") +
        b.toString(16).padStart(2, "0")
    );
}