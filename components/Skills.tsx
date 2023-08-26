import { skills } from "@/lib/constants";
import Image from "next/image";
import { FC } from "react";
import { Badge } from "./ui/badge";

interface SkillsProps {}

const Skills: FC<SkillsProps> = ({}) => {
  return (
    <div>
      <h1
        className="text-3xl font-bold
       text-primary-foreground underline decoration-destructive decoration-2 py-8 capitalize">
        Skills
      </h1>
      <div className="flex items-center justify-center gap-4 flex-wrap">
        {skills.map((skill) => (
          <Badge
            key={skill.id}
            color="red"
            className="group px-4 py-2 text-xl bg-slate-300 hover:bg-slate-300 border-b-card  hover:-translate-y-1 transition duration-300">
            <Image
              src={skill.url}
              width={30}
              height={30}
              alt={skill.name}
              className="mr-2 object-center object-contain  group-hover:animate-none transition-all  animate-wiggle"
              priority={true}
              loading="eager"
            />
            {skill.name}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default Skills;
