"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <div className="max-w-xl mx-auto">
      <header className="text-xl max-w-xl mx-auto">
        <span className="text-orange-500">⌘</span>
        <h1 className="font-semibold">Kunj Jansari</h1>
        <h4 className="text-slate-400 flex items-center gap-1">
          Frontend at
          <Link
            target="_blank"
            href="https://hexabrain.com"
            className="hover:bg-emerald-100 rounded-full px-2 pr-3 py-1 border border-transparent hover:border-emerald-400 transition-all cursor-alias text-emerald-500 inline-flex items-center gap-1.5"
          >
            <Image
              alt="hexabrain logo"
              src="https://hexabrain.com/assets/images/Logos/Logo_OnlyHexagon.png"
              width={18}
              height={18}
            />
            Hexabrain Technologies
          </Link>
        </h4>
        <div className="mt-4 flex gap-2">
          <Link
            target="_blank"
            className="h-10 w-10 text-slate-600 bg-white shadow-sm hover:text-blue-400 text-xl rounded-xl flex items-center justify-center border border-slate-200"
            href="https://github.com/kunj2103/"
          >
            <FaGithubAlt />
          </Link>
          <Link
            target="_blank"
            className="h-10 w-10 text-slate-600 bg-white shadow-sm hover:text-blue-400 text-xl rounded-xl flex items-center justify-center border border-slate-200"
            href="https://linkedin.com/in/kunjjansari2103/"
          >
            <FaLinkedin />
          </Link>
        </div>
      </header>
      <section className="my-4 mt-12">
        <div className="px-4 py-3 rounded-xl bg-white shadow-sm border">
          <div className="flex gap-1.5 text-xs items-center font-mono font-medium text-orange-500">
            about_me.md
          </div>
          <Typewriter
            words={[
              "As a full-stack developer at HexaBrain Technologies. My role encompasses innovating software solutions that align with business needs, a testament to my logical approach and organizational skills honed during my academic and professional journey.",
            ]}
            cursor
            typeSpeed={100}
            delaySpeed={1000}
            cursorColor="rgb(249 115 22/1)"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
