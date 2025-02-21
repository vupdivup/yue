import { useColorPicker } from "../hooks/useColorPicker";
import "../styles/style.css";
import styles from "../styles/App.module.css"
import { ColorPicker } from "./ColorPicker";

export function App() {
    const [hex, rgb, cmyk, hsv, hsl, props] = useColorPicker();

    return (
        <div className={styles.app}>
            <div className={styles.banner}>
                <img
                    className={styles.logo}
                    src="assets/icons/logo/logo.png"
                />
                <h2 className={styles.heading}>Yue</h2>
            </div>
            <ColorPicker {...props} className={styles.picker} />
        </div>
    )
}