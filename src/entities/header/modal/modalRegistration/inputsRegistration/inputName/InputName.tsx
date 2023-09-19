import { FormState, UseFormRegister } from 'react-hook-form'
import { AuthRegistration } from '../../FormRegistration'

interface Props {
    formState: FormState<AuthRegistration>
    register: UseFormRegister<AuthRegistration>
}

export const InputName = ({ register, formState }: Props) => {
    const { errors } = formState

    return (
        <>
            <input
                {...register('userName', {
                    required: true,
                    pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    minLength: 10,
                })}
                placeholder="Имя пользователя"
                style={{
                    border: `1px solid ${errors?.userName ? '#FF3F25' : '#DCDCDC'}`,
                }}
            />
            <div style={{ height: '1.5rem' }}>
                {errors?.userName && (
                    <p style={{ color: '#FF3F25', fontSize: '13px' }}>Введите Ваше имя</p>
                )}
            </div>
        </>
    )
}
