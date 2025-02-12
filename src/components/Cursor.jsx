export function Cursor({coords}) {
    return (
        <svg
            className="cursor"
            viewBox="0 0 24 24"
            style={{
                left: `${coords.x}px`,
                top: `${coords.y}px`
            }}
        >
            <circle cx="12" cy="12" r="10" />
        </svg>
    )
}