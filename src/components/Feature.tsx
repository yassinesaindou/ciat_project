import { ReactNode } from "react";
 


interface Props{
  title: string,
  desc: string;
  icon: ReactNode
}
export default function Feature({title, desc, icon}: Props) {
  return (
    <div className="mb-6">
      <div className="bg-blue-50 w-fit rounded-md max-w-[350px] mx-auto shadow-md shadow-blue-50 grid place-items-center gar-[1.2rem] py-5 px-3">
        <div className="p-5 border rounded-full bg-blue-100 mb-5 text-blue-500">

        {icon}
        </div>
        <h2 className="font-bold text-blue-950 text-[1.2rem] text-center mb-2">{title}</h2>
              <p className="text-blue-950  ">{desc} </p>
      </div>
    </div>
  );
}
