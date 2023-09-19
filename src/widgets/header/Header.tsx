import { useAppDispatch, useAppSelector } from '../../app/store/hooks'
import { Modal } from '../../features/header/modal'
import { toggleModalEnter } from '../../features/header/model/modalAuth/reducers/toggleModal'
import { LogoHeader } from '../../shared/ui/icons/icons-tools/LogoHeader'
import { Plus } from '../../shared/ui/icons/icons-tools/Plus'
import './header.scss'

export const Header = () => {
    const dispatch = useAppDispatch()
    const toggle = useAppSelector((state) => state.toggleModalEnter.toggle)

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
                    <div
                        className="auth-button"
                        onClick={() => dispatch(toggleModalEnter(!toggle))}>
                        Вход/Регистрация
                    </div>
                </div>
                <Modal />
            </div>
        </header>
    )
}
