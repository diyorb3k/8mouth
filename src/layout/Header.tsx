import "../components/App.scss/header.scss"; // CSS faylini import qilish
import { IoMenu } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoSearch } from "react-icons/io5";


const Header = () => {
  return (
    <div className="container">
      <div className="navbar1">
        {/* NAVBAR-LEFT */}
       <div  className="navbar2">
       <img
          src="https://alifshop.uz/_ipx/s_113x32/images/alifshop-logo.svg" // Rasm URL manzili
          alt="Alishof Logo"
          max-width={100}
          height={50}
        />
        <button className="mnbt">
          <IoMenu className="menu" />
          Tovarlar katalogi
        </button>
       <div className="inputbtn">
       <input type="text" placeholder="Tovarlarni izlash" />
        <button>
          <IoSearch className="seach"/>
        </button>
       </div>
       </div>

{/* NAVBAR-RIGHT */}

        <div className="NAVBARLIN">
        <div className="corsinkagrup">
          <MdOutlineShoppingCart className="corzinka" />
          <p>Savat</p>
        </div>
        <div className="corsinkagrup">
          <IoMdHeartEmpty className="corzinka" />
          <p>Saralanganlar</p>
        </div>
        <button>Kirish</button>
        <div className="lang">
       <p className="rus"> РУС/</p> <p className="uzb">UZB</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Header;