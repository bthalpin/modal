import React, { SetStateAction } from 'react';
import './modal.css';

// Type declaration for props
interface ModalData {
    modalPosition: React.CSSProperties;
    showModal: boolean;
    setShowModal: React.Dispatch<SetStateAction<boolean>>;
    Component: React.FC;
}


function Modal({

            modalPosition ,

            // Boolean to determine if modal is shown
            showModal ,

            // Toggles modal show/hide
            setShowModal,

            // Component to be displayed in modal
            Component,

            // Props to be passed down to the component
            ...props
        }:ModalData) {
    
    // Closes the modal if clicked outside of the component
    const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();

        const targetEl = e.target as Element;
        const target = targetEl.classList[0]
        if (target !== 'modal'){
            return;
        }
        setShowModal(false);
    }
    
    return (
        <>

            {/* Background behind modal that handles closing when clicked off */}
            <div className={`modal ${showModal?'showModal':'hideModal'}`} onClick={handleClose}>

                {/* Contains component to display in modal */}
                <div style={modalPosition} className="modalCard"> 
                    <Component {...props}/>
                </div>
            </div>
        </>
    );
}

export default Modal;