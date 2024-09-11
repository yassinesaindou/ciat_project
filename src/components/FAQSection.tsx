import { useState } from "react";
import FAQ from "./FAQ";

const faqData = [
  {
    id: 1,
    question: "Quels services offrez-vous ?",
    answer:
      "Nous fournissons des plans de maison en 2D et 3D, l'exécution des projets sur site, et des services d'estimation précise des coûts pour garantir une expérience de construction fluide de bout en bout.",
  },
  {
    id: 2,
    question: "Combien de temps faut-il pour compléter un projet ?",
    answer:
      "Le délai dépend de la complexité du projet, mais nous travaillons efficacement pour livrer les phases de conception et de construction dans les délais sans compromettre la qualité.",
  },
  {
    id: 3,
    question:
      "Puis-je apporter des modifications au design pendant le processus ?",
    answer:
      "Oui ! Nous offrons des révisions illimitées de nos conceptions en 2D et 3D pour garantir que le plan final corresponde exactement à votre vision.",
  },
  {
    id: 4,
    question: "Gérez-vous l'ensemble du processus de construction ?",
    answer:
      "Oui, nous gérons l'ensemble du processus, de la conception initiale à l'exécution sur site, en veillant à ce que votre maison soit construite selon les plus hauts standards.",
  },
  {
    id: 5,
    question: "Quel type de projets spécialisez-vous ?",
    answer:
      "Nous nous spécialisons dans les projets résidentiels, y compris les maisons sur mesure, les rénovations et les extensions. Nous adaptons nos services pour répondre à vos besoins.",
  },
  {
    id: 6,
    question: "Comment commencer ?",
    answer:
      "Contactez-nous via notre site web, et nous planifierons une consultation initiale pour discuter de votre vision, de vos besoins, et comment nous pouvons réaliser votre maison de rêve.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  function handleOpen(id: number) {
    setOpenId((openId) => (openId === id ? null : id));
  }
  return (
    <div className="mb-9" id="faq">
      <h2 className="font-bold text-blue-950 text-[1.8rem] text-center mt-[3rem] mb-2">
        Questions fréquemment posées
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
