import Image from "next/image";
import React from "react";
import logo from "/assets/Images/CompanyLogo.png";
import Menu from "/assets/Images/MenuButton.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="flex container mx-auto items-center absolute w-full pt-[50px]  bg-black flex-row justify-between">
        <div className="item-center">
          <Link href="/">
            <Image
              // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src={logo}
              alt="Company Logo"
              className="h-[50px] w-[250px]"
              priority
            />
          </Link>
        </div>
        <div className="flex   bg-black flex-row gap-[70px]">
          <div className="">
            <text className="text-white font-Sen font-[700]  text-[17px] leading-5">
              About Us
            </text>
          </div>
          <div className="">
            <text className="text-[#A6A6A6] align-middle font-Sen non-italic font-normal  text-[17px] leading-5">
              Portfolio
            </text>
          </div>
          <Link href="/career">
            <text className="text-[#A6A6A6] align-middle font-Sen non-italic font-normal text-[17px] leading-5">
              Careers
            </text>
          </Link>

          <div className="">
            <text className="text-[#A6A6A6] align-middle font-Sen non-italic font-normal text-[17px] leading-5">
              Blog
            </text>
          </div>
        </div>
        <div className="flex flex-row w-[15%] justify-between">
          <div className="bg-gradient-to-t from-[#FDB739]  to-[#BFA855] rounded-[9px] p-[2px]">
            <div className="flex h-full w-full items-center justify-center bg-black rounded-[8px] py-[10px]  px-[25px]">
              <text className="text-white align-middle font-Sen font-[700]  text-[17px] leading-5">
                Get started
              </text>
            </div>
          </div>
          <div className="item-center align-middle mt-[10px] ">
            <Image
              // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src={Menu}
              alt="Menu"
              width={28}
              height={28}
              priority
              className="align-middle"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
