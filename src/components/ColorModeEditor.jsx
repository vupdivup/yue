import styles from "../styles/ColorModeEditor.module.css";
import { ColorModeParam } from "./ColorModeParam";
import { CopyButton } from "./CopyButton";

export function ColorModeEditor({mode, type, params}) {
    const elems = params.map((p, i) =>
        <ColorModeParam
            key={i}
            type={type}
            liveValue={p.value}
            setLiveValue={p.set}
            bounds={p.bounds}
            pattern={p.pattern}
        />
    );

    const copyValue = params.map(p => p.value).join(", ");

    return (
        <div className={styles.editor}>
            {elems}
            <CopyButton value={copyValue} />
        </div>
    );
}