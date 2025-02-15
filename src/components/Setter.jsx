import { Param } from "./Param";

export function Setter({params}) {
    const elems = params.map((p, i) =>
        <Param
            key={i}
            value={p.value}
            set={p.set}
            pattern={p.pattern}
        />
    );

    return (
        <div id="undecided">
            {elems}
        </div>
    );
}