
import { useSelector, useDispatch } from 'react-redux'
import { setItemColor } from '../redux/modelCustomizationSlice'
import { HexColorPicker } from "react-colorful"
import Materials from './materials';

export default function Picker() {
    const dispatch = useDispatch();
    const target = useSelector((state) => state.modelCustomization.current);

    // Get the item object based on the target
    const selectedItem = target || null;
    const itemColor = useSelector((state) => state.modelCustomization.items[target]?.color);

    const handleColorChange = (color) => {
        dispatch(setItemColor({ item: target, color }));
    };

    return (
        <div className={target ? 'picker active' : 'picker'}>
            {/* <HexColorPicker color={itemColor} onChange={handleColorChange} /> */}
            <h1>{target}</h1>
            {/* {itemColor} */}
            <div className='picker-materials'>
                {selectedItem && <Materials part={selectedItem} />}
            </div>
        </div>
    )
}