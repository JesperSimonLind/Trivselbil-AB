import AboutMini from "../assets/About-mini.png";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { AiOutlineArrowDown } from "react-icons/ai";
import about1 from "../assets/about1.png";
export const About = () => {
  return (
    <>
      <section className="flex flex-col min-h-screen w-full bg-center bg-cover bg-bgBlack bg-hero1">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <h2 className="font-inter font-bold text-h2 text-white">OM OSS</h2>
        </div>
        <div className="w-full flex justify-center mb-4">
          <AiOutlineArrowDown className="text-4xl text-white animate-bounce" />
        </div>
      </section>

      <section>
        <div class="relative">
          <img src={about1} />
          <h1 class="absolute text-h4 md:text-h2 lg:text-h2 font-inter font-bold text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            TRIVSELBIL HAR VARIT I BILENS TJÄNST SEDAN 1989
          </h1>
        </div>
        {/* <img src={about1}></img>
        <h2 className="font-inter font-bold text-white text-h2">
          TRIVSELBIL HAR VARIT I BILENS TJÄNST SEDAN 1989
        </h2> */}
      </section>

      <section className="bg-bgBlack bg-hero4 min-h-screen grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 text-white pt-5 pb-5">
        <div className="mt-3 text-center ml-9 flex flex-col justify-center w-5/6 gap-4 md:text-center md:ml-14 md:mt-0 lg:ml-14 lg:mt-0 lg:text-left">
          <p className="font-inter text-pGray text-p">
            Trivselbil startades för snart 30 år sedan i Tullinge. Kunderna
            finns nu liksom då både bland återförsäljare och bilhandlare men
            även privatpersoner och näringsliv i övrigt. Vi finns idag kvar på
            samma plats där allting startade, med samma bilintresse och med
            samma goda service
          </p>
          <p className="font-inter text-pGray text-p">
            Vi finns även i Rissne där vi bedriver bilvård i nära samarbete med
            Toyota Center Europeiska Motor AB och Toyota Sweden AB.
          </p>
          <h4 className="font-inter font-bold text-pGray text-h4">
            MILJÖPOLICY
          </h4>
          <p className="font-inter text-pGray text-p">
            TRIVSELBIL AB bedriver rekonditionering av fordon, bilservice,
            försäljning av släpvagnar och tillhörande kringtjänster till
            företag, organisationer och privatpersoner inom Stockholmsområdet.
          </p>
          <p className="font-inter text-pGray text-p">
            TRIVSELBIL AB ska bemöta kunder på ett trevligt sätt och våra
            produkter och tjänster ska hålla en hög kvalitet.
          </p>
          <p className="font-inter text-pGray text-p">
            TRIVSELBIL AB ska verka för att minska påverkan av miljön inom
            ekologiskt motiverade, tekniskt möjliga och ekonomiskt rimliga
            ramar.
          </p>
          <p className="font-inter text-pGray text-p">
            Vi ska följa tillämplig lagstiftning inom vårat verksamhetsområde Vi
            ska arbeta förebyggande och sträva efter förbättringar Vi ska inom
            ovan nämnda ramar prioritera varor och tjänster som innebär mindre
            belastning på miljön Vi ska informera all personal om företagets
            miljöpolicy Vi ska vara lyhörda för förändringar i omvärlden Vi ska
            ta tillvara våra anställdas, kunders och leverantörers kunskaper,
            åsikter och idéer
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img src={AboutMini} />
        </div>
      </section>
      <Footer />
    </>
  );
};
