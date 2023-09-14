
import { useSelector, useDispatch } from 'react-redux'
import { setItemColor } from '../redux/appSlice'
import { HexColorPicker } from "react-colorful"

export default function Picker() {
    const dispatch = useDispatch();
    const target = useSelector((state) => state.app.current);
    const items = useSelector((state) => state.app.items);
  
    // Get the item object based on the target
    const selectedItem = items[target] || {};
  
    // Get an array of property names from the selected item
    const propertyNames = Object.keys(selectedItem);
    return (
        <div className='picker' style={{ display: target ? "block" : "none" }}>
            {/* <HexColorPicker color={useSelector((state) => state.app.items[target])} onChange={(color) => dispatch(setItemColor({ item: target, color: color }))} /> */}
            <h1>{target}</h1>
            {useSelector((state) => state.app.items[target])}
        </div>
    )
}