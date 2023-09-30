import './modalMobile.scss'

export const ModalMobile = () => {
    return (
        <div className="modal-mobile">
            <div className="modal-mobile-content">
                <div className="menu"></div>
                <div className="language-auth">
                    <div className="language">
                        <div className="language-ru">RU</div>
                        <div className="language-eng">ENG</div>
                    </div>
                </div>
                <p>Выход</p>
            </div>
        </div>
    )
}
