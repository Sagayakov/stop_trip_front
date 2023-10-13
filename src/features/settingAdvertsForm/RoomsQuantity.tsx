import { UseFormRegister } from 'react-hook-form';
import { TypeSettingAdverts } from '../../widgets/settingForm/TypeSettingAdverts';

interface Props {
    register: UseFormRegister<TypeSettingAdverts>;
}

export const RoomsQuantity = ({ register }: Props) => {
    return (
        <div className="rooms-quantity">
            <h3>Количество комнат</h3>
            <div className="setting-rooms-quantity">
                <label>
                    <input
                        type="checkbox"
                        id="setting-rooms-quantity-1"
                        value="1"
                        {...register('roomsQuantity')}
                    />
                    1
                </label>
                <label>
                    <input
                        type="checkbox"
                        id="setting-rooms-quantity-2"
                        value="2"
                        {...register('roomsQuantity')}
                    />
                    2
                </label>
                <label>
                    <input
                        type="checkbox"
                        id="setting-rooms-quantity-3"
                        value="3"
                        {...register('roomsQuantity')}
                    />
                    3
                </label>
                <label>
                    <input
                        type="checkbox"
                        id="setting-rooms-quantity-4"
                        value="4"
                        {...register('roomsQuantity')}
                    />
                    4
                </label>
            </div>
        </div>
    );
};
