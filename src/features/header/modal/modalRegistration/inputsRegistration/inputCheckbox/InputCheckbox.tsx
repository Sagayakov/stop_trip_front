import { FormState, UseFormRegister } from "react-hook-form"
import { AuthRegistration } from "../../FormRegistration"

interface Props {
    formState: FormState<AuthRegistration>
    register: UseFormRegister<AuthRegistration>
}

export const InputChechbox = ({formState, register}:Props) => {
    const {errors} = formState

    return (
        <div className="user-agreement">
            <label>
                <input
                // style={errors?.agreement ? {borderColor: 'red'} : {}}
                {...register('agreement', { required: true })} type="checkbox" />Я принимаю
                условия{' '}
            </label>
            <span className="user-argeement-text">Пользовательского соглашения</span>
        </div>
    )
}