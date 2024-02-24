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

const Footer = () => {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image src="/gato.jpg" width={54} height={54} className="rounded" />
        <div className="flex flex-col">
          <strong className="font-normal">Mooshroom Island</strong>
          <span className="text-xs text-zinc-400">Minecraft, Monolism</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <FaShuffle size={18} className="text-zinc-200" />
          <FaStepBackward />
          <button className=" w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-white text-black">
            <FaPlay />
          </button>
          <FaStepForward size={18} className="text-zinc-200" />
          <BsRepeat size={18} className="text-zinc-200" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-500">0:31</span>
          <div className="h-1 rounded-full w-96 bg-zinc-600 ">
            <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
          </div>
          <span className="text-xs text-zinc-500">3:37</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <GiMicrophone size={20} />
        <HiOutlineQueueList size={20} />
        <PiComputerTowerBold size={20} />
        <div className="flex  items-center gap-2">
          <FaVolumeDown size={20} />
          <div className="h-1 rounded-full w-24 bg-zinc-600">
            <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
          </div>
        </div>
        <MdCloseFullscreen size={20} />
      </div>
    </footer>
  );
};

export default Footer;
