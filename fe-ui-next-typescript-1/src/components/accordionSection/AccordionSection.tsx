"use client";
import { AccordionProps } from "@/interface";
import { useAccordionStore } from "@/store/useAccordionStore/useAccordionStore";

const AccordionSection: React.FC<AccordionProps> = ({ id, title, content }) => {
  const { openItem, toggleAccordion } = useAccordionStore();

  const isOpen = openItem === id;

  return (
    <div className="border rounded mb-2">
      <button
        onClick={() => toggleAccordion(id)}
        className="w-full text-left px-4 py-2 bg-gray-200 hover:bg-gray-300"
      >
        {title}
      </button>
      {isOpen && <div className="px-4 py-2 bg-gray-50 border-t">{content}</div>}
    </div>
  );
};

export default AccordionSection;
