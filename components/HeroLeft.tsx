import { FC } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { CpuIcon, DownloadCloud } from "lucide-react";

interface HeroLeftProps {}

const HeroLeft: FC<HeroLeftProps> = ({}) => {
  return (
    <div className="col-span-1 flex flex-wrap gap-4 p-4 items-center justify-center">
      <div className="relative col-span-1 ml-8 w-60 ">
        <div className=" w-44 h-44 mt-2 border-[16px] border-destructive rounded-full"></div>
        <Image
          src="/logo.png"
          alt="profile"
          width={180}
          height={180}
          className="absolute object-cover top-2 -left-2 animate-wiggle transition-all hover:animate-spin-slow"
        />
      </div>
      <div className="col-span-1 flex flex-col items-center justify-center">
        <p className="text-xl mb-4 text-center w-72">
          I enjoy building things that live on the internet.
          <br />
          My focus is{" "}
          <span className="font font-semibold underline decoration-destructive decoration-2">
            React(NextJS)
          </span>
        </p>
        <div className=" flex flex-col items-center justify-center gap-4">
          <Button
            size={"lg"}
            variant={"destructive"}
            className="group px-8 py-6 text-lg rounded-xl">
            Projects{" "}
            <CpuIcon className="w-6 h-6 ml-2 group-hover:translate-x-2 transition duration-200" />{" "}
          </Button>
          <Button
            size={"lg"}
            variant={"destructive"}
            className="group px-8 py-6 text-lg rounded-xl">
            Resume{" "}
            <DownloadCloud className="w-6 h-6 ml-2 group-hover:translate-x-2 transition duration-200" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroLeft;
