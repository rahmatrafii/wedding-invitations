import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

const CoverMobile = ({
  isOpen,
  setIsOpen,
  setIsPlaying,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={`${
        isOpen
          ? "-translate-y-full opacity-0 invisible"
          : "translate-y-0 opacity-100 visible"
      } transition-all duration-1000 w-full h-full  min-w-[320px] absolute z-[3]`}
    >
      <Image
        width={100}
        height={100}
        unoptimized
        priority
        src="/image/foto-2.png"
        alt="pengantin"
        className="absolute w-full h-full left-0 bottom-0 object-cover object-top z-0 "
      />
      <div className="relative z-[1] h-full w-full bg-transparent flex flex-col items-center p-5 ">
        <Image
          width={100}
          height={100}
          unoptimized
          src="/image/pigeons-2.svg"
          alt="pigeons"
          className="my-6 animate-fade-down"
        />
        <p className="font-bold text-lg text-white  animate-fade-up">
          THE WEDDING OF
        </p>
        <h1 className="text-7xl font-['Luxurious_Script'] text-white animate-fade-up">
          Nailal & Via
        </h1>
        <button
          className=" flex items-center justify-center gap-x-2 animate-wiggle text-sm my-20 py-1 px-4 bg-glass rounded-full text-blue hover:ring-2 hover:ring-white transition duration-500"
          onClick={() => {
            setIsOpen(true);
            setIsPlaying(true);
          }}
        >
          <Image
            width={100}
            height={100}
            unoptimized
            src="/image/mail.svg"
            alt="mail"
            className="w-[20px] h-[20px]"
          />{" "}
          <p> Open Invitation</p>
        </button>
      </div>
      <div className="w-full absolute left-0 bottom-0">
        <Image
          width={100}
          height={100}
          unoptimized
          src="/image/shape-1.svg"
          alt="shape-1"
          className="w-full h-full relative z-0"
        />
        <div className="absolute z-[1] w-full left-0 bottom-0 p-8 text-center text-white">
          {" "}
          <p className="text-sm mb-1 animate-fade-up">
            Created with by ♥ invitato
          </p>
          <p className="text-xs animate-fade-up">
            © 2023 Nailal & Via. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoverMobile;
