import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { SeparatorHorizontal } from "lucide-react";
import { FC } from "react";

interface ProjectPageProps {}

const ProjectPage: FC<ProjectPageProps> = ({}) => {
  return (
    <div className="max-w-7xl mx-auto pt-8 m text-center flex flex-col items-center justify-center gap-4">
      <Skills />

      <Projects />
    </div>
  );
};

export default ProjectPage;
