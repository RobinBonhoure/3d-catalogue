
import { useSelector, useDispatch } from 'react-redux'
import { setItemColor } from '../redux/appSlice'
import { HexColorPicker } from "react-colorful"
import Materials from './materials';

export default function Picker() {
    const dispatch = useDispatch();
    const target = useSelector((state) => state.app.current);

    // Get the item object based on the target
    const selectedItem = target || null;
    const itemColor = useSelector((state) => state.app.items[target]?.color);

    const handleColorChange = (color) => {
        dispatch(setItemColor({ item: target, color }));
    };

    return (
        <div className="picker" style={{ display: target ? 'block' : 'none' }}>
            <HexColorPicker color={itemColor} onChange={handleColorChange} />
            <h1>{target}</h1>
            {itemColor}

            <div style={{ width: '100px', height: '100px' }}>
                {selectedItem && <Materials part={selectedItem} />}
            </div>
        </div>
    )
}