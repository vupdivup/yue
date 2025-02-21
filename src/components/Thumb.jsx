import styles from "../styles/Thumb.module.css";

export function Thumb({x, y, fill, dragging}) {
    const gray1 = window.getComputedStyle(document.body)
        .getPropertyValue("--gray-1");

    return (
        <svg
            className={styles.thumb}
            viewBox="0 0 24 24"
            style={{
                left: `${x * 100}%`,
                top: `${y * 100}%`
            }}
        >
            <circle cx="12" cy="12" r="12" fill={gray1} />
            <circle cx="12" cy="12" r="11.5" fill="white" />
            <circle cx="12" cy="12" r="9" fill={gray1} />
            <circle cx="12" cy="12" r="8.5" fill={fill} />
        </svg>
    )
}