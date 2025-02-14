import { useState, useRef } from "react"

export function Thumb({x, y, fill}) {
    return (
        <svg
            className="cursor"
            viewBox="0 0 24 24"
            style={{
                left: `${x * 100}%`,
                top: `${y * 100}%`
            }}
        >
            <circle cx="12" cy="12" r="10" fill={fill}/>
        </svg>
    )
}