"use client";
import "../components/App.scss/header.scss"; 
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import SearchInput from '../components/SearchInput';
import Modal from "../components/Modal"; // Import the modal component

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchTerm, setSearchTerm }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="container">
      <div className="navbar1">
        <div className="navbar2">
          <Image
            src="https://alifshop.uz/_ipx/s_113x32/images/alifshop-logo.svg"
            alt="Alifshop Logo"
            width={100}
            height={50}
          />
          <button className="mnbt" onClick={toggleModal}> {/* Button to toggle modal */}
            <IoMenu className="menu" />
            Tovarlar katalogi
          </button>

          {/* Search input */}
          <SearchInput 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} 
          />
        </div>

        <div className="NAVBARLIN">
          <div className="corsinkagrup">
            <MdOutlineShoppingCart className="corzinka" />
            <p>Savat</p>
          </div>
          <Link href="/products/Cart"> 
            <div className="corsinkagrup">
              <IoMdHeartEmpty className="corzinka" />
              <p>Saralanganlar</p>
            </div>
          </Link>
          <button>Kirish</button>
          <div className="lang">
            <p className="rus"> РУС/</p>
            <p className="uzb">UZB</p>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <Modal closeModal={toggleModal}> {/* Passing function to close modal */}
          <h2 className="text-lg font-bold">Tovarlar Katalogi</h2>
          <p>Bu yerda tovarlarning katalogi bo'ladi.</p>
          {/* You can add more content here */}
        </Modal>
      )}
    </div>
  );
};

export default Header;
