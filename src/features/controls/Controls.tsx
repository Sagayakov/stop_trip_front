import { useState } from 'react'
import { AllCategories, Input, ModalWindow, SelectGeo } from '../../entities/controls'
import './controls.scss'

export const Controls = () => {
    const [showModal, setShowModal] = useState(false)

    return (
        <div className="controls">
            <div className="controls-wrapper">
                <AllCategories showModal={showModal} setShowModal={setShowModal} />
                <Input />
                <SelectGeo />
                <ModalWindow showModal={showModal} setShowModal={setShowModal} />
            </div>
        </div>
    )
}
