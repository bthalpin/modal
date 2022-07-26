import './modal.css';

function Modal({

            // Boolean to determine if modal is shown
            showModal,

            // Toggles modal show/hide
            setShowModal,

            // Component to be displayed in modal
            Component,

            // Props to be passed down to the component
            props
        }) {
    
    // Closes the modal if clicked outside of the component
    const handleClose = (e) => {
        e.preventDefault();
        if (e.target.classList[0] !== 'modal'){
            return;
        }
        setShowModal(false);
    }

    return (
        <>

            {/* Background behind modal that handles closing when clicked off */}
            <div className={`modal ${showModal?'showModal':'hideModal'}`} onClick={handleClose}>

                {/* Contains component to display in modal */}
                <div className="modalCard"> 
                    <Component props={props}/>
                </div>
            </div>
        </>
    );
}

export default Modal;