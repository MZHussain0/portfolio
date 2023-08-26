import { FC } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="max-w-7xl h-24 mx-auto flex items-center justify-between text-xl sm:text-3xl font-bold px-4 ">
      <Link
        href={"/"}
        className="flex items-center  justify-center gap-x-2 tracking-wider">
        <Image
          src="/logo-sm.png"
          alt="logo"
          width={60}
          height={60}
          className="rounded-full"
        />
        <div className="text-primary">M.Z. Hussain</div>
      </Link>
      <div className="flex items-center justify-center gap-x-4 text-lg sm:text-2xl font-semibold">
        <Link
          href={"/projects"}
          className="opacity-80  hover:opacity-100 transition duration-200 text-muted-foreground">
          Projects
        </Link>
        <Button
          className="opacity-80 hover:opacity-100 transition duration-200 text-lg rounded-xl"
          variant={"destructive"}>
          Resume
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
