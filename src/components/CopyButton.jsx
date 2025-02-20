import styles from "../styles/CopyButton.module.css";

export function CopyButton({value}) {
    function handleClick(e) {
        navigator.clipboard.writeText(value);
        e.currentTarget.blur();
    }

    return (
        <button className={`button ${styles.button}`} onClick={handleClick}>
            <svg className={`feather ${styles.icon}`}>
                <use 
                    href="/assets/icons/feather/feather-sprite.svg#copy"  
                />
            </svg>
        </button>
    )
}