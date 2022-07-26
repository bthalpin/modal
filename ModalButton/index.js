import { useState } from 'react';
import Modal from '../Modal';
import './modalButton.css';

function ModalButton({ 

            // Name to display on button, with default of Click
            buttonName = 'Click',

            // Background color of the button, with default of light blue
            color = '#3081c8',
            
            // Text color of the button, with default of white
            textColor = '#fff',

            // Component to be displayed in the modal, default displays info on where to pass in the component
            Component = () => 
                (<div style={{backgroundColor:'white',padding:'2rem',textAlign:'center'}}>
                    <p>Pass the Component you want to render into the ModalButton Element.</p> 
                    <p>{'<ModalButton Component = {YourComponent} />'}</p>
                </div>),

            // Any additional props to be used in the component in the modal
            props  
        }) {

    // Handles opening and closing of modal
    const [showModal,setShowModal] = useState(false)
    return (
        <>

            {/* Button to open modal */}
            <div style={{backgroundColor:color,color:textColor}}className="modalBtn" onClick={()=>setShowModal(true)}>
                {buttonName}
            </div>


            <Modal showModal={showModal} setShowModal={setShowModal} Component={Component} props={props} />
        </>
    );
}

export default ModalButton;