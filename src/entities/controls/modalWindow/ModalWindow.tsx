import { ArrowRight } from "../../../shared/ui/icons/icons-tools/ArrowRight"

interface Props {
    showModal: boolean
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalWindow = ({showModal, setShowModal}: Props) => {
    return (
        <div
            className="modal"
            style={{ display: `${showModal ? 'flex' : 'none'}` }}
            onClick={() => setShowModal(false)}>
            <div className="modal-content" onClick={(event) => event.stopPropagation()}>
                <div className="modal-category">
                    <span>Аренда недвижимости</span>
                    <ArrowRight color="#1C1C1E" />
                </div>
                <div className="modal-category">
                    <span>Аренда транспорта</span>
                    <ArrowRight color="#1C1C1E" />
                </div>
                <div className="modal-category">
                    <span>Валютные пары</span>
                    <ArrowRight color="#1C1C1E" />
                </div>
                <div className="modal-category">
                    <span>Документы</span>
                    <ArrowRight color="#1C1C1E" />
                </div>
                <div className="modal-category">
                    <span>Домашняя еда</span>
                    <ArrowRight color="#1C1C1E" />
                </div>
                <div className="modal-category">
                    <span>Мероприятия</span>
                    <ArrowRight color="#1C1C1E" />
                </div>
                <div className="modal-category">
                    <span>Покупка/продажа</span>
                    <ArrowRight color="#1C1C1E" />
                </div>
                <div className="modal-category">
                    <span>Работа</span>
                    <ArrowRight color="#1C1C1E" />
                </div>
                <div className="modal-category">
                    <span>Такси</span>
                    <ArrowRight color="#1C1C1E" />
                </div>
                <div className="modal-category">
                    <span>Услуги</span>
                    <ArrowRight color="#1C1C1E" />
                </div>
                <div className="modal-category">
                    <span>Экскурсии</span>
                    <ArrowRight color="#1C1C1E" />
                </div>
            </div>
        </div>
    )
}