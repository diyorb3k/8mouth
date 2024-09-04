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
            <li>
              <Link href={"/"}>Sotish uchun umumiy shartlar</Link>
            </li>
            <li>
              <Link href={"/"}>Ofertalar arxivi</Link>
            </li>
            <li>
              <Link href={"/"}>Nizom</Link>
            </li>
            <li>
              <Link href={"/"}>Guvohnoma</Link>
            </li>
          </ul>
          <ul>
            <h4>Servis</h4>
            <li>
              <Link href={"/"}>Namoz vaqti</Link>
            </li>
            <li>
              <Link href={"/"}>Muddatli to&apos;lov islomda</Link>
            </li>
            <li>
              <Link href={"/"}>Alif shopda soting!</Link>
            </li>
            <li>
              <Link href={"/"}>Qaytarish</Link>
            </li>
          </ul>
          <ul>
            <h4>Tovarlar katalogi</h4>
            <li>
              <Link href={"/"}>Smartfonlar va telefonlar</Link>
            </li>
            <li>
              <Link href={"/"}>Gadjetlar</Link>
            </li>
            <li>
              <Link href={"/"}>Smartfonlar uchun aksessuarlar</Link>
            </li>
            <li>
              <Link href={"/"}>Tegishli tovarlar</Link>
            </li>
            <li>
              <Link href={"/"}>Soat va aksessuarlar</Link>
            </li>
          </ul>
          <div className="econka">
            <div>
              <h4>Biz ijtimoiy axborot vositalarida</h4>
            </div>
            <div className="item">
              <li>
                <Link href="https://www.instagram.com/alifshop_uz">
                  <Image src={instagram} alt="Instagram" width={40} height={40} />
                </Link>
              </li>
              <li>
                <Link href="https://facebook.com">
                  <Image src={facebook} alt="Facebook" width={40} height={40} />
                </Link>
              </li>
              <li>
                <Link href="https://t.me/alifazobot">
                  <Image src={telegram} alt="Telegram" width={40} height={40} />
                </Link>
              </li>
              <li>
                <Link href="https://ok.uz">
                  <Image src={OK} alt="Odnoklassniki" width={40} height={40} />
                </Link>
              </li>
              <li>
                <Link href="https://tik-tok.com">
                  <Image src={tiktok} alt="TikTok" width={40} height={40} />
                </Link>
              </li>
            </div>
            <div className="shop">
              <h4 className="xizmat">Axborot xizmati</h4>
              <li>
                <Link href="https://www.instagram.com/alifshop_uz">@alifshop_uz</Link>
              </li>
              <li>
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
