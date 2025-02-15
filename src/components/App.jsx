import { Picker } from "./Picker";
import "../styles/style.css";
import { Param } from "./Param";

export function App() {
    return (
        <>
            <Picker />
            <Param pattern={/^\s*\d{1,3}\s*$/}/>
        </>
    )
}