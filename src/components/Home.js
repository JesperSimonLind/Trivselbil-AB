import { Header } from "../components/Header";
import Hero2mini from "../assets/Hero2-side-image.png";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { FaMapMarkerAlt } from "react-icons/fa";
import Lackskydd from "../assets/Lackskydd-mini.png";
import Slapvagn from "../assets/slapvagn-mini.png";
import Bilvard from "../assets/bilvard-mini.png";
import Dackservice from "../assets/dackservice-mini.png";
import Bilservice from "../assets/bilservice-mini.png";
import { HashLink } from "react-router-hash-link";
export const Home = () => {
  return (
    <>
      {/* HERO */}
      <section className="flex flex-col min-h-screen w-full bg-center bg-cover bg-bgBlack bg-hero1">
        <Header />
        <div className="flex-1 flex items-center">
          <div className="mx-12">
            <h4 className="font-inter font-bold text-h4 mt-1 text-white">
              VÄLKOMMEN TILL TRIVSELBIL AB
            </h4>
            <h1 className="text-4xl md:text-h1 lg:text-h1 font-inter font-bold mt-1 text-white">
              BILVERKSTAD I TULLINGE
            </h1>
            <p className="font-inter  mt-1 text-leadP text-pGray">
              Trivselbil tar hand om din bil och <br /> lämnar en nästan ny
              tillbaka
            </p>
            <HashLink smooth to="/#contact">
              <button
                type="button"
                className="bg-buttonBlue hover:bg-blue-400 py-2 px-4 rounded text-lg text-white mt-2"
              >
                Kontakta oss
              </button>
            </HashLink>
          </div>
        </div>
        <div className="w-full flex justify-center mb-4">
          <AiOutlineArrowDown className="text-4xl text-white animate-bounce" />
        </div>
      </section>

      <section className="bg-bgBlack bg-hero2 min-h-screen">
        <div className="flex justify-center p-5">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div class="w-80 p-2 bg-bgBlack/[0.70] transform transition-all hover:-translate-y-2 duration-300">
              <img class="h-40 object-cover" src={Lackskydd} alt="" />
              <div class="p-2">
                <h3 class="font-bold font-inter text-h3 text-white mb-2 text-center">
                  LACKSKYDD
                </h3>
                <p class="text-p text-pGray font-inter text-center">
                  Hör av dig till oss så hittar vi det lackskyddet och den
                  behandling som passar just din bil bäst.
                </p>
              </div>
              <div class="m-2 flex justify-center">
                <HashLink smooth to="/vara-tjanster/#lackskydd">
                  <button
                    type="button"
                    className="bg-buttonBlue hover:bg-blue-400 py-2 px-4 rounded text-lg text-white mt-2"
                  >
                    LÄS MER
                  </button>
                </HashLink>
              </div>
            </div>

            <div class="w-80 p-2 bg-bgBlack/[0.70] transform transition-all hover:-translate-y-2 duration-300">
              <img class="h-40 object-cover" src={Slapvagn} alt="" />
              <div class="p-2">
                <h3 class="font-bold font-inter text-h3 text-white mb-2 text-center">
                  SLÄPVAGNAR
                </h3>
                <p class="text-p text-pGray font-inter text-center">
                  Är du trött på att ständigt behöva köra till macken för att
                  hyra ett släp när du ska köra till tippen?
                </p>
              </div>
              <div class="m-2 flex justify-center">
                <HashLink smooth to="/vara-tjanster/#slapvagn">
                  <button
                    type="button"
                    className="bg-buttonBlue hover:bg-blue-400 py-2 px-4 rounded text-lg text-white mt-2"
                  >
                    LÄS MER
                  </button>
                </HashLink>
              </div>
            </div>

            <div class="w-80 p-2 bg-bgBlack/[0.70] transform transition-all hover:-translate-y-2 duration-300">
              <img class="h-40 object-cover" src={Bilvard} alt="" />
              <div class="p-2">
                <h3 class="font-bold font-inter text-h3 text-white mb-2 text-center">
                  BILVÅRD
                </h3>
                <p class="text-p text-pGray font-inter text-center">
                  Rekonditionering är precis som det låter ingen vanlig
                  rengöring.
                </p>
                <p class="opacity-0">Rekonditionering</p>
              </div>
              <div class="m-2 flex justify-center">
                <HashLink smooth to="/vara-tjanster/#bilvard">
                  <button
                    type="button"
                    className="bg-buttonBlue hover:bg-blue-400 py-2 px-4 rounded text-lg text-white mt-2"
                  >
                    LÄS MER
                  </button>
                </HashLink>
              </div>
            </div>

            <div class="w-80 p-2 bg-bgBlack/[0.70] transform transition-all hover:-translate-y-2 duration-300">
              <img class="h-40 object-cover" src={Dackservice} alt="" />
              <div class="p-2">
                <h3 class="font-bold font-inter text-h3 text-white mb-2 text-center">
                  DÄCKSERVICE
                </h3>
                <p class="text-p text-pGray font-inter text-center">
                  Hos oss får du hjälp med allt som rör däck.
                </p>
                <p class="opacity-0">Rekonditionering</p>
              </div>
              <div class="m-2 flex justify-center">
                <HashLink smooth to="/vara-tjanster/#dackservice">
                  <button
                    type="button"
                    className="bg-buttonBlue hover:bg-blue-400 py-2 px-4 rounded text-lg text-white mt-2"
                  >
                    LÄS MER
                  </button>
                </HashLink>
              </div>
            </div>

            <div class="w-80 p-2 bg-bgBlack/[0.70] transform transition-all hover:-translate-y-2 duration-300">
              <img class="h-40 object-cover" src={Bilservice} alt="" />
              <div class="p-2">
                <h3 class="font-bold font-inter text-h3 text-white mb-2 text-center">
                  BILSERVICE
                </h3>
                <p class="text-p text-pGray font-inter text-center">
                  Vi är kapabla till att utföra de flesta arbeten inom
                  bilservice och vi jobbar med alla bilmärken.
                </p>
              </div>
              <div class="m-2 flex justify-center">
                <HashLink smooth to="/vara-tjanster/#bilservice">
                  <button
                    type="button"
                    className="bg-buttonBlue hover:bg-blue-400 py-2 px-4 rounded text-lg text-white mt-2"
                  >
                    LÄS MER
                  </button>
                </HashLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-bgBlack bg-hero3 min-h-screen grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 text-white pt-5 pb-5">
        <div className="flex justify-center items-center">
          <img src={Hero2mini} />
        </div>
        <div className="mt-3 text-center ml-9 flex flex-col justify-center w-5/6 gap-4 md:text-center md:ml-14 md:mt-0 lg:ml-14 lg:mt-0 lg:text-left">
          <h3 className="font-inter font-bold text-h3 text-white sm:text-center lg:text-left">
            ETT KLASSISKT SERVICEFÖRETAG
          </h3>
          <p className="font-inter text-pGray text-p">
            Trivselbil är ett klassiskt serviceföretag med anställda som kan
            bilar. En one-stop-shop för bilservice helt enkelt. Det innebär att
            du aldrig ska behöva ta din bil någon annanstans. Vi tar hand om den
            åt dig.
          </p>
          <p className="font-inter text-pGray text-p">
            Tvekar du att ta med vänner och bekanta på en tur för att bilen ser
            ut som den gör? Är lacken blek eller ser fälgarna lite risiga ut? Är
            det dags för ny olja eller nya bromsar? Har mönstret i däcken sett
            sina bästa dagar eller kärvar kopplingen?
          </p>
          <p className="font-inter text-pGray text-p">
            Våra anställda kan det mesta om bilar och inget uppdrag är
            egentligen för litet eller stort. Kom in med din bil idag. Vi lovar
            att göra allt för att återställa den i samma skick som när den kom
            från fabriken. För att inte tala om den värdeökning du får på köpet.
            Perfekt om du till exempel har tänkt lägga ut bilen till
            försäljning. Ring och boka en tid redan idag. Vi kan bilservice!
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-bgBlack bg-hero4 min-h-screen pt-5 pb-5"
      >
        <h2 className="text-h2 font-inter font-bold text-white text-center mb-20">
          KONTAKTA OSS
        </h2>
        <div className="flex-col gap-5 flex justify-evenly mb-40 lg:flex-row lg:gap-0">
          <div className="flex flex-col items-center">
            <BsFillTelephoneFill className="text-white text-4xl mb-3" />
            <p className="font-inter text-leadP text-pGray text-center">Ring</p>
            <a className="font-inter text-p text-pGray" href="tel:08-778-40-45">
              08-778-40-45
            </a>
          </div>
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-white text-4xl mb-3" />
            <p className="font-inter text-leadP text-pGray text-center">
              Besöksadress
            </p>
            <p className="font-inter text-p text-pGray text-center">
              Trivselbil AB
            </p>
            <p className="font-inter text-p text-pGray text-center">
              Sadelmakarvägen 11B, Box 534
            </p>
            <p className="font-inter text-p text-pGray text-center">
              146 33 Tullinge
            </p>
          </div>
          <div className="flex flex-col items-center">
            <GrMail className="text-white text-4xl mb-3" />
            <p className="font-inter text-leadP text-pGray text-center">
              E-post
            </p>
            <a
              className="font-inter text-p text-pGray"
              href="mailto: info@trivselbil.se"
            >
              info@trivselbil.se
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="font-inter text-h3 text-white font-bold text-center">
            ÖPPETTIDER TULLINGE
          </h3>
          <div className="grid-cols-2 flex justify-center gap-6 mt-2">
            <div>
              <p className="font-inter text-p text-pGray">Måndag - Torsdag:</p>
              <p className="font-inter text-p text-pGray">Fredag:</p>
              <p className="font-inter text-p text-pGray">Lördag - Söndag:</p>
              <p className="font-inter text-p text-pGray">Lunch:</p>
            </div>
            <div>
              <p className="font-inter text-p text-pGray">08:00 - 17:00</p>
              <p className="font-inter text-p text-pGray">08:00 - 15:10</p>
              <p className="font-inter text-p text-pGray">Stängt</p>
              <p className="font-inter text-p text-pGray">10:30 - 11:15</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2042.421450117953!2d17.92045661598487!3d59.20896992770928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f7101732b7da1%3A0x78cde4d469c6badc!2sTrivselbil!5e0!3m2!1ssv!2sse!4v1679769947127!5m2!1ssv!2sse"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};
