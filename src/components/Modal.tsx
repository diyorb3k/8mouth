// Modal.tsx

import './App.scss/Modal.scss'

import React from "react";

interface ModalProps {
  closeModal: () => void; // Modalni yopish funksiyasi
  children: React.ReactNode; // Modalda ko‘rsatiladigan elementlar
}

const Modal: React.FC<ModalProps> = ({ closeModal, children }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      onClick={closeModal}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full transform transition-transform duration-300 ease-in-out mt-18" // Margin-top qo'shildi
        onClick={(e) => e.stopPropagation()} // Modal ichida bosilganda yopmaslik
      >
        <button
          className="absolute top-2 right-2 text-gray-600 "
          onClick={closeModal}
        >
          &times;
        </button>
        {children}
      </div>
      
        <li className="li_etim   mt-10">smartfonlar va Aksuarla</li>
        <p>Noutboklar,kompyuterlar</p>
        <p>Tv proiktlar</p>
        <p>Audio texnikalar</p>
        <p>Transport</p>
        <ul>uy uchun texnika</ul>
    

      <li>Oshxona uchun texnika</li>
      <li>Guzalik va sog'lik</li>
      <li>Aqiliy uy</li>
      <li>uyin uchun texnika</li>
      <li>Sport va tavorlar</li>
      <li>Avtotavorlar</li>
      <li>Asboblar va bog' texnikasi</li>
      <li>Bolalar buyumlari</li>
      <li>Qurulish va tamirlash</li>
   
     
    </div>
  );
};

export default Modal;
