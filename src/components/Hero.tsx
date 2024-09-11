export default function Hero() {
  return (
    <div className="bg-herosm bg-cover bg-center bg-no-repeat py-[100px] px-7 lg:py-[200px] font-bold text-3xl lg:text-5xl rounded-lg">
      <div className="text-blue-50 max-w-[70%]   md:max-w-[60%]">
        <p className="backdrop-blur-sm ">
        De la vision à la construction. Transformez votre{" "}
          <span className="text-blue-500 ">maison de rêve</span> en réalité.
        </p>
      </div>
      <button className="bg-blue-700 hover:bg-blue-900 text-blue-50 text-[1rem]  lg:text-[1rem] font-medium   py-3 px-6 rounded-full mt-5">
        {" "}
        Contactez nous{" "}
      </button>
    </div>
  );
}
