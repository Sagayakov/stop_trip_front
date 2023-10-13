import { UseFormRegister } from 'react-hook-form';
import { TypeSettingAdverts } from '../../widgets/settingForm/TypeSettingAdverts';

interface Props {
    register: UseFormRegister<TypeSettingAdverts>;
}

export const Bathroom = ({ register }: Props) => {
    return (
        <div className="bathroom">
            <h3>Санузел</h3>
            <div className="bathroom-setting">
                <label>
                    <input
                        type="checkbox"
                        id="bathroom-setting-1"
                        value="Разделный"
                        {...register('bathRoom')}
                    />
                    Раздельный
                </label>
                <label>
                    <input
                        type="checkbox"
                        id="bathroom-setting-1"
                        value="Совмещенный"
                        {...register('bathRoom')}
                    />
                    Совмещенный
                </label>
            </div>
        </div>
    );
};
