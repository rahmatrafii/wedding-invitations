import Image from "next/image";
import React from "react";

const CoverDesktop = () => {
  return (
    <div className="w-full">
      <Image
        unoptimized
        width={100}
        height={100}
        priority
        src="/image/foto-1.png"
        alt=""
        className="absolute h-full w-full object-cover object-top z-0"
      />
      <div className="absolute z-[1] w-max h-max px-16 py-10 text-center bg-glass rounded-lg right-[50%] translate-x-1/2 bottom-[40px]">
        <div className="absolute  top-[-20%]  right-[50%] translate-x-1/2">
          <Image
            unoptimized
            width={100}
            height={100}
            src="/image/pigeons-3.svg"
            alt="pigeons"
            className=" animate-fade-down"
          />
        </div>
        <h4 className="text-blue font-semibold mb-2 animate-fade-up">
          THE WEDDING OF
        </h4>
        <h3 className="text-blue text-7xl xl:text-8xl font-['Luxurious_Script'] animate-fade-up">
          Nailal & Via
        </h3>
      </div>
      <div className="absolute right-[50px] top-[50px] text-center max-w-xs text-white animate-fade-up">
        <p>
          {" "}
          “And I knew exactly how old Walt Disney’s Cinderella felt when she
          found her prince.”{" "}
        </p>
        <p>— Elizabeth Young</p>
      </div>
    </div>
  );
};

export default CoverDesktop;
