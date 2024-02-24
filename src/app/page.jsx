import {
  FaHome,
  FaStepBackward,
  FaStepForward,
  FaVolumeDown,
} from "react-icons/fa";
import { FaArrowRight, FaArrowLeft, FaPlay, FaShuffle } from "react-icons/fa6";
import { BsRepeat } from "react-icons/bs";
import { GiMicrophone } from "react-icons/gi";
import { PiComputerTowerBold } from "react-icons/pi";
import { MdCloseFullscreen } from "react-icons/md";
import { HiOutlineQueueList } from "react-icons/hi2";

import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-2">
              <FaArrowLeft />
            </button>
            <button className="rounded-full bg-black/40 p-2">
              <FaArrowRight />
            </button>
          </div>
          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <a className="bg-white/10 group rounded overflow-hidden flex items-center cursor-pointer gap-4 hover:bg-white/20 transition-colors">
              <Image src="/download.jpg" width={104} height={104} />
              <strong>Samurai</strong>
              <button className="w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <FaPlay />
              </button>
            </a>
            <a className="bg-white/10 group rounded overflow-hidden flex items-center cursor-pointer gap-4 hover:bg-white/20 transition-colors">
              <Image src="/download.jpg" width={104} height={104} />
              <strong>Samurai</strong>
              <button className="w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <FaPlay />
              </button>
            </a>
            <a className="bg-white/10 group rounded overflow-hidden flex items-center cursor-pointer gap-4 hover:bg-white/20 transition-colors">
              <Image src="/download.jpg" width={104} height={104} />
              <strong>Samurai</strong>
              <button className="w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <FaPlay />
              </button>
            </a>
            <a className="bg-white/10 group rounded overflow-hidden flex items-center cursor-pointer gap-4 hover:bg-white/20 transition-colors">
              <Image src="/download.jpg" width={104} height={104} />
              <strong>Samurai</strong>
              <button className="w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <FaPlay />
              </button>
            </a>
            <a className="bg-white/10 group rounded overflow-hidden flex items-center cursor-pointer gap-4 hover:bg-white/20 transition-colors">
              <Image src="/download.jpg" width={104} height={104} />
              <strong>Samurai</strong>
              <button className="w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <FaPlay />
              </button>
            </a>
            <a className="bg-white/10 group rounded overflow-hidden flex items-center cursor-pointer gap-4 hover:bg-white/20 transition-colors">
              <Image src="/download.jpg" width={104} height={104} />
              <strong>Samurai</strong>
              <button className="w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <FaPlay />
              </button>
            </a>
          </div>
          <h1 className="font-semibold text-3xl mt-10">Made for Strickk</h1>
          <div className="grid grid-cols-8 gap-4 mt-4">
            <a
              href="/"
              className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10"
            >
              <Image
                src="/gato.jpg"
                className="w-full"
                width={120}
                height={120}
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                slowburn, Alto, Chet, Baker and more
              </span>
            </a>
            <a
              href="/"
              className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10"
            >
              <Image
                src="/gato.jpg"
                className="w-full"
                width={120}
                height={120}
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                slowburn, Alto, Chet, Baker and more
              </span>
            </a>
            <a
              href="/"
              className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10"
            >
              <Image
                src="/gato.jpg"
                className="w-full"
                width={120}
                height={120}
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                slowburn, Alto, Chet, Baker and more
              </span>
            </a>
            <a
              href="/"
              className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10"
            >
              <Image
                src="/gato.jpg"
                className="w-full"
                width={120}
                height={120}
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                slowburn, Alto, Chet, Baker and more
              </span>
            </a>
            <a
              href="/"
              className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10"
            >
              <Image
                src="/gato.jpg"
                className="w-full"
                width={120}
                height={120}
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                slowburn, Alto, Chet, Baker and more
              </span>
            </a>
            <a
              href="/"
              className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10"
            >
              <Image
                src="/gato.jpg"
                className="w-full"
                width={120}
                height={120}
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                slowburn, Alto, Chet, Baker and more
              </span>
            </a>
            <a
              href="/"
              className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10"
            >
              <Image
                src="/gato.jpg"
                className="w-full"
                width={120}
                height={120}
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                slowburn, Alto, Chet, Baker and more
              </span>
            </a>
            <a
              href="/"
              className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10"
            >
              <Image
                src="/gato.jpg"
                className="w-full"
                width={120}
                height={120}
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                slowburn, Alto, Chet, Baker and more
              </span>
            </a>
          </div>
        </main>
      </div>
      <Footer/>
    </div>
  );
}
