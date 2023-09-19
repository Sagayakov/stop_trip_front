import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import './formRegistration.scss'
import { InputEmail } from './inputsRegistration/inputEmail/InputEmail'
import { InputName } from './inputsRegistration/inputName/InputName'
import { InputPassword } from './inputsRegistration/inputPassword/InputPassword'
import { InputRepeatPassword } from './inputsRegistration/inputPassword/InputRepeatPassword'
import { InputPhone } from './inputsRegistration/inputPhone/InputPhone'
import { InputSubmit } from './inputsRegistration/inputSubmit/InputSubmit'
// import './inputsRegistration/inputRegistration.scss'

export interface AuthRegistration {
    userName: string
    email: string
    password: string
    repeatPassword: string
    phone: number
}

export const FormRegistration = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { register, handleSubmit, reset, formState, watch } = useForm<AuthRegistration>({
        mode: 'onBlur',
    })

    const onsubmit: SubmitHandler<AuthRegistration> = (data) => {
        alert(JSON.stringify(data))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onsubmit)} autoComplete="false">
            <InputName formState={formState} register={register} />
            <InputPhone formState={formState} register={register} />
            <InputEmail formState={formState} register={register} />
            <InputPassword
                formState={formState}
                register={register}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
            />
            <InputRepeatPassword
                formState={formState}
                register={register}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                watch={watch}
            />
            <div className="user-agreement">
                <label>
                    <input type="checkbox" />Я принимаю условия{' '}
                </label>
                <span className="user-argeement-text">Пользовательского соглашения</span>
            </div>
            <InputSubmit formState={formState} />
        </form>
    )
}
