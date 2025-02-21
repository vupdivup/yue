import { useColorPicker } from "../hooks/useColorPicker";
import "../styles/style.css";
import styles from "../styles/App.module.css"
import { Picker } from "./Picker";

export function App() {
    const [hex, rgb, cmyk, hsv, hsl, props] = useColorPicker();

    return (
        <div className={styles.app}>
            <img
                src="assets/branding/banner-light.svg"
                alt="Yue banner"
                className={styles.banner}
            />
            <Picker {...props} className={styles.picker} />
        </div>
    )
}