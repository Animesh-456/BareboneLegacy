// src/components/Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose }) => {

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center z-50 ${isOpen ? 'visible' : 'invisible'
        }`}
        >
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Modal Content</h2>
                <p>This is the content of the modal. Replace this with your content.</p>
                <button
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
