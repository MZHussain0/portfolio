import { projects } from "@/lib/constants";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { FC } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { CodeIcon, GlobeIcon } from "lucide-react";

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <div className="py-8 px-8">
      <h1
        className="text-3xl font-bold
       text-primary-foreground underline decoration-destructive decoration-2  capitalize">
        Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8  ">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="bg-muted text-primary rounded-xl overflow-hidden hover:shadow-md hover:shadow-destructive transition duration-500">
            <Image
              src={project.image}
              width={600}
              height={200}
              alt={project.title}
              className="rounded-xl object-center object-contain opacity-50 hover:scale-105 hover:rotate-2 hover: transition duration-300"
            />

            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>

            <div className=" px-2 my-2 flex items-center justify-between gap-2">
              <Button
                className="group w-full text-lg rounded-xl"
                variant={"destructive"}>
                Demo{" "}
                <GlobeIcon className="w-5 h-5 ml-2 group-hover:translate-x-2 transition duration-300" />
              </Button>
              <Button className="group w-full text-lg rounded-xl">
                Code{" "}
                <CodeIcon className="w-5 h-5 ml-2 group-hover:translate-x-2 transition duration-300" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
