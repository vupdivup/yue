import styles from "../styles/EditorModeGroup.module.css";
import { EditorParam } from "./EditorParam";
import { CopyButton } from "./CopyButton";

export function EditorModeGroup({mode, type, params}) {
    const elems = params.map((p, i) =>
        <EditorParam
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
        <div className={styles.group}>
            {elems}
            <CopyButton value={copyValue} />
        </div>
    );
}