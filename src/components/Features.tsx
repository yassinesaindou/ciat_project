import { CiCalendar, CiRuler } from "react-icons/ci";
import { GoGoal } from "react-icons/go";
import Feature from "./Feature";

const data = [
  {
    title: "Précision et innovation",
    desc: "Notre technologie de pointe et notre attention aux détails garantissent que nos conceptions sont non seulement visuellement époustouflantes, mais aussi structurellement solides et réalisables.",
    icon: <CiRuler size={40} />,
  },
  {
    title: "Achèvement de projet dans les délais",
    desc: "Nous sommes fiers de livrer nos projets dans les délais, sans compromettre la qualité, afin que vous puissiez emménager dans la maison de vos rêves comme prévu.",
    icon: <CiCalendar size={40} />,
  },
  {
    title: "Adapté à votre vision",
    desc: "Nous travaillons en étroite collaboration avec vous pour garantir que chaque aspect du design reflète vos préférences personnelles et vos besoins en matière de style de vie, créant ainsi une maison véritablement sur mesure.",
    icon: <GoGoal size={40} />,
  },
];

export default function Features() {
  return (
    <div className="mb-8" id="features">
      <h2 className="font-bold text-blue-950 text-[1.8rem] text-center mt-5 mb-2">
        Pourquoi C.I.A.T
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              
      {data.map((item, i) => (
          <Feature desc={item.desc} icon={item.icon} title={item.title} key={i} />
        ))}
        </div>
    </div>
  );
}
