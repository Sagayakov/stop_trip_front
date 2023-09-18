import { FormEnter } from ".."
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks"
import { toggleModalEnter } from "../../../features/model/modalAuth/reducers/toggleModal"
import { Close } from "../../../shared/ui/icons/icons-tools/Close"

export const Modal = () => {
    const toggle = useAppSelector(state => state.toggleModalEnter.toggle)
    const dispatch = useAppDispatch()

    return (
        <div
            className="modal"
            style={{ display: `${toggle ? 'block' : 'none'}` }}
            onClick={() => dispatch(toggleModalEnter(!toggle))}>
            <div className="modal-wrapper" onClick={(event) => event.stopPropagation()}>
                <Close onclick={() => dispatch(toggleModalEnter(false))} />
                <div className="modal-header">
                    <div className="enter">Вход</div>
                    <div className="registration">Регистрация</div>
                </div>
                <FormEnter />
            </div>
        </div>
    )
}