import dramatic from "../../assets/dramatic.svg";
import { NavbarItems } from "../../constants/constants";
import { Button } from "../button/Button";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 z-10 flex items-center justify-between w-full px-10 py-4 navbar">
      <div className="">
        <img src={dramatic} alt="" />
      </div>
      <div className="flex items-center justify-center gap-7">
        {NavbarItems.map((item) => (
          <a key={item.label} className="text-base font-normal cursor-pointer">
            {item.label}
          </a>
        ))}
      </div>
      <div>
        <Button variant="bg-[#FFA500] w-[100px] h-[40px]">Login</Button>
      </div>
    </div>
  );
};

export default Navbar;
