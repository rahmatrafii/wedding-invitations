import React, { Dispatch, SetStateAction } from "react";

const AudioControll = ({
  isOpen,
  isPlaying,
  setIsPlaying,
}: {
  isOpen: boolean;
  isPlaying: boolean;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="absolute right-7 bottom-7 z-10 flex items-center justify-center gap-x-4">
      <button
        type="button"
        onClick={() => setIsPlaying((prev) => !prev)}
        className={`${
          isOpen && isPlaying
            ? "visible opacity-100 translate-y-0"
            : isOpen && !isPlaying
            ? "visible opacity-75 translate-y-0"
            : "invisible translate-y-10 opacity-0"
        } transition-all duration-1000 border-none  p-3 cursor-pointer rounded-full  bg-[#DBB800]`}
      >
        <div
          className={`${isPlaying ? "flex" : "hidden"} relative z-0 gap-x-1`}
        >
          <img
            src="/image/music.svg"
            alt=""
            className=" absolute w-[14px] h-[14px] right-1 -bottom-2 animate-floating"
          />
          <img
            src="/image/music.svg"
            alt=""
            className=" absolute w-[14px] h-[14px] -bottom-2  animate-floating2 "
          />
        </div>
        <img
          src="/image/gramophone.svg"
          alt=""
          className="w-[25px] h-[25px] relative z-[1]"
        />
      </button>
      <button
        className={` ${
          isOpen
            ? "visible opacity-100 translate-x-0"
            : "invisible translate-y-10 opacity-0"
        } bg-[#DBB800] flex transition-all duration-1000 rounded-full w-[47px] h-[47px]  flex-col items-center justify-center`}
      >
        <span className="block mb-1 bg-white w-[20px] h-[2px] " />
        <span className="block mb-1 bg-white w-[20px] h-[2px] " />
        <span className="block  bg-white w-[20px] h-[2px] " />
      </button>
    </div>
  );
};

export default AudioControll;
