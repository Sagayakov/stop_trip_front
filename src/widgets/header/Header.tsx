import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/store/hooks'
import { Modal } from '../../features/header/modal'
import { ModalMobile } from '../../features/header/modal/modalMobile/ModalMobile'
import { toggleModalEnter } from '../../features/header/model/modalAuth/reducers/toggleModal'
import { LogoHeader } from '../../shared/ui/icons/icons-tools/LogoHeader'
import { Person } from '../../shared/ui/icons/icons-tools/Person'
import { Plus } from '../../shared/ui/icons/icons-tools/Plus'
import './header.scss'

export const Header = () => {
    const dispatch = useAppDispatch()
    const toggle = useAppSelector((state) => state.toggleModalEnter.toggle)
    const [width, setWidth] = useState<number>(window.innerWidth)

    const [showUserMenu, setShowUserMenu] = useState(false) //потом переделать на редьюсер

    const handleToggleModal = () => dispatch(toggleModalEnter(!toggle))

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [window.innerWidth])

    return (
        <header>
            <div className="header-wrapper">
                <LogoHeader />
                <button className="addAdvert">
                    <Plus color="white" />
                    Разместить объявление
                </button>
                {width >= 425 && width <= 767 ? (
                    <Person handleClick={() => setShowUserMenu(!showUserMenu)} /> //когда будет регистрация, переделать на редьюсер
                ) : (
                    <div className="language-auth">
                        <div className="language">
                            <div className="language-ru">RU</div>
                            <div className="language-eng">ENG</div>
                        </div>
                        <div className="auth-button" onClick={handleToggleModal}>
                            Вход/Регистрация
                        </div>
                    </div>
                )}
                <ModalMobile showUserMenu={showUserMenu} setShowUserMenu={setShowUserMenu} />
                <Modal />
            </div>
        </header>
    )
}
