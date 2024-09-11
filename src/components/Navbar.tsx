import { BiMenu } from "react-icons/bi";

function toggleOpen() {
  const menu = document.getElementById("menu");
  const navElements = document.getElementById("navElements");
  menu?.addEventListener("click", () => {
    navElements?.classList.toggle("hidden");
  });
}

function closeMenu() {
  const navElements = document.getElementById("navElements");
  navElements?.addEventListener("click", () => {
    navElements?.classList.add("hidden");
  });
}
export function Navbar() {
  // useEffect(() => {
  //   const menu = document.getElementById("menu");
  // const navElements = document.getElementById("navElements");
  // menu?.addEventListener("click", () => {
  //   navElements?.classList.toggle("hidden");
  // });
  // });
  return (
    <nav
      id="#"
      className="shadow-md shadow-blue-100  py-3 md:flex justify-between items-center text-[1.1rem]   px-5 flex-wrap ">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl text-blue-500 font-bold ">C.I.A.T</h1>
        <div className="md:hidden">
          <BiMenu
            onClick={() => toggleOpen()}
            id="menu"
            className="text-blue-600 cursor-pointer "
            size={30}
          />
        </div>
      </div>
      <div
        className="md:flex text-center  justify-between items-center gap-5 text-blue-950 font-medium hidden 
       min-w-[100%] md:min-w-fit"
        id="navElements">
        <p className="hover:text-blue-700 cursor-pointer" onClick={closeMenu}>
          <a href="#services">Services</a>
        </p>
        <p className="hover:text-blue-700 cursor-pointer my-6 md:my-0">
          <a href="#features">Why C.I.A.T</a>
        </p>
        <p className="hover:text-blue-700 cursor-pointer">
          <a href="#faq">F.A.Q</a>
        </p>
        <button className="bg-blue-700 hover:bg-blue-900 text-blue-50 font-medium py-1 text-[1.1rem] px-5 rounded-full mt-3 md:mt-0">
          <a href="#contact">Contact us</a>
        </button>
      </div>
    </nav>
  );
}
