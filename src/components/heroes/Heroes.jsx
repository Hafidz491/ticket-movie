import { HeroItems } from "../../constants/constants";
import { Button } from "../button/Button";

export const Heroes = () => {
  return (
    <div className="-z-10">
      {HeroItems.map((item) => (
        <div key={item.id} className="relative">
          <img src={item.image} alt={item.title} className="w-full h-screen" />
          <div className="absolute top-[36%] left-[21%] lg:pl-4 sm:pl-28 w-[500px] transform -translate-x-1/2 text-white">
            <h1 className="text-[32px] font-bold text-white">
              {item.subtitle}
            </h1>
            <h2 className="text-[14px] font-regular text-[#9CA4AB]">
              {item.service}
            </h2>
            <div className="flex items-center justify-start gap-6 mt-6">
              <Button variant="bg-[#00925D] w-[200px] h-[45px]">
                SHow Package
              </Button>
              <Button variant="bg-transparent border border-white w-[200px] h-[45px]">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
