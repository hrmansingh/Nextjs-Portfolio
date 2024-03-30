import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/travelpic.png"
          title="Travel Explorer App"
          description="This is the MERN STACK application. Here user can explore other reviews and can also share their feelings about the places."
        />
        <ProjectCard
          src="/cryptopic.png"
          title="Real-Time Crypto App"
          description="As a crypto-enthuastic, I've made my own application about crypto so that I can get the information as I needed."
        />
        <ProjectCard
          src="/portfoliopic.png"
          title="Women-Portfolio"
          description="I made this Portfolio long ago to practice my knowledge when i just started learning and it's my first project. lated on I gifted this to my male-friend)."
        />
      </div>
    </div>
  );
};

export default Projects;
