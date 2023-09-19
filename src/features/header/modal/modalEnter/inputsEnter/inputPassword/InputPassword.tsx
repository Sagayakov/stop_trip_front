import { FormState, UseFormRegister } from 'react-hook-form'
import { Eye } from '../../../../../../shared/ui/icons/icons-tools/Eye'
import { AuthData } from '../../lib/EnterType'
import '../../lib/inputEmail.scss'

interface Props {
    formState: FormState<AuthData>
    register: UseFormRegister<AuthData>
    togglePass: boolean
    setTogglePass: React.Dispatch<React.SetStateAction<boolean>>
}

export const InputPassword = ({ formState, register, setTogglePass, togglePass }: Props) => {
    const { errors } = formState
    const handleToggle = () => setTogglePass(!togglePass)

    return (
        <div className="password-div">
            <input
                {...register('password', {
                    required: true,
                    minLength: 5,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/,
                })}
                placeholder="Пароль"
                type={togglePass ? 'password' : 'text'}
                style={{
                    border: `1px solid ${errors?.password ? '#FF3F25' : '#DCDCDC'}`,
                }}
            />
            <div id="eye" onClick={handleToggle}>
                <Eye />
            </div>
            <div style={{ height: '1.5rem' }}>
                {errors?.password && (
                    <p style={{ color: '#FF3F25', fontSize: '13px' }}>Введите корректный пароль</p>
                )}
            </div>
        </div>
    )
}
