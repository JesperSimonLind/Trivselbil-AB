import Lackskydd from "../assets/lackskydd-large.png";
import Slapvagn from "../assets/Slapvagn-large.png";
import Bilvard from "../assets/Bilvard-large.png";
import Dackservice from "../assets/dackservice-large.png";
import Bilservice from "../assets/bilservice-large.png";
import { Link } from "react-router-dom";
import services1 from "../assets/services1.png";
import services2 from "../assets/services2.png";
import services3 from "../assets/services3.png";
import services4 from "../assets/services4.png";
import { Footer } from "../components/Footer";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Header } from "../components/Header";
import { HashLink } from "react-router-hash-link";
export const Services = () => {
  return (
    <>
      <section className="flex flex-col min-h-screen w-full bg-center bg-cover bg-bgBlack bg-hero1">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <h2 className="font-inter font-bold text-h2 text-white">
            VÅRA TJÄNSTER
          </h2>
        </div>
        <div className="w-full flex justify-center mb-4">
          <AiOutlineArrowDown className="text-4xl text-white animate-bounce" />
        </div>
      </section>

      {/* LACKSKYDD */}
      <section
        id="lackskydd"
        className="bg-bgBlack bg-hero2 min-h-screen grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 pt-5 pb-5"
      >
        <div className="flex  flex-col justify-center items-center">
          <img src={Lackskydd} />
          <HashLink smooth to="/#contact">
            <button
              type="button"
              className="bg-buttonBlue hover:bg-blue-400 py-2 px-4 rounded text-lg text-white mt-6"
            >
              KONTAKTA OSS
            </button>
          </HashLink>
        </div>
        <div className="mt-3 text-center ml-9 flex flex-col justify-center w-5/6 gap-4 md:text-center md:ml-14 md:mt-0 lg:ml-14 lg:mt-0 lg:text-left">
          <h3 className="font-inter font-bold text-h3 text-white">LACKSKYDD</h3>
          <p className="font-inter text-pGray text-p">
            Olika bilfabrikat använder sig av olika billacker därför använder vi
            flera olika leverantörer av lackskydd. Vi är alltså fristående och
            använder de produkter som vi tycker fungerar bäst. Vi har lång
            erfarenhet inom bilvårdsbranschen.
          </p>
          <p className="font-inter text-pGray text-p">
            De flesta nya bilar har endast ett skyddande lager av vax ovanpå
            lacken när de kommer ut från fabriken. Efter ett par månader har
            vaxet gjort sitt och lacken börjar bli matt och förlorar sin lyster.
            Partiklar har fastnat i lacken och har börjat oxidera. Bilen behöver
            tvättas med avfettningsmedel och vaxas igen.
          </p>
          <p className="font-inter text-pGray text-p">
            Väljer du istället ett lackskydd så får du glansen tillbaka och spar
            både tid och pengar. Den blir dessutom mycket lättare att tvätta.
          </p>
          <p className="font-inter text-pGray text-p">
            Hör av dig till oss så hittar vi det lackskyddet och den behandling
            som passar just din bil bäst.
          </p>
        </div>
      </section>

      <section>
        <img src={services1}></img>
      </section>

      {/* SLÄPVAGN */}
      <section
        id="slapvagn"
        className="bg-bgBlack bg-hero3 min-h-screen grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 text-white pt-5 pb-5"
      >
        <div className="flex flex-col justify-center items-center">
          <img src={Slapvagn} />
          <HashLink smooth to="/#contact">
            <button
              type="button"
              className="bg-buttonBlue hover:bg-blue-400 py-2 px-4 rounded text-lg text-white mt-6"
            >
              KONTAKTA OSS
            </button>
          </HashLink>
        </div>
        <div className="mt-3 text-center ml-9 flex flex-col justify-center w-5/6 gap-4 md:text-center md:ml-14 md:mt-0 lg:ml-14 lg:mt-0 lg:text-left">
          <h3 className="font-inter font-bold text-h3 text-white">
            SLÄPVAGNAR FRÅN BRENDERUP
          </h3>
          <p className="font-inter text-pGray text-p">
            Är du trött på att ständigt behöva köra till macken för att hyra ett
            släp när du ska köra till tippen? Du funderar kanske redan nu på att
            köpa en egen släpvagn. Trivselbil samarbetar med Brenderup när det
            gäller nya släpvagnar. Som en av Europas största
            släpvagnstillverkare har Brenderup ett mycket brett modellsortiment
            av släpvagnar som håller hög kavalitet, vilket gör att vi kan
            tillgodose de flesta kunders önskemål. Trivselbil säljer både
            begagnade och nya släpvagnar.
          </p>
          <p className="font-inter text-pGray text-p">
            Eftersom vi tror på full service till våra kunder, utför vi givetvis
            också service på alla typer av släpvagnar. Vi har alltid ett antal
            släp i lager för snabb leverans.
          </p>
          <p className="font-inter text-pGray text-p">Våra släp</p>
          <p className="font-inter text-pGray text-p">
            Flaksläpvagnar bromsade, Brenderup Flaksläpvagnar obromsade,
            Brenderup Skåpsläp, Brenderup Entreprenadsläp, Brenderup Båttrailer
            obromsade, Brenderup Båttrailer bromsade, Brenderup Specialsläp,
            CO-Släpet
          </p>
        </div>
      </section>

      <section>
        <img src={services2}></img>
      </section>

      {/* BILVÅRD */}
      <section
        id="bilvard"
        className="bg-bgBlack bg-hero4 min-h-screen grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 text-white pt-5 pb-5"
      >
        <div className="flex flex-col justify-center items-center">
          <img src={Bilvard} />
          <HashLink smooth to="/#contact">
            <button
              type="button"
              className="bg-buttonBlue hover:bg-blue-400 py-2 px-4 rounded text-lg text-white mt-6"
            >
              KONTAKTA OSS
            </button>
          </HashLink>
        </div>
        <div className="mt-3 text-center ml-9 flex flex-col justify-center w-5/6 gap-4 md:text-center md:ml-14 md:mt-0 lg:ml-14 lg:mt-0 lg:text-left">
          <h3 className="font-inter font-bold text-h3 text-white">
            BILVÅRD INGEN VANLIG BILTVÄTT
          </h3>
          <p className="font-inter text-pGray text-p">
            Rekonditionering är precis som det låter ingen vanlig rengöring. Vad
            det egentligen betyder är att vi försöker återställa bilen till så
            nära nyskick som möjligt. Och det är precis det vi strävar efter i
            allt vårt arbete. Att återskapa den där fantastiska nybilskänslan.
          </p>
          <p className="font-inter text-pGray text-p">
            Varför inte lämna bilen för regelbunden rengöring och bevara värdet
            på bilen? Om du vill behålla känslan lite längre rekommenderar vi
            att du också lägger till en lackskyddsbehandling. Den håller i flera
            år.
          </p>
          <p className="font-inter text-pGray text-p">
            Kontakta oss för tidsbokning och prisuppgifter.
          </p>
          <p className="font-inter text-pGray text-p">
            En rekonditionering kan omfatta:
          </p>
          <p className="font-inter text-pGray text-p">
            Utvändig handtvätt Motorrengöring Maskinpolering Vaxning Kemtvätt av
            bilmattor och säten Impregneringar av inredning Dammsugning,
            fönsterputs Nanobehandling av bilfönster (vattenavvisande
            behandling) Behandling av gummi- och plastdetaljer Lackbättring
          </p>
        </div>
      </section>

      <section>
        <img src={services3}></img>
      </section>

      {/* DÄCKSERVICE */}
      <section
        id="dackservice"
        className="bg-bgBlack bg-hero2 min-h-screen grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 text-white pt-5 pb-5"
      >
        <div className="flex flex-col justify-center items-center">
          <img src={Dackservice} />
          <HashLink smooth to="/#contact">
            <button
              type="button"
              className="bg-buttonBlue hover:bg-blue-400 py-2 px-4 rounded text-lg text-white mt-6"
            >
              KONTAKTA OSS
            </button>
          </HashLink>
        </div>
        <div className="mt-3 text-center ml-9 flex flex-col justify-center w-5/6 gap-4 md:text-center md:ml-14 md:mt-0 lg:ml-14 lg:mt-0 lg:text-left">
          <h3 className="font-inter font-bold text-h3 text-white">
            DÄCKSERVICE
          </h3>
          <p className="font-inter text-pGray text-p">
            Däcken är tillsammans med bromsarna bilens i särklass viktigaste
            säkerhetskomponent. Ett bra och säkert däck kan vara avgörande när
            du behöver väja eller bromsa för att undvika en kollision.
          </p>
          <p className="font-inter text-pGray text-p">
            Trivselbil kontrollerar, byter och balanserar både dina vinter- och
            sommardäck. Har mönstringen på dina däck sett sina bästa dagar kan
            du köpa nya märkesdäck i de flesta dimensionerna i samband med
            säsongsbytet. Vi rekommenderar dig att kontrollera bromsarna när du
            ändå är nere hos oss. Det tar inte så lång tid och kostnaden är
            försumbar jämfört med nyttan.
          </p>
          <p className="font-inter text-pGray text-p">
            Eftersom vi vet att valet av däck kan vara väldigt individuellt
            arbetar vi med de flesta kända fabrikaten.
          </p>
        </div>
      </section>

      <section>
        <img src={services4}></img>
      </section>

      {/* BILSERVICE */}
      <section
        id="bilservice"
        className="bg-bgBlack bg-hero3 min-h-screen grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 text-white pt-5 pb-5"
      >
        <div className="flex flex-col justify-center items-center">
          <img src={Bilservice} />
          <HashLink smooth to="/#contact">
            <button
              type="button"
              className="bg-buttonBlue hover:bg-blue-400 py-2 px-4 rounded text-lg text-white mt-6"
            >
              KONTAKTA OSS
            </button>
          </HashLink>
        </div>
        <div className="mt-3 text-center ml-9 flex flex-col justify-center w-5/6 gap-4 md:text-center md:ml-14 md:mt-0 lg:ml-14 lg:mt-0 lg:text-left">
          <h3 className="font-inter font-bold text-h3 text-white">
            BILSERVICE
          </h3>
          <p className="font-inter text-pGray text-p">
            Vi är kapabla till att utföra de flesta arbeten inom bilservice och
            vi jobbar med alla bilmärken.
          </p>
          <p className="font-inter text-pGray text-p">Exempel på bilservice:</p>
          <p className="font-inter text-pGray text-p">
            glödlampor, torkarblad, olja och filter, batteri, bromsar, koppling,
            m.m..
          </p>
          <p className="font-inter text-pGray text-p">
            Vi monterar även extrautrustning som: dragkrok, extraljus
            (LED-ramp), billarm m.m..
          </p>
          <p className="font-inter text-pGray text-p">
            Ring 087784045 eller kom förbi oss i Tullinge för tidsbokning och
            prisuppgifter.
          </p>
          <p className="font-inter text-pGray text-p">
            Inget jobb är för stort eller för litet. Passa även på att boka in
            bilen för tvätt i samband med service.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};
