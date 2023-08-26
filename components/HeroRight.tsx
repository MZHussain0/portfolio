import { keyLinks } from "@/lib/constants";
import { FC } from "react";
import { Button } from "./ui/button";

interface HeroRightProps {}

const HeroRight: FC<HeroRightProps> = ({}) => {
  return (
    <>
      <div className="w-full text-xl font-semibold pt-4"> Key Links:</div>

      <div className="flex items-center justify-center flex-wrap gap-4 p-8 ">
        {keyLinks.map((link) => (
          <Button
            key={link.title}
            variant={"ghost"}
            size={"lg"}
            className="border-2 text-lg hover:bg-destructive">
            {link.title} <span>{<link.icon className="w-5 h-5 ml-2" />}</span>
          </Button>
        ))}
      </div>
    </>
  );
};

export default HeroRight;
