import Image from "next/image";
import "../components/App.scss/Foter/footer.scss";
import instagram from "../../public/instagram.webp";
import facebook from "../../public/facebook.svg";
import telegram from "../../public/telegram.svg";
import OK from "../../public/ok.svg";
import tiktok from "../../public/tiktok.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="foterdev">
          <ul>
            <h4>Hujjatlar</h4>
            <Link href={"/"}><li key="1">Sotish uchun umumiy shartlar</li></Link>            
            <Link href={"/"}><li key="2">Ofertalar arxivi</li></Link>
            <Link href={"/"}>  <li key="3">Nizom</li></Link>
            <Link href={"/"}> <li key="4">Guvohnoma</li></Link>
          </ul>
          <ul>
            <h4>Servis</h4>
          <Link href={"/"}><li key="5">Namoz vaqti</li></Link>
          <Link href={"/"}> <li key="6">Muddatli to'lov islomda</li></Link>
          <Link href={"/"}> <li key="7">alif shopda soting!</li></Link>
          <Link href={"/"}> <li key="8">Qaytarish</li></Link>
          </ul>
          <ul>
            <h4>Tovarlar katalogi</h4>
            <Link href={"/"}><li key="9">Smartfonlar va telefonlar</li></Link>
            <Link href={"/"}><li key="10">Gadjetlar</li></Link>
            <Link href={"/"}> <li key="11">Smartfonlar uchun aksessuarlar</li></Link>
            <Link href={"/"}><li key="12">Tegishli tovarlar</li></Link>
            <Link href={"/"}><li key="13">Soat va aksessuarlar</li></Link>
          </ul>
          <div className="econka">
            <div>
              <h4>Biz ijtimoiy axborot vositalarida</h4>
            </div>
            <div className="item">
              <li key="14">
               <Link href="https://www.instagram.com/alifshop_uz"> <Image src={instagram} alt="Instagram" width={40} height={40} /></Link>
              </li>
              <li key="15">
         <Link href="https://facebook.com"><Image src={facebook} alt="Facebook" width={40} height={40} /></Link>
              </li>
              <li key="16">
           <Link href="https://t.me/alifazobot"> <Image src={telegram} alt="Telegram" width={40} height={40} /></Link>
              </li>
              <li key="17">
               <Link href="ok.uz"><Image src={OK} alt="Odnoklassniki" width={40} height={40} /></Link>
              </li>
              <li key="18">
                <Link href="https://tik-tok.com">
                <Image src={tiktok} alt="TikTok" width={40} height={40} />
                </Link>
              </li>
            </div>
            <div className="shop">
              <h4 className="xizmat">Axborot xizmati</h4>
            <li key={"21"}>
              <Link href="href=https://www.instagram.com/alifshop_uz">  @alifshop_uz </Link>
            </li>
              <li key="20">
                <Link href="tel:+998555121212">+998 555 12 12 12</Link>
              </li>
            </div>
          </div>
        </div>
    <hr />
    <h4 className="alishof">2024 © alifshop.uz</h4>
      </div>

    </footer>
  );
};

export default Footer;
