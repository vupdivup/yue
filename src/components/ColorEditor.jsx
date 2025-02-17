import { ColorModeParam } from "./Param";

export function ColorEditor({params}) {
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
        <div id="undecided">
            {elems}
        </div>
    );
}