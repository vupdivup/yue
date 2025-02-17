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

export function CMYKToRGB({c, m, y, k}) {
    const r = 255 * (1 - c / 100) * (1 - k / 100);
    const g = 255 * (1 - m / 100) * (1 - k / 100);
    const b = 255 * (1 - y / 100) * (1 - k / 100);

    return {
        r: Math.round(r),
        g: Math.round(g),
        b: Math.round(b)
    }
}

export function RGBToCMYK({r, g, b}) {
    const k = 1 - (Math.max(r, g, b) / 255);
    const c = (1 - r / 255 - k) / (1 - k);
    const m = (1 - g / 255 - k) / (1 - k);
    const y = (1 - b / 255 - k) / (1 - k);

    return {
        c: Math.round(c * 100),
        m: Math.round(m * 100),
        y: Math.round(y * 100),
        k: Math.round(k * 100)
    }
}