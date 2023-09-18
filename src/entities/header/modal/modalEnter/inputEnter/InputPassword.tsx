import { FormState, UseFormRegister } from 'react-hook-form'
import { AuthData } from '../FormEnter'

interface Props {
    formState: FormState<AuthData>
    register: UseFormRegister<AuthData>
}

export const InputPassword = ({ formState, register }: Props) => {
    const { errors } = formState
    return (
        <>
            <input
                {...register('password', { required: true })}
                placeholder="Пароль"
                style={{
                    width: '100%',
                    height: '56px',
                    border: '1px solid #DCDCDC',
                    borderRadius: '8px',
                    padding: '12px 24px',
                }}
            />
            <div style={{ height: '1.5rem' }}>
                {errors?.password && (
                    <p style={{ color: '#FF3F25', fontSize: '13px' }}>Введите корректный пароль</p>
                )}
            </div>
        </>
    )
}
