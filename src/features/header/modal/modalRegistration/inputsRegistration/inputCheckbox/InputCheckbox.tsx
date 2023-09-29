import { FormState, UseFormRegister } from 'react-hook-form'
import { AuthRegistration } from '../../lib/RegistrationTypes'

interface Props {
    formState: FormState<AuthRegistration>
    register: UseFormRegister<AuthRegistration>
}

export const InputChechbox = ({ formState, register }: Props) => {
    const { errors } = formState

    return (
        <div className="user-agreement">
            <label htmlFor="userAgreement">
                <input
                    id="userAgreement"
                    // style={errors?.agreement ? {borderColor: 'red'} : {}}
                    {...register('agreement', { required: true })}
                    type="checkbox"
                />
                <span>
                    Я принимаю условия{' '}
                    <a
                        href="#"
                        target="_blank"
                        onClick={(event) => event.stopPropagation()}
                        className="user-argeement-text">
                        Пользовательского соглашения
                    </a>
                </span>
            </label>
        </div>
    )
}
