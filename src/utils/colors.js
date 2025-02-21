import { roundObj } from "./math.js";

export function HSVToHSL({h, s, v}) {
    const hsl = {}

    hsl.h = h;
    hsl.l = v * (1 - s / 200);

    if (hsl.l === 0 || hsl.l === 100) {
        hsl.s = 0;
    } else {
        hsl.s = (v - hsl.l) / Math.min(hsl.l, 100 - hsl.l) * 100;
    }

    return roundObj(hsl);
}

export function HSLToHSV({h, s, l}) {
    const hsv = {};

    hsv.h = h;
    hsv.v = l + s * Math.min(l / 100, 1 - l / 100);
    hsv.s = hsv.v === 0 ? 0 : 200 * (1 - l / hsv.v);

    return roundObj(hsv);
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

export function RGBToHEX({r, g, b}) {
    return (
        "#" +
        r.toString(16).padStart(2, "0") +
        g.toString(16).padStart(2, "0") +
        b.toString(16).padStart(2, "0")
    );
}

export function CMYKToRGB({c, m, y, k}) {
    const rgb = {};

    rgb.r = 255 * (1 - c / 100) * (1 - k / 100);
    rgb.g = 255 * (1 - m / 100) * (1 - k / 100);
    rgb.b = 255 * (1 - y / 100) * (1 - k / 100);

    return roundObj(rgb);
}

export function RGBToCMYK({r, g, b}) {
    let cmyk = {}

    cmyk.k = 1 - (Math.max(r, g, b) / 255);
    cmyk.c = cmyk.k === 1 ? 0 : (1 - r / 255 - cmyk.k) / (1 - cmyk.k);
    cmyk.m = cmyk.k === 1 ? 0 : (1 - g / 255 - cmyk.k) / (1 - cmyk.k);
    cmyk.y = cmyk.k === 1 ? 0 : (1 - b / 255 - cmyk.k) / (1 - cmyk.k);

    cmyk.c = cmyk.c * 100;
    cmyk.m = cmyk.m * 100;
    cmyk.y = cmyk.y * 100;
    cmyk.k = cmyk.k * 100;

    return roundObj(cmyk);
}

export function HSVToRGB({h, s, v}) {
    let rgb;

    const c = (v * s) / 10000;
    const h_ = h / 60;
    const x = c * (1 - Math.abs(h_ % 2 - 1));

    if (h_ < 1) {
        rgb = {r: c, g: x, b: 0};
    } else if (h_ < 2) {
        rgb = {r: x, g: c, b: 0};
    } else if (h_ < 3) {
        rgb = {r: 0, g: c, b: x};
    } else if (h_ < 4) {
        rgb = {r: 0, g: x, b: c};
    } else if (h_ < 5) {
        rgb = {r: x, g: 0, b: c};
    } else {
        rgb = {r: c, g: 0, b: x};
    }

    const m = v / 100 - c;

    rgb = {
        r: (rgb.r + m) * 255,
        g: (rgb.g + m) * 255,
        b: (rgb.b + m) * 255
    }

    return roundObj(rgb);
}

export function RGBToHSV({r, g, b}) {
    let hsv = {};

    r = r / 255;
    g = g / 255;
    b = b / 255;

    const xMax = Math.max(r, g, b);
    const xMin = Math.min(r, g, b);

    hsv.v = xMax;
    
    const c = xMax - xMin;

    if (c === 0) {
        hsv.h = 0;
    } else if (hsv.v === r) {
        hsv.h = ((g - b) / c) % 6;
    } else if (hsv.v === g) {
        hsv.h = (b - r) / c + 2;
    } else {
        hsv.h = (r - g) / c + 4;
    }

    hsv.h *= 60;
    hsv.h = (hsv.h % 360 + 360) % 360;

    hsv.s = hsv.v === 0 ? 0 : c / hsv.v;

    hsv = {...hsv, s: hsv.s * 100, v: hsv.v * 100};

    return roundObj(hsv);
}

export function HSVToHEX(hsv) {
    return RGBToHEX(HSVToRGB(hsv));
}

export function HEXToHSV(hex) {
    return RGBToHSV(HEXToRGB(hex));
}

export function HSVToCMYK(hsv) {
    return RGBToCMYK(HSVToRGB(hsv));
}

export function CMYKToHSV(cmyk) {
    return RGBToHSV(CMYKToRGB(cmyk));
}