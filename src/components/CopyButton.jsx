import styles from "../styles/CopyButton.module.css";
import featherSpriteURL from "/assets/icons/feather/feather-sprite.svg";

export function CopyButton({value}) {
    function handleClick(e) {
        navigator.clipboard.writeText(value);
        e.currentTarget.blur();
    }

    return (
        <button className={`button ${styles.button}`} onClick={handleClick}>
            <svg className={`feather ${styles.icon}`}>
                <use 
                    href={`${featherSpriteURL}#copy`}
                />
            </svg>
        </button>
    )
}