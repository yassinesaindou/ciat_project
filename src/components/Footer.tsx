import {
  BsBuildingFillExclamation,
  BsClockFill,
  BsEnvelopeFill,
  BsFacebook,
  BsInstagram,
  BsPhoneFill,
  BsYoutube,
} from "react-icons/bs";

export default function Footer() {
  return (
    <footer
      className="bg-blue-700 text-blue-950  text-[1.2rem] lg:flex flex-col lg:flex-row-reverse 
    grid  lg:justify-between lg:items-center font-medium py-3 mx-auto justify-center px-3 lg:px-[3.5rem]">
      <ul className="">
        <li className="flex items-center content-center gap-5 my-2">
          <BsEnvelopeFill size={30} /> example@gmail.com
        </li>
        <li className="flex items-center content-center my-2 gap-5">
          <BsPhoneFill size={30} />
          +325871457
        </li>
        <li className="flex items-center content-center gap-5 my-3">
          <BsBuildingFillExclamation size={30} />
          Mramani Anjouan
        </li>
        <li className="flex items-center content-center gap-5">
          <BsClockFill size={30} />
          08:00-17:00
        </li>
      </ul>
      <div className="mt-5">
        <p className="font-bold">Follow us on :</p>
        <ul>
          <li className="flex items-center content-center gap-5 my-3">
            <BsFacebook size={30} />
            Facebook
          </li>
          <li className="flex items-center content-center gap-5 my-3">
            <BsInstagram size={30} />
            Instagram
          </li>
          <li className="flex items-center content-center gap-5">
            <BsYoutube size={30} />
            YouTube
          </li>
        </ul>
      </div>
      <div className="lg:text-[4.2rem] font-bold text-[2.5rem]">
        C.I.A.T
        <p className="italic text-[1rem] font-normal text-blue-100">
          Designed and developed by Yassine Saindou
        </p>
      </div>
    </footer>
  );
}
