"use client";
import AudioControll from "@/components/AudioControll";
import CoverDesktop from "@/components/CoverDesktop";
import CoverMobile from "@/components/CoverMobile";
import WelcomeSection from "@/components/WelcomeSection";
import { useEffect, useRef, useState } from "react";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    } else if (!isPlaying && isOpen && audioRef.current) {
      audioRef.current.pause();
    }
  }, [isOpen, isPlaying]);
  return (
    <main className="flex max-h-screen w-full">
      <div className="flex-1 h-screen relative  hidden lg:block border-r-2 overflow-hidden">
        <CoverDesktop />
      </div>
      <div
        className={`${
          isOpen ? "overflow-y-auto" : "overflow-y-hidden"
        } w-full  relative max-w-lg min-w-[320px] mx-auto custom-scrollbar`}
      >
        <CoverMobile
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setIsPlaying={setIsPlaying}
        />
        <WelcomeSection isOpen={isOpen} />
        
        <AudioControll
          isOpen={isOpen}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      </div>
      <audio ref={audioRef} src="/song/song.mp3" loop={true} />
    </main>
  );
}
