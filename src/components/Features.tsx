import { CiCalendar, CiRuler } from "react-icons/ci";
import { GoGoal } from "react-icons/go";
import Feature from "./Feature";

const data = [
  {
    title: "Precision and Innovation",
    desc: "Our cutting-edge technology and attention to detail ensure that our designs are not only visually stunning but also structurally sound and feasible.",
    icon: <CiRuler size={40} />,
  },
  {
    title: "Timely Project Completion",
    desc: "We pride ourselves on delivering projects on time, without compromising on quality, so you can move into your dream home as planned.",
    icon: <CiCalendar size={40} />,
  },
  {
    title: "Tailored to Your Vision",
    desc: "We work closely with you to ensure every aspect of the design reflects your personal preferences and lifestyle needs, creating a truly custom home.",
    icon: <GoGoal size={40} />,
  },
];

export default function Features() {
  return (
    <div className="mb-8" id="features">
      <h2 className="font-bold text-blue-950 text-[1.8rem] text-center mt-5 mb-2">
        Why C.I.A.T
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              
      {data.map((item, i) => (
          <Feature desc={item.desc} icon={item.icon} title={item.title} key={i} />
        ))}
        </div>
    </div>
  );
}
