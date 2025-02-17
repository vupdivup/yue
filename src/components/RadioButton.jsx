import styles from "../styles/RadioButton.module.css";

export function RadioButton({select, name, isSelected}) {
    function handleClick(e) {
        select();
        e.target.blur();
    }

    return (
        <button
            className={
                `${styles.button} ${
                    isSelected ? styles.selected : styles.notSelected
                }`
            } 
            onClick={handleClick}
            tabIndex={isSelected ? -1 : 0}
        >
            {name}
        </button>
    )
}