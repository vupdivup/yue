import styles from "../styles/RadioGroup.module.css";
import { RadioButton } from "./RadioButton";

export function RadioGroup({choices, idx, setIdx}) {
    const elems = choices.map((c, i) => 
        <RadioButton
            key={i}
            idx={i}
            name={c.name}
            select={() => setIdx(i)}
            isSelected={idx === i}
        />
    );

    return (
        <div className={styles.group}>
            {elems}
        </div>
    );
}