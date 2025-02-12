export function HSLToHSV(h, s, l) {
    const hsv = {}

    // TODO: this doesn't work
    hsv.h = h;
    hsv.v = l + s * Math.min(l, 100 - l);
    hsv.s = hsv.v === 0 ? 0 : 200 * (1 - l / hsv.v);

    return hsv;
}

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