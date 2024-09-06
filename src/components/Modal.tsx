// Modal.tsx

import Link from "next/link";
import "./App.scss/Modal.scss";

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

     <div className="li_grup">
     <li className="li_etim   mt-10">smartfonlar va Aksuarla</li>
   
      <Link href={'/'}><li>Noutboklar,kompyuterlar</li></Link>
      <Link href={'/'}>      <li>Tv proiktlar</li></Link>
      <Link href={'/'}><li>Audio texnikalar</li></Link>
      <Link href={'/'}><li>Transport</li></Link>
      <Link href={'/'}> <li>uy uchun texnika</li></Link>
      <Link href={'/'}><li>Oshxona uchun texnika</li></Link>
      <Link href={'/'}> <li>Guzalik va sog'lik</li></Link>
      <Link href={'/'}> <li>Aqiliy uy</li></Link>
      <Link href={'/'}><li>uyin uchun texnika</li></Link>
      <Link href={'/'}> <li>Sport va tavorlar</li></Link>
      <Link href={'/'}>  <li>Avtotavorlar</li></Link>
      <Link href={'/'}><li>Asboblar va bog' texnikasi</li></Link>
      <Link href={'/'}> <li>Bolalar buyumlari</li></Link>
      <Link href={'/'}><li>Qurulish va tamirlash</li></Link>



      
      
     
      
     
     
      
     
    
      
     
      
     </div>
    </div>
  );
};

export default Modal;
