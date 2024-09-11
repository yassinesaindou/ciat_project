import { HiChevronDown, HiChevronRight } from "react-icons/hi";

interface Props{
  onOpen: (id: number) => void;
  openId: number |null;
  id: number;
  question: string;
  answer: string;
}

export default function FAQ({onOpen,openId, id, question, answer}: Props) {
  return (
    <div className="shadow-md shadow-blue-100 px-3 py-2 lg:px-4 lg:py-5 text-[1rem]  text-blue-950">
     
    <div onClick={() => onOpen(id)} className="flex justify-between items-center font-semibold  rounded-lg cursor-pointer ">
      <p>
        {question}
          </p>
     {openId !==id? <HiChevronRight />: <HiChevronDown />}
      
    </div>
      {openId ===id && <p className="text-[1rem]">{answer}</p>}
    </div>
  );
}
