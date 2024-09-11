import { FormEvent } from "react";

export default function ContactForm() {
  function handleSubmit(e: FormEvent) {
    console.log(e.target);
  }
  return (
    <div id="contact">
      <h2 className="font-bold text-blue-950 text-[1.8rem] text-center mt-5 mb-2">
        Contactez Nous
      </h2>
      <form
        action="https://formspree.io/f/xyzgaywd"
        method="POST"
        className="shadow-md shadow-blue-100 w-[100%] rounded-lg lg:w-[70%] mx-auto p-4"
        onSubmit={(e) => handleSubmit(e)}>
        <Input name="name" type="text" placeholder="Nom" />
        <Input name="email" type="email" placeholder="Email" />
        <Input name="phone" type="tel" placeholder="Numéro de téléphone" />
        <textarea
          className="input outline-none px-3 py-2 text-[1rem] border border-blue-200 w-[100%] min-h-[200px] rounded-md mb-3 "
          placeholder="Entrez le message ici ..."
          name="message"
        />
        <button className="bg-blue-700 hover:bg-blue-900 text-blue-50 font-semibold py-2 px-4 rounded-full text-[1rem] ">
          {" "}
          Envoyer le message
        </button>
      </form>
    </div>
  );
}
interface Props {
  type: string;
  placeholder: string;
  name: string;
}

function Input({ type, placeholder, name }: Props) {
  return (
    <input
      type={type}
      className="input outline-none px-3 py-2 text-[1rem] border border-blue-200 w-[100%] rounded-md mb-3 "
      placeholder={placeholder}
      name={name}
    />
  );
}
