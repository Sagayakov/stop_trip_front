import { FormState, UseFormRegister } from 'react-hook-form'
import { AuthData } from '../FormEnter'

interface Props {
    formState: FormState<AuthData>
    register: UseFormRegister<AuthData>
}

export const InputEmail = ({formState, register}: Props) => {
    const { errors } = formState
    return (
        <>
            <input
                {...register('email', { required: true })}
                placeholder="Email"
                style={{
                    width: '100%',
                    height: '56px',
                    border: '1px solid #DCDCDC',
                    borderRadius: '8px',
                    padding: '12px 24px',
                }}
            />
            <div style={{ height: '1.5rem' }}>
                {errors?.email && (
                    <p style={{ color: '#FF3F25', fontSize: '13px' }}>Введите корректный email</p>
                )}
            </div>
        </>
    )
}
