import Image from "next/image";
import Link from "next/link";
import React from "react";
import personalProjectImage from "../../public/images/personal-project.png";
const Projects = () => {
  const projects = [
    {
      title: "React Resume Template",
      src: personalProjectImage,
      link: "https://portfolio-kj2103.web.app",
    },
  ];
  return (
    <div className="max-w-xl mx-auto mt-12">
      <h2 className="mb-2">Personal Projects</h2>
      {projects.map((project) => (
        <div key={project.title}>
          <Image
            src={project.src}
            alt={project.title}
            width={1280}
            height={800}
          />
          <p className="mt-2 text-right text-blue-500 text-sm">
            <Link target="_blank" className="underline p-2" href={project.link}>
              {project.title}
            </Link>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
