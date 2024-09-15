import React, { Fragment } from "react";
import {
  RiNextjsFill,
  RiReactjsFill,
  RiHtml5Fill,
  RiCss3Fill,
  RiJavascriptFill,
  RiNodejsFill,
} from "react-icons/ri";
import { SiMysql, SiRuby, SiRubyonrails, SiMongodb } from "react-icons/si";
import { IconType } from "react-icons/lib";

interface Tech {
  src: keyof typeof iconComponents;
}

const techStack: Tech[] = [
  {
    src: "RiNextjsFill",
  },
  {
    src: "RiReactjsFill",
  },
  {
    src: "RiHtml5Fill",
  },
  {
    src: "RiCss3Fill",
  },
  {
    src: "RiJavascriptFill",
  },
  {
    src: "RiNodejsFill",
  },
  {
    src: "SiMysql",
  },
  {
    src: "SiRuby",
  },
  {
    src: "SiRubyonrails",
  },
  {
    src: "SiMongodb",
  },
];

const iconComponents = {
  RiNextjsFill: RiNextjsFill,
  RiReactjsFill: RiReactjsFill,
  RiHtml5Fill: RiHtml5Fill,
  RiCss3Fill: RiCss3Fill,
  RiJavascriptFill: RiJavascriptFill,
  RiNodejsFill: RiNodejsFill,
  SiMysql: SiMysql,
  SiRuby: SiRuby,
  SiRubyonrails: SiRubyonrails,
  SiMongodb: SiMongodb,
};

const TechStack = () => {
  return (
    <div className="max-w-xl mx-auto mt-12">
      <h2 className="mb-2 font-medium text-slate-400 text-xl">Tech Stack</h2>
      <div>
        <div className="bg-white max-w-xl w-full rounded-xl shadow-sm border p-2">
          <div className="logos">
            <div className="logos-slide">
              {techStack.map((tech: Tech) => {
                const IconComponent: IconType = iconComponents[tech.src];
                return (
                  <div key={tech.src} className="h-10 w-10 mx-5">
                    <IconComponent className="text-gray-500" />
                  </div>
                );
              })}
            </div>
            <div className="logos-slide">
              {techStack.map((tech: Tech) => {
                const IconComponent: IconType = iconComponents[tech.src];
                return (
                  <div key={tech.src} className="h-10 w-10 mx-5">
                    <IconComponent className="text-gray-500" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
