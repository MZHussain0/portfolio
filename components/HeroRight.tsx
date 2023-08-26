import { keyLinks } from "@/lib/constants";
import { FC } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

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
            className="group border-2 text-lg hover:bg-destructive hover:rounded-xl">
            <a
              href={link.href}
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex items-center justify-center">
              {link.title}{" "}
              <Image
                src={link.icon}
                width={30}
                height={30}
                alt={link.title}
                className="ml-2 object-center object-contain group-hover:translate-x-2 transition duration-300"
                priority={true}
                loading="eager"
              />
            </a>
          </Button>
        ))}
      </div>
    </>
  );
};

export default HeroRight;
