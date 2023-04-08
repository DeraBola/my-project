/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { LogoIcon } from "../../public/assets";

export default function NavBar() {
  return (
    <div className="w-full h-[3rem] flex justify-between z-20 bg-[#0E0E0E] fixed top-0 left-0 items-center px-2 lg:px-8">
      <div className="missionImage flex">
        <Image src={LogoIcon} alt="" />
        <div className="mission">We're on a mission</div>
      </div>
      <div className="logo">LOGO</div>
    </div>
  );
}
