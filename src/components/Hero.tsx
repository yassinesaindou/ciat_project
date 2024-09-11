export default function Hero() {
  return (
    <div className="bg-herosm bg-cover bg-center bg-no-repeat py-[100px] px-7 lg:py-[200px] font-bold text-3xl lg:text-5xl rounded-lg">
      <div className="text-blue-50 max-w-[70%]   md:max-w-[60%]">
        <p className="backdrop-blur-sm ">
          From Vision to Construction. Turn Your{" "}
          <span className="text-blue-500 ">Dream House</span> into reality.
        </p>
      </div>
      <button className="bg-blue-700 hover:bg-blue-900 text-blue-50 text-[1rem]  lg:text-[1rem] font-medium   py-3 px-6 rounded-full mt-5">
        {" "}
        Contact Us{" "}
      </button>
    </div>
  );
}
