import { useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../../app/store/hooks'
import { Close } from '../../shared/ui/icons/icons-tools/Close'
import { LogoHeader } from '../../shared/ui/icons/icons-tools/LogoHeader'
import { Plus } from '../../shared/ui/icons/icons-tools/Plus'
import { toggleModalEnter } from '../model/modalAuth/reducers/toggleModal'
import './header.scss'

interface AuthData {
    email: string
    password: string
}

export const Header = () => {
    const dispatch = useAppDispatch()
    const toggle = useAppSelector((state) => state.toggleModalEnter.toggle)
    const handleToggle = () => dispatch(toggleModalEnter(!toggle))

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm<AuthData>({ mode: 'onBlur' })

    const onsubmit = (data: AuthData) => {
        alert(JSON.stringify(data))
        reset()
    }

    return (
        <header>
            <div className="header-wrapper">
                <LogoHeader />
                <button className="addAdvert">
                    <Plus color="white" />
                    Разместить объявление
                </button>
                <div className="language-auth">
                    <div className="language">
                        <div className="language-ru">RU</div>
                        <div className="language-eng">ENG</div>
                    </div>
                    <div className="auth-button" onClick={handleToggle}>
                        Вход/Регистрация
                    </div>
                </div>
                <div
                    className="modal"
                    style={{ display: `${toggle ? 'block' : 'none'}` }}
                    onClick={handleToggle}>
                    <div className="modal-wrapper" onClick={(event) => event.stopPropagation()}>
                        <Close onclick={() => dispatch(toggleModalEnter(false))} />
                        <div className="modal-header">
                            <div className="enter">Вход</div>
                            <div className="registration">Регистрация</div>
                        </div>
                        <form onSubmit={handleSubmit(onsubmit)} autoComplete="false">
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
                                    <p style={{ color: '#FF3F25', fontSize: '13px' }}>
                                        Введите корректный email
                                    </p>
                                )}
                            </div>
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
                                    <p style={{ color: '#FF3F25', fontSize: '13px' }}>
                                        Введите корректный пароль
                                    </p>
                                )}
                            </div>
                            <span>Забыли пароль?</span>
                            <br />
                            <label>
                                <input type="checkbox" name="" id="" />
                                <span>Запомнить аккаунт</span>
                            </label>
                            <input
                                type="submit"
                                style={{
                                    width: '100%',
                                    height: '43px',
                                    backgroundColor: '#02C66E',
                                    border: 'none',
                                    borderRadius: '8px',
                                    color: 'white',
                                    cursor: 'pointer',
                                }}
                                value="Войти"
                                //   disabled={!isValid}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </header>
    )
}
