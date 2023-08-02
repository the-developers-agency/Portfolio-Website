import React from "react";
import logo from "/assets/Images/CompanyLogo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-4 py-[40px]  container mx-auto">
        <div>
          <Image
            // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src={logo}
            alt="Company Logo"
            className="h-[50px] w-[250px]"
            priority
          />
        </div>
        <div className="flex flex-col gap-[10px]">
          <h1 className="font-bold  text-3xl text-left align-middle text-transparent bg-clip-text bg-gradient-to-b from-[#FFCB12] to-[#F3F3F3] pb-[40px]">
            Explore
          </h1>
          <p className="text-[#ADADAD]">About</p>
          <p className="text-[#ADADAD]">Our Process</p>
          <p className="text-[#ADADAD]">Team</p>
          <p className="text-[#ADADAD]">Tech</p>
          <p className="text-[#ADADAD]">Blockchain Development Services</p>
          <p className="text-[#ADADAD]">Blockchain Game Development Services</p>
          <p className="text-[#ADADAD]">Media</p>
          <p className="text-[#ADADAD]">Portfolio</p>
          <p className="text-[#ADADAD]">Blog</p>
          <p className="text-[#ADADAD]">Media Kit</p>
        </div>
        <div className="flex flex-col gap-[10px]">
          <h1 className="font-bold  text-3xl text-left align-middle text-transparent bg-clip-text bg-gradient-to-b from-[#FFCB12] to-[#F3F3F3] pb-[40px]">
            Our Offices
          </h1>
          <p className="text-[#ADADAD]">
            UNITED STATES <br />
            2785 W Seltice Way, Ste APost <br />
            Falls, ID 83854 <br />
            (1)866-882-7737 <br />
            hello@rapidinnovation.io
          </p>
          <p className="text-[#ADADAD] pt-[30px]">
            INDIA <br />
            H-64, Sector 63,Noida, 201003 <br />
            (1)866-882-7737
            <br />
            hello@apexteam.io
          </p>
        </div>
        <div className="flex flex-col gap-[10px]">
          <h1 className="font-bold  text-3xl text-left align-middle text-transparent bg-clip-text bg-gradient-to-b from-[#FFCB12] to-[#F3F3F3] pb-[40px]">
            News Letter
          </h1>
          <input
            className="bg-transparent border-b-[1px] placehodler:text-[#ADADAD] pb-[10px] w-[200px]"
            placeholder="Email Address"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
