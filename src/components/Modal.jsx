import './Modal.css'

function Modal() {
    return (
        <div>
            <div className='modal'>
                <div className='modal__title'>Are you sure?</div>
                <div className="modal__buttons">
                    <button className="btn btn__cancel">Cancel</button>
                    <button className="btn">Confirm</button>
                </div>
            </div>
        </div>
    );       
}

export default Modal;