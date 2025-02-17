import { useState, useRef } from "react";
import styles from "../styles/ColorModeParam.module.css";

export function ColorModeParam({
    liveValue,
    setLiveValue,
    type,
    bounds,
    pattern
}) {
    // value within input while editing
    // can differ from live value due to whitespaces
    const [focusedValue, setFocusedValue] = useState(liveValue);

    const inputRef = useRef(null);
    const save = useRef("");

    function handleFocus() {
        save.current = liveValue;
    }

    function handleInput(e) {
        const input = e.target.value;

        setFocusedValue(input);

        if(isValid(input)) {
            setLiveValue(normalize(input));
        }        
    }

    function handleBlur(e) {
        if(isValid(focusedValue)) {
            // clean up input if valid
            setFocusedValue(normalize(focusedValue));
        } else {
            // reset input if invalid
            setFocusedValue(save.current);
            setLiveValue(save.current);
        }
    }

    function isValid(input) {
        // convert to string for integer params
        if (!input.toString().match(pattern)) return false;

        if (type !== "number") return true;

        const num = normalize(input);

        return (num >= bounds.min && num <= bounds.max);
    }

    function normalize(input) {
        switch(type) {
            case "number":
                return parseInt(input);
            case "string":
                return input.trim();
        }
    }

    return (
        <input
            ref={inputRef} 
            className={styles.input}
            type="text"
            value={
                document.activeElement === inputRef.current ?
                focusedValue :
                liveValue
            }
            onFocus={handleFocus}
            onInput={handleInput}
            onBlur={handleBlur}
        />
    )
}