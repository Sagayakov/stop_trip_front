import { FormState, UseFormRegister } from 'react-hook-form'
import { AuthData } from '../../FormEnter'
import './inputEmail.scss'

interface Props {
    formState: FormState<AuthData>
    register: UseFormRegister<AuthData>
}

export const InputEmail = ({ formState, register }: Props) => {
    const { errors } = formState
    
    return (
        <>
            <input
                {...register('email', {
                    required: true,
                    pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    minLength: 10
                })}
                placeholder="Email"
                style={{
                    border: `1px solid ${errors?.email ? '#FF3F25' : '#DCDCDC'}`,
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