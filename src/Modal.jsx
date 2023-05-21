import { FaTimes } from "react-icons/fa"
import { useGlobalContext } from "./context"

const Modal = () => {
    const { closeModal, isModal } = useGlobalContext()
    return (
        <div className={isModal ? 'modal-overly show-modal' : 'modal-overly'}>
            <div className="modal-container">
                <h3>modal content</h3>
                <button className="close-modal-btn" onClick={closeModal}>
                    <FaTimes />
                </button>
            </div>
        </div>
    )
}

export default Modal
