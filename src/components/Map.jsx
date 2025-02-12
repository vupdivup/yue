import { HSVToHSL } from "../utils/colors";
import "../styles/map.css";

export function Map({hue}) {
    const hsl = HSVToHSL(hue, 100, 100);

    return (
        <div className="map">
            <div
                className="map-hue"
                style={
                    {background: `hsl(${hsl.h} ${hsl.s} ${hsl.l})`}
                }
            />
            <div className="map-gradient-s" />
            <div className="map-gradient-v" />
        </div>
    );
}