/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { LogoIcon } from "../../public/assets";
import Link from 'next/link';
import { CloseSquare, Menu } from 'iconsax-react';
import { useState } from "react";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div className="w-full h-[3rem] flex justify-between z-20 bg-[#0E0E0E] fixed top-0 left-0 items-center px-2 lg:px-8">
      <div className="flex z-20 transition-all  bg-[##0E0E0E] w-[80%] justify-start items-center gap-4">
        <Image src={LogoIcon} alt="" />
        <div className="text-white-100 text-md">{showMenu ? "Menu" : `We're on a Mission`}</div>
      </div>
      <div className="hidden lg:block text-white-100 text-md">LOGO</div>
      {showMenu? <CloseSquare className="block lg:hidden relative z-20" size={40} onClick={() => setShowMenu(false) } /> : <Menu className="block lg:hidden relative z-20" size={32} onClick={() => setShowMenu(true)} /> }
      <div className={`${showMenu ? "translate-x-0" : "translate-x-[-100%]"} w-full fixed flex bg-[#0E0E0E] justify-start items-center top-0 left-0 h-full transition-transform`}>
      <ul className='text-white capitalize w-full'>
          <li className='mt-6 text-lg leading-[18px] font-bold pl-5'><Link href='/Genesispass'>GENESIS PASS</Link></li>
          <li className='mt-6 text-lg leading-[18px] font-bold pl-5'><Link href='/Services'>SERVICES</Link></li>
          <li className='mt-6 text-lg leading-[18px] font-bold pl-5'><Link href='/Project'>PROJECTS</Link></li>
          <li className='mt-6 text-lg leading-[18px] font-bold pl-5'><Link href='/Nft'>NFT</Link></li>
          <li className='mt-6 text-lg leading-[18px] font-bold pl-5'><Link href='/Faq'>FAQ</Link></li>
          <li className='mt-6 flex w-full justify-between items'>
          <p className='text-lg leading-[18px] font-bold pl-5 opacity-40'>PLATFORM</p>
          <p className='text-lg leading-[18px] font-bold pl-5 opacity-40 mr-2'>COMING SOON</p>
        </li>
        </ul>
      </div>
    </div>
  );
}
