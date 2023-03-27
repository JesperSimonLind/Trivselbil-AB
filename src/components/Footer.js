import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";

export const Footer = () => {
  return (
    <>
      <div className="flex flex-col gap-5 md:flex-row md:gap-0 lg:flex-row lg:gap-0 justify-evenly bg-bgBlack pt-5 pb-5">
        <div className="flex flex-col items-center">
          <BsFillTelephoneFill className="text-white text-2xl mb-3" />
          <p className="font-inter text-leadP text-pGray text-center">Ring</p>
          <a className="font-inter text-p text-pGray" href="tel:08-778-40-45">
            08-778-40-45
          </a>
        </div>
        <div className="flex flex-col items-center">
          <AiFillFacebook className="text-white text-2xl mb-3" />
          <p className="font-inter text-leadP text-pGray text-center">
            Facebook
          </p>
          <a
            className="font-inter text-p text-pGray"
            href="https://www.facebook.com/Trivselbil"
            target="_blank"
          >
            Följ Trivselbil AB på Facebook
          </a>
        </div>
        <div className="flex flex-col items-center">
          <GrMail className="text-white text-2xl mb-3" />
          <p className="font-inter text-leadP text-pGray text-center">E-post</p>
          <a
            className="font-inter text-p text-pGray"
            href="mailto: info@trivselbil.se"
          >
            info@trivselbil.se
          </a>
        </div>
      </div>
    </>
  );
};
