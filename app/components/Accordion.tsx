"use client";

import React, { useState } from "react";

interface AccordionItemProps {
  title: string;
  content: string | JSX.Element;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen,
  onClick,
}) => {
  return (
    <div>
      <h2>
        <button
          onClick={onClick}
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 ${
            isOpen
              ? "bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white"
              : "bg-white"
          }`}
          aria-expanded={isOpen}
        >
          <span>{title}</span>
          <svg
            className={`w-3 h-3 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      {isOpen && (
        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          <p className="text-gray-500 dark:text-gray-400">{content}</p>
        </div>
      )}
    </div>
  );
};

interface AccordionProps {
  initialOpenIndex?: number;
}

const Accordion: React.FC<AccordionProps> = ({ initialOpenIndex = null }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(initialOpenIndex);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "How did you make your website?",
      content:
        "Nextjs 14 app router, TailwindCSS and TypeScript.\nDeployed to Vercel ▲.",
    },
    {
      title: "How long have you been coding?",
      content: "Since 2023.",
    },
  ];

  return (
    <div
      id="accordion-color"
      className="border border-gray-200 dark:border-gray-700"
    >
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
