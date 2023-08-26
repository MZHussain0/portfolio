import { FC } from "react";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <div className="max-w-7xl mx-auto ">
      <div className="text-center text-3xl sm:text-6xl font-semibold pt-16 sm:pt-28 lg:pt-48 px-4">
        <div className="">
          <p className="flex flex-wrap gap-4 items-center justify-center">
            Hey! My name is{" "}
            <span className="text-destructive font-bold">M.Z. Hussain</span>
          </p>
          <p className=" text-base sm:text-xl text-center pt-4 underline decoration-2 decoration-green-700 text-background hover:tracking-widest tranistion duration-1000 hover:text-green-700 hover:no-underline ">
            - FULLSTACK DEVELOPER -
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 text-center h-72 items-start justify-center pt-10 sm:pt-20">
        <HeroLeft />
        <div className=" col-span-1">
          <HeroRight />
        </div>
      </div>
    </div>
  );
};

export default Hero;
