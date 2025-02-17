import { ColorModeParam } from "./ColorModeParam";
import styles from "../styles/ColorModeEditor.module.css";

export function ColorModeEditor({mode, params}) {
    const elems = params.map((p, i) =>
        <ColorModeParam
            key={i}
            type={p.type}
            liveValue={p.value}
            setLiveValue={p.set}
            bounds={p.bounds}
            pattern={p.pattern}
        />
    );

    return (
        <div className={styles.editor}>
            {elems}
        </div>
    );
}