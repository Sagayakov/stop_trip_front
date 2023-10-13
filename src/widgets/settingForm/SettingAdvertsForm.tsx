import { SubmitHandler, useForm } from 'react-hook-form';
import { TypeSettingAdverts } from './TypeSettingAdverts';
import { SettingPrice, Bathroom, LivingSpace, RoomsQuantity, TotalArea } from '../../features/settingAdvertsForm';
import { Reset } from '../../shared/ui/icons/icons-tools/Reset';

export const SettingAdvertsForm = () => {
    const { register, handleSubmit, reset, watch } =
        useForm<TypeSettingAdverts>();

    const onsubmit: SubmitHandler<TypeSettingAdverts> = (data) => {
        console.log(data);
        reset();
    };

    const onReset = () => {
        reset()
    }

    return (
        <section className="filters">
            <form onSubmit={handleSubmit(onsubmit)}>
                <SettingPrice register={register} watch={watch} />
                <TotalArea register={register} />
                <LivingSpace register={register} />
                <RoomsQuantity register={register} />
                <Bathroom register={register} />
                <label className="balcony">
                    <input type="checkbox" {...register('balcony')} />
                    Балкон
                </label>
                <label className="only-with-photo">
                    <input type="checkbox" {...register('onlyWithPhotos')} />
                    Только с фотографиями
                </label>
                <input type="submit" value="Показать 100 объявлений" />
                <button className="reset-setting-form" onClick={onReset}>
                    <Reset
                        color="#1F6FDE"/>
                    Сбросить фильтры
                </button>
            </form>
        </section>
    );
};
