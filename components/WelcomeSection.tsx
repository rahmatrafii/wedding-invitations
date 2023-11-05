import Image from "next/image";
import React from "react";

const WelcomeSection = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      className={`${
        isOpen ? " open" : "closed"
      } transition-all relative duration-[4000] w-full h-screen max-h-screen max-w-lg min-w-[320px] text-white z-[1]`}
    >
      <div>
        <Image
          width={100}
          height={100}
          unoptimized
          priority
          src="/image/foto-3.png"
          alt="shpae-2"
          className="absolute w-full h-full left-0 top-0 object-cover object-top z-0"
        />
      </div>
      <div className="w-full absolute left-0 bottom-0 ">
        <div className="relative z-0 m-0">
          <Image
            width={100}
            height={100}
            src="/image/shape-2.svg"
            alt="shape-2"
            className="w-full  object-cover "
          />
        </div>
        <div className=" w-full left-0 bottom-0 pb-10 px-5 text-center text-white bg-[#5AA0D6] m-0">
          {" "}
          <h2
            className={`${
              isOpen ? "animate-fade-up-d" : ""
            } text-sm mb-3 font-['Kaushan_Script']  delay-1000`}
          >
            Dear Mr/Mrs/Ms,
            <br /> Family & Friends
          </h2>
          <p
            className={`${
              isOpen ? "animate-fade-up-d" : ""
            } text-xs  delay-1000`}
          >
            We are pleased to announce and invite you to our wedding. We
            sincerely hope that you will be able to attend and pray directly on
            our wedding day. Your presence will mean a lot to us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
