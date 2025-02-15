import { useState, useRef } from "react"

export function Param({set, value, pattern}) {
    const [inputValue, setInputValue] = useState(value.toString());

    const save = useRef("");

    function handleFocus() {
        save.current = inputValue;
    }

    // TODO: add bounds
    function handleInput(e) {
        const input = e.target.value;

        setInputValue(input);

        if (input.match(pattern)) {
            set(parseInt(input));
            save.current = input;
        }
    }

    function handleBlur(e) {
        if(inputValue.match(pattern)) {
            setInputValue(e.target.value.trim());
        } else {
            setInputValue(save.current);
        }
    }

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onFocus={handleFocus}
                onInput={handleInput}
                onBlur={handleBlur}
            />
        </div>
    )
}