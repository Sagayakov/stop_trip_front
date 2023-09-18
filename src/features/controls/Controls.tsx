import { useState } from 'react'
import { ArrowRight } from '../../shared/ui/icons/icons-tools/ArrowRight'
import { Burger } from '../../shared/ui/icons/icons-tools/Burger'
import { Find } from '../../shared/ui/icons/icons-tools/Find'
import { MapIcon } from '../../shared/ui/icons/icons-tools/MapIcon'
import './controls.scss'

export const Controls = () => {
    const [showModal, setShowModal] = useState(false)

    return (
        <div className="controls">
            <div className="controls-wrapper">
                <div className="button-all-categories" onClick={() => setShowModal(!showModal)}>
                    <Burger color="white" />
                    Все категории
                </div>
                <div className="input-wrapper">
                    <Find />
                    <input placeholder="Найти услугу или товар" />
                </div>
                <div className="select-wrapper">
                    <MapIcon color="#1F6FDE" />
                    <select>
                        <option value="Гоа">Гоа</option>
                        <option value="Гоа">Гоа</option>
                        <option value="Гоа">Гоа</option>
                        <option value="Гоа">Гоа</option>
                        <option value="Гоа">Гоа</option>
                    </select>
                </div>
                <div
                    className="modal"
                    style={{ display: `${showModal ? 'block' : 'none'}` }}
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
            </div>
        </div>
    )
}
