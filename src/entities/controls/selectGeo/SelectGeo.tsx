import { useEffect, useRef, useState } from 'react';
import { MapIcon } from '../../../shared/ui/icons/icons-tools/MapIcon';
import { ArrowDown } from '../../../shared/ui/icons/icons-tools/ArrowDown';


export const SelectGeo = () => {
    const [width, setWidth] = useState<number>(window.innerWidth);
    const selectRef = useRef<null | HTMLSelectElement>(null)

    const handleArrowClick = () => {
        selectRef.current?.click()
    }

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="select-wrapper">
            {width > 767 ? <MapIcon color="#1F6FDE" /> : <p>В городе</p>}
            <select ref={selectRef}>
                <option value="Гоа">Тбилиси</option>
                <option value="Гоа">Гоа</option>
                <option value="Гоа">Гоа</option>
                <option value="Гоа">Гоа</option>
                <option value="Гоа">Гоа</option>
            </select>
            <ArrowDown color="#1f6fde" onclick={handleArrowClick} />
        </div>
    );
};
