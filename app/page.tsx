"use client";
import AudioControll from "@/components/AudioControll";
import CoverDesktop from "@/components/CoverDesktop";
import CoverMobile from "@/components/CoverMobile";
import WelcomeSection from "@/components/WelcomeSection";
import { useEffect, useRef, useState } from "react";
import "animate.css";
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
    <main className="flex max-h-screen items-center">
      <div className="flex-1 h-screen relative  hidden lg:block border-r-2">
        <CoverDesktop />
      </div>
      <div
        className={` w-full h-screen max-w-lg min-w-[320px] overflow-y-auto mx-auto `}
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
