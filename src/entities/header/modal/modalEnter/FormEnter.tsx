import { SubmitHandler, useForm } from 'react-hook-form'
import './formEnter.scss'
import { InputSubmit } from './inputsEnter/InputSubmit'
import { InputEmail } from './inputsEnter/inputEmail/InputEmail'
import { InputPassword } from './inputsEnter/inputPassword/InputPassword'
import { useState } from 'react'

export interface AuthData {
    email: string
    password: string
}

export const FormEnter = () => {
    const [togglePass, setTogglePass] = useState(false)
    const { register, formState, handleSubmit, reset } = useForm<AuthData>({ mode: 'onBlur' })

    const onsubmit: SubmitHandler<AuthData> = (data) => {
        alert(JSON.stringify(data))
        reset()
    }

    return (
        <form className='form-enter' onSubmit={handleSubmit(onsubmit)} autoComplete="false">
            <InputEmail formState={formState} register={register} />
            <InputPassword formState={formState} register={register} togglePass={togglePass} setTogglePass={setTogglePass}/>
            <div className="forget-password">Забыли пароль?</div>
            <div className="remember-me">
                <label>
                    <input type="checkbox" name="" id="" />Запомнить аккаунт
                </label>
            </div>
            <InputSubmit />
            <div className="enter-with">
                Войти с помощью
                <div className="google">G</div>
                <div className="vk">VK</div>
            </div>
        </form>
    )
}
