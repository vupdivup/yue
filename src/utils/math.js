export function clamp(num, min, max) {
    if (num < min) return min;
    if (num > max) return max;
    return num;
}

export function roundObj(o) {
    // shallow copy
    o = {...o};

    for (const [key, value] of Object.entries(o)) {
        o[key] = Math.round(value);
    }

    return o;
}