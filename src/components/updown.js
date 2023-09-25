import { useSelector, useDispatch } from 'react-redux'
import { setPositionUp, setPositionDown } from '../redux/positionSlice';
import Image from 'next/image'

import arrow from '../img/icons/arrow.svg'


export default function Model() {
    const isPositionUp = useSelector((state) => state.position);
    const dispatch = useDispatch();

    const handlePositionUp = () => {
        dispatch(setPositionUp());
    };

    const handlePositionDown = () => {
        dispatch(setPositionDown());
    };
    return (
        <>
            <div className='position'>
                <div onClick={handlePositionUp}>
                    <Image
                        src={arrow}
                        width={100}
                        height={100}
                        alt="arrow"
                    />
                </div>
                <div onClick={handlePositionDown}>
                    <Image
                        className='arrow-bottom'
                        src={arrow}
                        width={100}
                        height={100}
                        alt="arrow"
                    />
                </div>
            </div>
        </>
    );
}