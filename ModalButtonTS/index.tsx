import { useState } from 'react';
import Modal from '../ModalTS';
import './modalButton.css';

// Type declaration for props
interface ModalData {
    modalPosition: React.CSSProperties;
    buttonName:string;
    color:string;
    textColor:string;
    Component: React.FC;
}

const defaultProps = {
            modalPosition: {position:'fixed'},

            // Name to display on button, with default of Click
            buttonName: 'Click',

            // Background color of the button, with default of light blue
            color: '#3081c8',
            
            // Text color of the button, with default of white
            textColor: '#fff',

            // Component to be displayed in the modal, default displays info on where to pass in the component
            Component: function () {
                return (<div style={{backgroundColor:'white',padding:'2rem',textAlign:'center'}}>
                    <p>Pass the Component you want to render into the ModalButton Element.</p> 
                    <p>{'<ModalButton Component = {YourComponent} />'}</p>
                </div>)},
}

function ModalButton({ 

            modalPosition,

            // Name to display on button, with default of Click
            buttonName ,

            // Background color of the button, with default of light blue
            color ,
            
            // Text color of the button, with default of white
            textColor ,

            // Component to be displayed in the modal, default displays info on where to pass in the component
            Component ,

            // Any additional props to be used in the component in the modal
            ...props 
        }:ModalData) {
            
    // Handles opening and closing of modal
    const [showModal,setShowModal] = useState<boolean>(false)

    return (
        <>

            {/* Button to open modal */}
            <div style={{backgroundColor:color,color:textColor}}className="modalBtn" onClick={()=>setShowModal(true)}>
                {buttonName}
            </div>


            <Modal modalPosition={modalPosition} showModal={showModal} setShowModal={setShowModal} Component={Component} {...props} />
        </>
    );
}

ModalButton.defaultProps = defaultProps;

export default ModalButton;