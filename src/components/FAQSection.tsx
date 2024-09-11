import { useState } from "react";
import FAQ from "./FAQ";

const faqData = [
  {
    id: 1,
    question: "What services do you offer?",
    answer:
      "We provide 2D and 3D house plans, on-site execution of projects, and accurate cost estimation services to ensure a smooth home-building experience from start to finish.",
  },
  {
    id: 2,
    question: "How long does it take to complete a project?",
    answer:
      "The timeline depends on the complexity of the project, but we work efficiently to deliver both the design and construction phases on time without compromising quality.",
  },
  {
    id: 3,
    question: "Can I make changes to the design during the process?",
    answer:
      "Yes! We offer unlimited revisions on our 2D and 3D designs to ensure the final plan meets your exact vision.",
  },
  {
    id: 4,
    question: "Do you handle the entire construction process?",
    answer:
      "Yes, we manage the entire process, from initial design to on-site execution, ensuring your home is built to the highest standards.",
  },
  {
    id: 5,
    question: "What kind of projects do you specialize in?",
    answer:
      "We specialize in residential housing projects, including custom homes, renovations, and extensions. We tailor our services to fit your needs.",
  },
  {
    id: 6,
    question: "How do I get started?",
    answer:
      "Contact us through our website, and we'll schedule an initial consultation to discuss your vision, requirements, and how we can bring your dream home to life.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  function handleOpen(id: number) {
    setOpenId((openId) => (openId === id ? null : id));
  }
  return (
      <div className="mb-9">
            <h2 className="font-bold text-blue-950 text-[1.8rem] text-center mt-[3rem] mb-2">
        F.A.Q
      </h2>
      {faqData.map((item) => (
        <FAQ
          key={item.id}
          answer={item.answer}
          question={item.question}
          id={item.id}
          onOpen={handleOpen}
          openId={openId}
        />
      ))}
    </div>
  );
}
