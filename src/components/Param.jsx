import { useState, useRef } from "react"

export function Param({setParam, pattern}) {
    const [value, setValue] = useState((100).toString());

    const save = useRef("");

    function handleFocus() {
        save.current = value;
    }

    function handleInput(e) {
        setValue(e.target.value);

        if (value.match(pattern)) {
            // setParam(parseInt(self.current.value));
        }
    }

    function handleBlur(e) {
        if(value.match(pattern)) {
            setValue(e.target.value.trim());
        } else {
            setValue(save.current);
        }
    }

    return (
        <div>
            <input
                type="text"
                value={value}
                onFocus={handleFocus}
                onInput={handleInput}
                onBlur={handleBlur}
            />
        </div>
    )
}