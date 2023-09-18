import { useForm } from 'react-hook-form'
import { InputPassword } from './inputEnter/InputPassword'
import { InputSubmit } from './inputEnter/InputSubmit'
import { InputEmail } from './inputEnter/inputEmail'

export interface AuthData {
    email: string
    password: string
}

export const FormEnter = () => {
    const { register, formState, handleSubmit, reset } = useForm<AuthData>({ mode: 'onBlur' })

    const onsubmit = (data: AuthData) => {
        alert(JSON.stringify(data))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onsubmit)} autoComplete="false">
            <InputEmail formState={formState} register={register} />
            <InputPassword formState={formState} register={register} />
            <span>Забыли пароль?</span>
            <br />
            <label>
                <input type="checkbox" name="" id="" />
                <span>Запомнить аккаунт</span>
            </label>
            <InputSubmit />
        </form>
    )
}
